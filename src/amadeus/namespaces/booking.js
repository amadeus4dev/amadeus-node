import FlightCreateOrders from './booking/flight-orders';

/**
 * A namespaced client for the `/v1/booking` endpoints
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightCreateOrders} flightCreateOrders
 */
class Booking {
  constructor(client) {
    this.client = client;
    this.flightCreateOrders = new FlightCreateOrders(client);
  }

  /**
   * Loads a namespaced path for a specific order ID
   *
   * @param  {string} [orderId]  ticket order Id
   * @return {FlightCreateOrders}
   **/
  flightCreateOrders(orderId) {
    return new FlightCreateOrders(this.client, orderId);
  }
}

export default Booking;
