/**
 * A namespaced client for the
 * `/v3/shopping/hotel-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOffersSearch;
 * ```
 *
 * @param {Client} client
 */
class HotelOffersSearch {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the list of available offers in the specific hotels
   *
   * @param {Object} params
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   * codes to request. Example: RTPAR001
   * @param {string} params.adults Number of adult guests (1-9) per room.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Search for available offers in Novotel Paris for 2 adults
   *
   * ```js
   * amadeus.shopping.hotelOffersSearch.get({
   *   hotelIds: 'RTPAR001',
   *   adults: '2'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v3/shopping/hotel-offers', params);
  }
}

export default HotelOffersSearch;
