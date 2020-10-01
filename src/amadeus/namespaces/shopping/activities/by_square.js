/**
 * A namespaced client for the
 * `/v1/shopping/activities/by-square` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activities.bySquare;
 * ```
 *
 * @param {Client} client
 */
class bySquare {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of tours and activities a given area.
   *
   * @param {Object} params
   * @param {Double} params.north latitude north of bounding box - required
   * @param {Double} params.west  longitude west of bounding box - required
   * @param {Double} params.south latitude south of bounding box - required
   * @param {Double} params.east  longitude east of bounding box - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant tours and activities within an area in Barcelona
   *
   * ```js
   * amadeus.shopping.activities.bySquare.get({
   *   north: 41.397158,
   *   west: 2.160873,
   *   south: 41.394582,
   *   east: 2.177181
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/activities/by-square', params);
  }
}

export default bySquare;
