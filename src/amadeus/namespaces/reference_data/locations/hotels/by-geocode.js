/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-geocode` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byGeocode;
 * ```
 *
 * @param {Client} client
 */
class byGeocode {
  constructor(client) {
    this.client = client;
  }

  /**
   *  Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   * the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   * the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   *  Returns a list of hotels within an area in Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.hotels.byGeocode.get({
      latitude: 48.83152,
      longitude: 2.24691
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/hotels/by-geocode', params);
  }
}

export default byGeocode;