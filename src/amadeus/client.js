import Validator from './client/validator';

const validator = new Validator();

/**
 * The actual HTTP client for accessing the travel APIs
 * @param  {Object} options a list of options. See {@link Amadeus} .
 * @property {string} clientId the `client_id` used to authenticate the API
 * @property {string} clientSecret the `client_secret` used to authenticate the API
 */
class Client {
  constructor(options = {}) {
    this.initializeClientCredentials(options);
    // initialize_logger(options);
    // initialize_host(options);
    // initialize_custom_app(options);
    // initialize_http(options);
  }


  // PRIVATE

  initializeClientCredentials(options) {
    this.clientId      = validator.initRequired('clientId', options);
    this.clientSecret  = validator.initRequired('clientSecret', options);
  }
}

export default Client;
