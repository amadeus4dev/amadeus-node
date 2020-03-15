import HotelBookings from './booking/hotel_bookings';

/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {HotelBookings} hotelBookings
 * @protected
 */
class Booking {
  constructor(client) {
    this.client    = client;
    this.hotelBookings = new HotelBookings(client);
  }
}

export default Booking;