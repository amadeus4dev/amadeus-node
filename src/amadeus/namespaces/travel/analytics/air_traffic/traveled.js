/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/traveled` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Traveled;
 * ```
 *
 * @param {Client} client
 */
class Traveled{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of people traveling.
   *
   * @param {Object} params
   * @param {string} params.origin IATA code of the origin city - e.g. BOS for
   *   Boston - required
   * @param {string} params.query period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the air traffic from Nice in August 2017
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Traveled.get({
   *   origin: 'NCE',
   *   period: '2017-08'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/traveled', params);
  }
}

export default Traveled;
