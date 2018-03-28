/**
 * A namespaced client for the
 * `/v1/shopping/hotel:hotel_id/offers/:offer_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotel(123).offer(234);
 * ```
 *
 * @param {Client} client
 * @param {number} hotelId
 * @param {number} offerId
 */
class Offer {
  constructor(client, hotelId, offerId) {
    this.client  = client;
    this.hotelId = hotelId;
    this.offerId = offerId;
  }

  /**
   * Get room and rate details
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Search for hotel offers for hotel with ID 123
   *
   * ```js
   * amadeus.hotel('SMPARCOL').offer('AC7D4DA2C322A73AF0824318A4965DA2805A3FC2').get();
   * ```
   */
  get(params = {}) {
    return this.client.get(
      `/v1/shopping/hotels/${this.hotelId}/offers/${this.offerId}`, params
    );
  }
}

export default Offer;
