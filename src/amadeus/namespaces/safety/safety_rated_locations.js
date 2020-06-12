import BySquare from './safety_rated_locations/by_square';

/**
 * A namespaced client for the
 * `/v1/safety/safety-rated-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocations;
 * ```
 *
 * @param {Client} client
 */
class SafetyRatedLocations {
  constructor(client) {
    this.client = client;
    this.bySquare = new BySquare(client);
  }

  /**
   * /safety/safety-rated-locations
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How safe is Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.safety.safetyRatedLocations.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/safety/safety-rated-locations', params);
  }
}

export default SafetyRatedLocations;
