import Client      from './amadeus/client';
import library from '../package.json';

/**
 * The Amadeus client library for accessing the travel APIs
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.hostname='production'] the name of the server API
 * calls are made to (`production` or `test`)
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTPS-compatible client
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
class Amadeus {
  constructor(params = {}) {
    this.client = new Client(params);
    this.version = library.version;
  }
}

export default Amadeus;
