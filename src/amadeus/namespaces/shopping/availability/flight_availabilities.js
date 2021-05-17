/**
 * A namespaced client for the
 * `/v1/shopping/availability/flight-availabilities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.availability.FlightAvailabilities;
 * ```
 *
 * @param {Client} client
 */
class FlightAvailabilities {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.availability.flightAvailabilities.post(body);
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/availability/flight-availabilities', params);
  }
}

export default FlightAvailabilities;