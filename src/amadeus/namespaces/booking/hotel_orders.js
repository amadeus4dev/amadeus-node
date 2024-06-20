/**
 * A namespaced client for the
 * `/v2/booking/hotel-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelOrders;
 * ```
 *
 * @param {Client} client
 */
class HotelOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Search API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests, travel agents and payment info
   *
   * ```js
   * amadeus.booking.hotelOrders.post(
   * JSON.stringfy({
   * 'data': {
   *     'type': 'hotel-order',
   *     'guests': [],
   *     'travelAgent': {},
   *     'roomAssociations': [],
   *     'payment': {}
   * }})
   *)
   * ```
   */
  post(params = {}) {

    return this.client.post('/v2/booking/hotel-orders', params);
  }
}

export default HotelOrders;