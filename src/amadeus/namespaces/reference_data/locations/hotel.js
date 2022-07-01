/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotel;
 * ```
 *
 * @param {Client} client
 */
class Hotel {
  constructor(client) {
    this.client = client;
  }
  /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.keyword Location query keyword Example: PARI
   * @param {string} params.subType Category of search - To enter several value, repeat the query parameter    * Use HOTEL_LEISURE to target aggregators or HOTEL_GDS to target directly the chains
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   *  Find relevant points of interest within an area in Barcelona
   * ```js
   * amadeus.referenceData.locations.hotel.get({
   *   keyword: 'PARI',
   *   subType: 'HOTEL_GDS'
   * })
    */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/hotel', params);
  }
}

export default Hotel;
