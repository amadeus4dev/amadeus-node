import Offer        from './hotel/offer';
import HotelsOffers from './hotel/hotel_offers';

/**
 * A namespaced client for the
 * `/v1/shopping/hotels/:hotel_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotel(123);
 * ```
 *
 * @param {Client} client
 * @param {number} hotelId
 */
class Hotel {
  constructor(client, hotelId) {
    this.client = client;
    this.hotelId = hotelId;

    this.hotelOffers = new HotelsOffers(client, hotelId);
  }

  /**
   * Loads a namespaced path for a specific hotel offer with a specific hotel
   * ID and offer ID.
   *
   * @param  {number} [offerId]  The ID of the hotel to search for
   * @return {Offer}
   **/
  offer(offerId) {
    return new Offer(this.client, this.hotelId, offerId);
  }
}

export default Hotel;
