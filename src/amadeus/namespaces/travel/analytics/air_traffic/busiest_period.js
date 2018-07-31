/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/busiest-period` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.BusiestPeriod;
 * ```
 *
 * @param {Client} client
 */
class BusiestPeriod{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports.
   *
   * @param {Object} params
   * @param {string} params.origin IATA code of the origin city - e.g. BOS for
   *   Boston - required
   * @param {string} params.query period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the air traffic from LHR in January 2011
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.BusiestPeriod.get({
   *   origin: 'LHR',
   *   period: '2011-01'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/busiest-period', params);
  }
}

export default BusiestPeriod;
