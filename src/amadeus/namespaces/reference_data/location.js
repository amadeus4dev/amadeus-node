/**
 * A namespaced client for the
 * `/v2/reference-data/locations/:location_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations('ALHR');
 * ```
 *
 * @param {Client} client
 * @property {number} locationId
 */
class Location {
  constructor(client, locationId) {
    this.client = client;
    this.locationId = locationId;
  }

  /**
   * Returns details for a specific airport
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for location with ID 'ALHR'
   *
   * ```js
   * amadeus.referenceData.location('ALHR').get();
   * ```
   */
  get(params = {}) {
    return this.client.get(
      `/v1/reference-data/locations/${this.locationId}`, params
    );
  }
}

export default Location;
