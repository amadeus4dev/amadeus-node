import FlightOrder from './booking/flight_order';
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
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @protected
 */
class Booking {
  constructor(client) {
    this.client    = client;
  }

  flightOrder (orderId) {
    return new FlightOrder(this.client, orderId);
    this.hotelBookings = new HotelBookings(client);
  }
}

export default Booking;