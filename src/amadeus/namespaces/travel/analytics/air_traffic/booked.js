/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/booked` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Booked;
 * ```
 *
 * @param {Client} client
 */
class Booked{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of bookings.
   *
   * @param {Object} params
   * @param {string} params.origin IATA code of the origin city - e.g. BOS for
   *   Boston - required
   * @param {string} params.query period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the air traffic from London in May 2016
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Booked.get({
   *   origin: 'LON',
   *   period: '2016-05'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/booked', params);
  }
}

export default Booked;
