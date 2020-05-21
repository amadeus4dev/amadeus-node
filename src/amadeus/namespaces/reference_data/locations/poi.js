/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointOfInterest;
 * ```
 *
 * @param {Client} client
 */
class PointOfInterest {
  constructor(client, poiId) {
    this.client = client;
    this._poiId = poiId;
  }

  /**
   * Extracts the information about point of interest with given ID
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * amadeus.referenceData.locations.pointOfInterest('9CB40CB5D0').get();
   * ```
   */
  get() {
    return this.client.get(`/v1/reference-data/locations/pois/${this._poiId}`);
  }
}

export default PointOfInterest;
