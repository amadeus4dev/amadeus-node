/**
 * A namespaced client for the
 * `/v2/shopping/hotel-offers/by-hotel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOffersByHotel;
 * ```
 *
 * @param {Client} client
 */
class HotelOffersByHotel {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all offers for a dedicated hotel
   *
   * @param {Object} params
   * @param {string} params.hotelId Amadeus Property Code (8 chars),
   *   Example: XKPARC12.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get all offers for Holiday Inn Paris Notre Dame.
   *
   * ```js
   * amadeus.shopping.hotelOffersByHotel.get({
   *   hotelId: 'XKPARC12'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/shopping/hotel-offers/by-hotel', params);
  }
}

export default HotelOffersByHotel;