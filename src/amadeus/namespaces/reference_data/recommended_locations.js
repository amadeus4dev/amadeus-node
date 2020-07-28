/**
 * A namespaced client for the
 * `/v1/reference-data/recommended-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.recommendedLocations;
 * ```
 *
 * @param {Client} client
 */
class RecommendedLocations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns the recommended locations (destinations).
   *
   * @param {Object} params
   * @param {string} params.cityCodes Code of the city following IATA standard.
   * @param {string} params.travelerCountryCode Origin country of the traveler following IATA standard.
   * @param {string} params.destinationCountryCodes Country codes follow IATA standard.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get recommended destinations from a given origin
   *
   * ```js
   * amadeus.referenceData.recommendedDestinations.get({
   *   cityCodes: 'PAR',
   *   travelerCountryCode: 'FR'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/recommended-locations', params);
  }
}

export default RecommendedLocations;
