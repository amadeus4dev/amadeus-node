/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/searched` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Searched;
 * ```
 *
 * @param {Client} client
 */
class Searched {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of people searching.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.searchPeriod period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.marketCountryCode IATA code of the country from which searches were made
   *   e.g. ``"ES"`` for Spain
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Which were the most searched flight destinations from Madrid in August 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Searched.get({
   *   originCityCode: 'MAD',
   *   searchPeriod: '2017-08',
   *   marketCountryCode: 'ES'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/searched', params);
  }
}

export default Searched;