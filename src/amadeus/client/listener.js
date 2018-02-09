import Response from './response';

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
 * @protected
 */
class Listener {
  constructor(request, emitter) {
    this.request = request;
    this.emitter = emitter;
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
    this.emitter.emit('resolve', response);
  }

  /**
   * When the connection was not successful, determine the reason and resolve
   * the promise accordingly.
   *
   * @param  {Response} response
   */
  onFail(response) {
    let Error;
    if (response.statusCode >= 500) {
      Error = ServerError;
    } else if (response.statusCode == 401) {
      Error = AuthenticationError;
    } else if (response.statusCode == 404) {
      Error = NotFoundError;
    } else if (response.statusCode >= 400) {
      Error = ClientError;
    } else if (!response.parsed) {
      Error = ParserError;
    } else {
      Error = UnknownError;
    }

    let error = new Error(response);
    this.emitter.emit('reject', error);
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
      this.emitter.emit('reject', error);
    };
  }
}

export default Listener;
