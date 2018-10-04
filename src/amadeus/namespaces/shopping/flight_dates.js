/**
 * A namespaced client for the
 * `/v1/shopping/flight-dates` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightDates;
 * ```
 *
 * @param {Client} client
 */
class FlightDates {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the cheapest flight dates from an origin to a destination.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @param {string} params.destination City/Airport IATA code to which the
   *   traveler is going. PAR, for example
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest flight dates from New-York to Madrid
   *
   * ```js
   * amadeus.shopping.flightDates.get({
   *   origin: 'NYC',
   *   destination: 'MAD'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/flight-dates', params);
  }
}

export default FlightDates;
