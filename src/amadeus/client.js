import https     from 'https';

import Validator from './client/validator';
const validator = new Validator();

const HOSTS = {
  'test'       : 'https://test.api.amadeus.com',
  'production' : 'https://production.api.amadeus.com'
};

const RECOGNIZED_OPTIONS = [
  'clientId',
  'clientSecret',
  'logger',
  'hostname',
  'customAppId',
  'customAppVersion',
  'http'
];

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
    this.initializeClientCredentials(options);
    this.initializeLogger(options);
    this.initializeHost(options);
    this.initializeCustomApp(options);
    this.initializeHttp(options);

    validator.warnOnUnrecognizedOptions(options, this.logger, RECOGNIZED_OPTIONS);
  }

  // PRIVATE

  initializeClientCredentials(options) {
    this.clientId = validator.initRequired('clientId', options);
    this.clientSecret = validator.initRequired('clientSecret', options);
  }

  initializeLogger(options) {
    this.logger = validator.initOptional('logger', options, console);
  }

  initializeHost(options) {
    let hostname = validator.initOptional('hostname', options, 'test');
    this.host = validator.initOptional('host', options, HOSTS[hostname]);
  }

  initializeCustomApp(options) {
    this.customAppId = validator.initOptional('customAppId', options);
    this.customAppVersion = validator.initOptional('customAppVersion', options);
  }

  initializeHttp(options) {
    this.http = validator.initOptional('http', options, https);
  }
}

export default Client;
