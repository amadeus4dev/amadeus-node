/**
 * A namespaced client for the
 * `/v1/booking/hotel-bookings` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelBookings;
 * ```
 *
 * @param {Client} client
 */
class HotelBookings {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Shopping API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests & payments info
   *
   * ```js
   * amadeus.booking.hotelBookings.post({
   *  'offerId': 'XXX',
   *  'guests': [],
   *  'payments': []
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/booking/hotel-bookings', params);
  }
}

export default HotelBookings;