/**
 * A namespaced client for the
 * `/v2/shopping/hotel-offers/:offer_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOffer('XXX');
 * ```
 *
 * @param {Client} client
 * @property {number} offerId
 */
class HotelOffer {
  constructor(client, offerId) {
    this.client = client;
    this.offerId = offerId;
  }

  /**
   * Returns details for a specific offer
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for the offer with ID 'XXX'
   *
   * ```js
   *  amadeus.shopping.hotelOffer('XXX').get();
   * ```
   */
  get(params = {}) {
    return this.client.get(
      `/v2/shopping/hotel-offers/${this.offerId}`, params
    );
  }
}

export default HotelOffer;