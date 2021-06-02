/**
 * A namespaced client for the
 * `/v1/location/analytics/category-rated-areas` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location.analytics.categoryRatedAreas;
 * ```
 *
 * @param {Client} client
 */
class CategoryRatedAreas {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets popularity score for location categories
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ets popularity score for location categories in Barcelona
   *
   * ```js
   * amadeus.location.analytics.categoryRatedAreas.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/location/analytics/category-rated-areas', params);
  }
}

export default CategoryRatedAreas;
