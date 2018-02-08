import EventEmitter from 'events';
import Promise      from 'bluebird';
import qs           from 'qs';

import ResponseHandler from './response_handler';

/**
 * A Request object, building the call before passing it to the standard library
 *
 * @property {string} verb the HTTP method, for example `GET` or `POST`
 * @property {string} path the full path to call
 * @property {Object} params the parameters to pass in the query or body
 * @param {string} bearerToken a full BearerToken
 *
 * @param {string} verb the HTTP method, for example `GET` or `POST`
 * @param {string} path the full path to call
 * @param {Object} params the parameters to pass in the query or body
 * @param {string} bearerToken a full BearerToken
 * @protected
 */
class Request {
  constructor(verb, path, params, bearerToken) {
    this.verb = verb;
    this.path = path;
    this.params = params;
    this.bearerToken = bearerToken;
  }

  /**
   * Make the actual API call
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   */
  call(client) {
    let emitter = new EventEmitter();
    let promise = this.promise(emitter);
    this.request(client, emitter);
    return promise;
  }

  // PRIVATE

  /**
   * Make the request to the API
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @param  {type} emitter the EventEmitter used to notify the Promise of
   *  any changes
   * @private
   */
  request(client, emitter) {
    let options = this.options(client, process);
    let http_request = client.http.request(options);

    let responseHandler = new ResponseHandler(this, emitter);

    http_request.on('response', responseHandler.onResponse.bind(responseHandler));
    http_request.on('error',    responseHandler.onError.bind(responseHandler));

    http_request.write(this.body());
    http_request.end();
  }

  /**
   * Builds a Bluebird promise to be returned to the API user
   *
   * @param  {type} emitter the EventEmitter used to notify the Promise of changes
   * @return {Promise} a Bluebird promise
   * @private
   */
  promise(emitter) {
    return new Promise((resolve, reject) => {
      emitter.on('resolve', response => resolve(response));
      emitter.on('reject', error => reject(error));
    });
  }

  /**
   * Build up the custom User Agent
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @param  {Object} env
   * @param  {string} [env.version] the version of Node
   * @return {string} a user agent in the format "library/version language/version app/version"
   * @private
   */
  userAgent(client, env) {
    let userAgent = `amadeus-node/${client.version} node/${env.version}`;
    if (!client.customAppId) { return userAgent; }
    return `${userAgent} ${client.customAppId}/${client.customAppVersion}`;
  }

  /**
   * Build the full query path, combining the path with the query params if the
   * verb is 'GET'. For example: '/foo/bar?baz=qux'
   *
   * @return {string} the path and params combined into one string.
   * @private
   */
  queryPath() {
    if (this.verb === 'POST') { return this.path; }
    else { return `${this.path}?${qs.stringify(this.params)}`; }
  }

  /**
   * Creats the body for the API cal, serializing the params if the verb is POST.
   *
   * @return {string} the serialized params
   * @private
   */
  body() {
    if (this.verb !== 'POST') { return ''; }
    else { return qs.stringify(this.params); }
  }

  /**
   * Compiles the options for the HTTP request.
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Object} an associative array of options to be passed into the
   *  HTTPS.request() function
   * @private
   */
  options(client, env) {
    let options = {
      'host' : client.host,
      'port' : 443,
      'path' : this.queryPath(),
      'method' : this.verb,
      'headers' : {
        'User-Agent' : this.userAgent(client, env),
        'Accept' : 'application/json'
      }
    };

    this.addAuthorizationHeader(options);
    this.addContentTypeHeader(options);
    return options;
  }

  /**
   * Adds an Authorization header if the BearerToken is present
   *
   * @param  {Object} options an associative array to add the header to
   * @private
   */
  addAuthorizationHeader(options) {
    if (!this.bearerToken) { return; }
    options['headers']['Authorization'] = `Bearer ${this.bearerToken}`;
  }

  /**
   * Adds an Content-Type header if the HTTP method equals POST
   *
   * @param  {Object} options an associative array to add the header to
   * @private
   */
  addContentTypeHeader(options) {
    if (this.verb !== 'POST') { return; }
    options['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
  }
}

export default Request;
