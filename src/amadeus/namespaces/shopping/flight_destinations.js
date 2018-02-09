/**
 * A namespaced client for the
 * `/v1/shopping/flight-destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightDestinations;
 * ```
 *
 * @param {Client} client
 */
class FlightDestinations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the cheapest destinations where you can fly to.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest destination from London to Paris for Xmas
   *
   * ```js
   * amadeus.shopping.flightDestinations.get({
   *   origin: 'LHR'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/flight-destinations', params);
  }
}

export default FlightDestinations;
