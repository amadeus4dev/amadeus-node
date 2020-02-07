/**
 * A namespaced client for the
 * `/v1/airport/predictions/on-time` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport.predictions.onTime;
 * ```
 *
 * @param {Client} client
 */
class OnTime {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.airportCode airport IATA code, e.g. BOS for Boston
   * @param {string} params.date the date on which the traveler will depart
   * from the give airport. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get the percentage of on-time flight departures from JFK
   *
   * ```js
   * amadeus.airport.predictions.onTime.get({
   *   airportCode: 'JFK',
   *   date: '2020-08-01'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/airport/predictions/on-time', params);
  }
}

export default OnTime;