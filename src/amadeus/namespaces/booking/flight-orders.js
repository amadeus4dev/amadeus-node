/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightCreateOrders
 *
 * ```
 *
 * @param {Client} client
 * @property {Guid} orderId
 */
class FlightCreateOrders {
  constructor(client, orderId) {
    this.client = client;
    this.orderId = orderId;
  }

  /**
   * Returns flight order unique ID and details.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * The Flight Create Orders is an API to book flights and ancillary services proposed by the
   * airlines like additional checked bags or seats with extra-legroom
   * For complete request payload example
   * please see `https://documenter.getpostman.com/view/2672636/RWEcPfuJ?version=latest#10b27765-484a-48e5-92f5-59867583a6b0`
   *
   * ```js
   * amadeus.booking.flightCreateOrders.post({
   *  data: {
   *     type: 'flight-order',
   *     flightOffers: {
   *            type: 'flight-offers',
   *            id: 1,
   *            source: 'GDS',
   *            .....
   *            ......
   *        }
   *    }
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/booking/flight-orders', params);
  }

  /**
   * Returns details for a specific flight
   * The Flight Order Management REST JSON API is an open API
   * that allows you to manipulate a flight order previously created.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for the offer with ID 'XXX'
   *
   * ```js
   *  amadeus.booking.FlightCreateOrders('XXX').get({anyParams});
   * ```
   */
  get(params = {}) {
    return this.client.get(`/v1/booking/flight-orders/${this.orderId}`, params);
  }
}

export default FlightCreateOrders;
