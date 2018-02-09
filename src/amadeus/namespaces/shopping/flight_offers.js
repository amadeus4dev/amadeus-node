/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
class FlightOffers {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the cheapest bookable flights for a date.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @param {string} params.destination City/Airport IATA code to which the
   *   traveler is going. PAR, for example
   * @param {string} params.departureDate The departure date for the flight
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest destination from London Heathrow
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *   origin: 'LHR',
   *   destination: 'LAX',
   *   departureDate: '2017-12-24'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/flight-offers', params);
  }
}

export default FlightOffers;
