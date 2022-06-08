/**
 * A namespaced client for the
 * `/v2/reference-data/locations/cities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.cities;
 * ```
 *
 * @param {Client} client
 */
class Cities {
  constructor(client) {
    this.client = client;
  }

  /**
   * Return a list of cities matching a given keyword..
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent
   * the start of a word in a city name
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Return a list of cities matching a keyword 'France'
   *
   * ```js
   * amadeus.referenceData.locations.cities.get({
   *   keyword: 'FRANCE'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/cities', params);
  }
}

export default Cities;