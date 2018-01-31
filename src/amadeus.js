import Client from './amadeus/client';

/**
 * The Amadeus client library for accessing the travel APIs
 *
 * @param {Object} options a list of options
 * @param {string} options.clientId the `client_id` used to authenticate the API
 * @param {string} options.clientSecret the `client_secret` used to authenticate
 *  the API
 * @param {Object} [options.logger=console] an optional `console` compatible logger that
 *  accepts `log`, `error` and `debug` calls. Defaults to a plain console.
 * @param {string} [options.hostname='test'] the name of the host (`test` or
 *   `production`) to make an API call against.
 * @param {string} [options.customAppId=null] a custom App ID to be passed in the User
 *  Agent to the server.
 * @param {string} [options.customAppVersion=null] a custom App version to be passed
 *  in the User Agent to the server.
 * @param {Object} [options.http=https] an optional Node HTTPS compatible client.
 *  Defaults to the standard Node HTTPS client.
 */
class Amadeus {
  constructor(options = {}) {
    this.client = new Client(options);
  }
}

export default Amadeus;
