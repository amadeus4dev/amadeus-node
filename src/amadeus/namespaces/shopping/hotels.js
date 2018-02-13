import Offers       from './hotels/offers';
import HotelsOffers from './hotels/hotel_offers';

/**
 * A namespaced client for the
 * `/v1/shopping/hotels/:hotel_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotels(123);
 * ```
 *
 * @param {Client} client
 * @param {number} hotelId
 */
class Hotels {
  constructor(client, hotelId) {
    this.client = client;
    this.hotelId = hotelId;

    this.hotelOffers = new HotelsOffers(client, hotelId);
  }

  /**
   * Loads a namespaced path for a specific hotel offers with a specific hotel
   * ID and offer ID.
   *
   * @param  {number} [offerId=nil]  The ID of the hotel to search for
   * @return {Offers}
   **/
  offers(offerId) {
    return new Offers(this.client, this.hotelId, offerId);
  }
}

export default Hotels;
