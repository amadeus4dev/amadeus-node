/**
 * A namespaced client for the
 * `/v1/shopping/availability/flight-availabilities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.availability.flightAvailabilities;
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
    return this.client.post('/v1/shopping/availability/flight-availabilities', JSON.stringify(params));
  }
}

export default FlightAvailabilities;