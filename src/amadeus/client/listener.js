import Response from './response';
import util     from 'util';

import {
  ServerError,
  NotFoundError,
  ClientError,
  ParserError,
  UnknownError,
  NetworkError,
  AuthenticationError
} from './errors';


/**
 * Listen to changes in the HTTP request and build Response/ResponseError
 * objects accordingly.
 *
 * @param {Request} request the request object used to make the call
 * @param {EventEmitter} emitter a Node event emitter
 * @param {Client} client the client instance to log results to
 * @protected
 */
class Listener {
  constructor(request, emitter, client) {
    this.request = request;
    this.emitter = emitter;
    this.client  = client;
  }

  // PROTECTED


  /**
   * Listens to various events on the http_response object, listening for data,
   * connections closing for bad reasons, and the end of the response.
   *
   * Used by the Client when making an API call.
   *
   * @param  {Object} http_response a Node http response object
   * @protected
   */
  onResponse(http_response) {
    let response = new Response(http_response, this.request);

    http_response.on('data',  response.addChunk.bind(response));
    http_response.on('end',   this.onEnd(response).bind(this));
    http_response.on('close', this.onNetworkError(response).bind(this));
    http_response.on('error', this.onNetworkError(response).bind(this));
  }

  /**
   * Listens to a network error when making an API call.
   *
   * Used by the Client when making an API call.
   *
   * @param  {Object} http_response a Node http response object
   * @protected
   */

  onError(http_response) {
    let response = new Response(http_response, this.request);
    this.onNetworkError(response)();
  }

  // PRIVATE


  /**
   * When the connection ends, check if the response can be parsed or not and
   * act accordingly.
   *
   * @param  {Response} response
   */
  onEnd(response) {
    return () => {
      response.parse();
      if (response.success()) { this.onSuccess(response); }
      else { this.onFail(response);  }
    };
  }

  /**
   * When the response was successful, resolve the promise and return the
   * response object
   *
   * @param  {Response} response
   */
  onSuccess(response) {
    this.log(response);
    this.emitter.emit('resolve', response);
  }

  /**
   * When the connection was not successful, determine the reason and resolve
   * the promise accordingly.
   *
   * @param  {Response} response
   */
  onFail(response) {
    let Error = this.errorFor(response);
    let error = new Error(response);
    this.log(response, error);
    this.emitter.emit('reject', error);
  }


  /**
   * Find the right error for the given response.
   *
   * @param {Response} reponse
   * @returns {ResponseError}
   */
  errorFor({statusCode, parsed}) {
    let error = null;
    if (statusCode >= 500) { error = ServerError; }
    else if (statusCode == 401) { error = AuthenticationError; }
    else if (statusCode == 404) { error = NotFoundError; }
    else if (statusCode >= 400) { error = ClientError; }
    else if (!parsed) { error = ParserError; }
    else { error = UnknownError; }
    return error;
  }

  /**
   * When the connection ran into a network error, reject the promise with a
   * NetworkError.
   *
   * @param  {Response} response
   */
  onNetworkError(response) {
    return () => {
      response.parse();
      let error = new NetworkError(response);
      this.log(response, error);
      this.emitter.emit('reject', error);
    };
  }

  /**
   * Logs the response, when in debug mode
   *
   * @param  {Response} response the response object to log
   * @private
   */
  log(response, error) {
    if (this.client.debug()) {
      /* istanbul ignore next */
      this.client.logger.log(util.inspect(response, false, null));
    }
    if (!this.client.debug() && this.client.warn() && error) {
      /* istanbul ignore next */
      this.client.logger.log('Amadeus', error.code, error.description);
    }
  }
}

export default Listener;
