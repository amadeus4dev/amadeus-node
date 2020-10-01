import BySquare from './activities/by_square';

/**
 * A namespaced client for the
 * `/v1/shopping/activities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activities
 * ```
 *
 * @param {Client} client
 */
class Activities {
  constructor(client) {
    this.client = client;
    this.bySquare = new BySquare(client);
  }

  /**
   * /shopping/activities
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What are the best tours and activities in Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.shopping.activities.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/activities', params);
  }
}

export default Activities;
