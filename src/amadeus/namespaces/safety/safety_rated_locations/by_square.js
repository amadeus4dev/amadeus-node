/**
 * A namespaced client for the
 * `/v1/safety/safety-rated-locations/by-square` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocations.bySquare;
 * ```
 *
 * @param {Client} client
 */
class bySquare {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns the safety rating of a given area
   *
   * @param {Object} params
   * @param {Double} params.north latitude north of bounding box - required
   * @param {Double} params.west  longitude west of bounding box - required
   * @param {Double} params.south latitude south of bounding box - required
   * @param {Double} params.east  longitude east of bounding box - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How safe is Barcelona? (based on a square)
   *
   * ```js
   * amadeus.safety.safetyRatedLocations.bySquare.get({
   *   north: 41.397158,
   *   west: 2.160873,
   *   south: 41.394582,
   *   east: 2.177181
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/safety/safety-rated-locations/by-square', params);
  }
}

export default bySquare;
