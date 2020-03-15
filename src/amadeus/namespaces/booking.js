import FlightOrders from './booking/flight_orders';

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
 * @property {FlightOrders} flightOrders
 * @protected
 */
class Booking {
  constructor(client) {
    this.client    = client;
  }

  flightOrders (orderId) {
    return new FlightOrders(this.client, orderId);
  }
}

export default Booking;