/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/searched/by-destination` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.SearchedByDestination;
 * ```
 *
 * @param {Client} client
 */
class SearchedByDestination {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of people searching.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.destinationCityCode IATA code of the destination city - e.g. NYC for
   *   New-York - required
   * @param {string} params.searchPeriod period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.marketCountryCode IATA code of the country from which searches were made
   *   e.g. ``"ES"`` for Spain
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How many people in Spain searched for a trip from Madrid to New-York in September 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.SearchedByDestination.get({
   *   originCityCode: 'MAD',
   *   destinationCityCode: 'NYC',
   *   searchPeriod: '2017-08',
   *   marketCountryCode: 'ES'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/searched/by-destination', params);
  }
}

export default SearchedByDestination;