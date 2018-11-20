/**
 * A namespaced client for the
 * `/v1/reference-data/airlines` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.airlines;
 * ```
 *
 * @param {Client} client
 */
class Airlines{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns the airline name and code.
   *
   * @param {Object} params
   * @param {string} params.airlineCodes Code of the airline following IATA or ICAO standard.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find to which airlines belongs IATA Code BA
   *
   * ```js
   * amadeus.referenceData.airlines.get({
   *   airlineCodes : 'BA'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/airlines', params);
  }
}

export default Airlines;
