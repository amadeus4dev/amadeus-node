import FlightOrder from './booking/flight_order';

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
 * @protected
 */
class Booking {
  constructor(client) {
    this.client    = client;
  }

  flightOrder (orderId) {
    return new FlightOrder(this.client, orderId);
  }
}

export default Booking;