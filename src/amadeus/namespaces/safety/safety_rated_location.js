/**
 * A namespaced client for the
 * `/v1/safety/safety-rated-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocation;
 * ```
 *
 * @param {Client} client
 */
class SafetyRatedLocation {
  constructor(client, locationId) {
    this.client = client;
    this.locationId = locationId;
  }

  /**
   * Retieve safety information of a location by its Id.
   *
   * What is the safety information of a location with Id Q930400801?
   * ```js
   * amadeus.safety.safetyRatedLocation('Q930400801').get();
   * ```
   */
  get() {
    return this.client.get(`/v1/safety/safety-rated-locations/${this.locationId}`);
  }
}

export default SafetyRatedLocation;
