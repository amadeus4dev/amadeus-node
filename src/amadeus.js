import Client from './amadeus/client';

/**
 * The Amadeus client library for accessing the travel APIs
 *
 * @param {Object} options a list of options
 * @param {string} options.clientId the `client_id` used to authenticate the API
 * @param {string} options.clientSecret the `client_secret` used to authenticate the API
 */
class Amadeus {
  constructor(options = {}) {
    this.client = new Client(options);
  }
}

export default Amadeus;
