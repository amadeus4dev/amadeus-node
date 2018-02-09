/**
 * A namespaced client for the
 * `/v2/reference-data/locations/airports` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.airports;
 * ```
 *
 * @param {Client} client
 */
class Airports {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of relevant airports near to a given point.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the nearest airport to the 49.0000,2.55 lat/long
   *
   * ```js
   * amadeus.referenceData.urls.locations.airports.get({
   *   longitude: 49.0000,
   *   latitude: 2.55
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/airports', params);
  }
}

export default Airports;
