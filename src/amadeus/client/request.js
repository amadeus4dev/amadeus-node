import qs from 'qs';

/**
 * A Request object containing all the compiled information about this request.
 *
 * @property {string} host the host used for this API call
 * @property {number} port the port for this API call. Standard set to 443.
 * @property {boolean} ssl wether this API call uses SSL
 * @property {string} scheme the scheme inferred from the SSL state
 * @property {string} verb the HTTP method, for example `GET` or `POST`
 * @property {string} path the full path of the API endpoint
 * @property {Object} params the parameters to pass in the query or body
 * @property {string} queryPath the path and query string used for the API call
 * @property {string} bearerToken the authentication token
 * @property {string} clientVersion the version of the Amadeus library
 * @property {string} languageVersion the version of Node used
 * @property {string} appId the custom ID of the application using this library
 * @property {string} appVersion the custom version of the application
 *  using this library
 * @property {Object} headers the request headers
 *
 * @param {Object} options
 */
class Request {
  constructor(options) {
    this.host            = options.host;
    this.port            = options.port;
    this.ssl             = options.ssl;
    this.scheme          = this.ssl ? 'https' : 'http';
    this.verb            = options.verb;
    this.path            = options.path;
    this.params          = options.params;
    this.queryPath       = this.fullQueryPath();
    this.bearerToken     = options.bearerToken;
    this.clientVersion   = options.clientVersion;
    this.languageVersion = options.languageVersion.replace('v', '');
    this.appId           = options.appId;
    this.appVersion      = options.appVersion;
    this.headers         = {
      'User-Agent' : this.userAgent(),
      'Accept' : 'application/json, application/vnd.amadeus+json'
    };
    this.addAuthorizationHeader();
    this.addContentTypeHeader();
  }

  // PROTECTED

  /**
   * Compiles the options for the HTTP request.
   *
   * Used by Client.execute when executing this request against the server.
   *
   * @return {Object} an associative array of options to be passed into the
   *  Client.execute function
   * @protected
   */
  options() {
    let options = {
      'host' : this.host,
      'port' : this.port,
      'protocol' : `${this.scheme}:`,
      'path' : this.queryPath,
      'method' : this.verb,
      'headers' : this.headers
    };
    return options;
  }

  /**
   * Creats the body for the API cal, serializing the params if the verb is POST.
   *
   * @return {string} the serialized params
   * @protected
   */
  body() {
    if (this.verb !== 'POST') { return ''; }
    else {
      if (!this.bearerToken) {
        return qs.stringify(this.params);
      }
      return this.params;
    }
  }

  // PRIVATE

  /**
   * Build up the custom User Agent
   *
   * @return {string} a user agent in the format "library/version language/version app/version"
   * @private
   */
  userAgent() {
    let userAgent = `amadeus-node/${this.clientVersion} node/${this.languageVersion}`;
    if (!this.appId) { return userAgent; }
    return `${userAgent} ${this.appId}/${this.appVersion}`;
  }

  /**
   * Build the full query path, combining the path with the query params if the
   * verb is 'GET'. For example: '/foo/bar?baz=qux'
   *
   * @return {string} the path and params combined into one string.
   * @private
   */
  fullQueryPath() {
    if (this.verb === 'POST') { return this.path; }
    else { return `${this.path}?${qs.stringify(this.params)}`; }
  }

  /**
   * Adds an Authorization header if the BearerToken is present
   *
   * @private
   */
  addAuthorizationHeader() {
    if (!this.bearerToken) { return; }
    this.headers['Authorization'] = `Bearer ${this.bearerToken}`;
  }

  /**
   * Adds an Content-Type header if the HTTP method equals POST
   *
   * @private
   */
  addContentTypeHeader() {
    if (this.verb === 'POST' && !this.bearerToken) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      this.headers['Content-Type'] = 'application/vnd.amadeus+json';
    }
    return;
  }
}

export default Request;
