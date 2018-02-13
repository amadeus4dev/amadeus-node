/**
 * A namespaced client for the
 * `/v1/shopping/hotels/:hotel_id/hotel-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotels(123).hotelOffers;
 * ```
 *
 * @param {Client} client
 * @param {number} hotelId
 */
class HotelHotelOffers {
  constructor(client, hotelId) {
    this.client  = client;
    this.hotelId = hotelId;
  }

  /**
   * Get one hotel and its available offers
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Search for hotel offers for hotel with ID 123
   *
   * ```js
   * amadeus.hotels(123).hotelOffers.get();
   * ```
   */
  get(params = {}) {
    return this.client.get(`/v1/shopping/hotel/${this.hotelId}/hotel-offers`, params);
  }
}

export default HotelHotelOffers;
