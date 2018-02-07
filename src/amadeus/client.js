import Validator   from './client/validator';
import Request     from './client/request';
import AccessToken from './client/access_token';

/**
 * The actual HTTP client for accessing the travel APIs
 * @param  {Object} options a list of options. See {@link Amadeus} .
 * @property {string} clientId the `client_id` used to authenticate the API
 * @property {string} clientSecret the `client_secret` used to authenticate
 *  the API
 * @property {Object} logger an optional `console` compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @property {string} host the hostname used to make API call against.
 * @property {string} customAppId a custom App ID to be passed in the User Agent
 *  to the server
 * @property {string} customAppVersion a custom App version to be passed in
 *  the User Agent to the server
 * @property {Object} http a Node HTTPS compatible client
 */
class Client {
  constructor(options = {}) {
    new Validator().validateAndInitialize(this, options);
    this.accessToken = new AccessToken(this);
  }

  get(path, params = {}) {
    return this.accessToken.bearerToken().then((bearerToken) => {
      return this.request('GET', path, params, bearerToken);
    });
  }

  post(path, params = {}) {
    return this.accessToken.bearerToken().then((bearerToken) => {
      return this.request('POST', path, params, bearerToken);
    });
  }

  unauthenticatedPost(path, params = {}) {
    return this.request('POST', path, params);
  }

  // PRIVATE

  request(verb, path, params, bearerToken = null) {
    let request = new Request(this, verb, path, params, bearerToken);
    return request.call();
  }
}

export default Client;
