/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrder;
 * ```
 *
 * @param {Client} client
 */
class FlightOrder {
  constructor(client, orderId) {
    this.client = client;
    this._orderId = orderId;
  }

  /**
   * To retrieve a flight order based on its id.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To retrieve a flight order with ID 'XXX'
   *
   * ```js
   * amadeus.booking.flightOrder('XXX').get();
   * ```
   */
  get() {
    if (this._orderId)
      return this.client.get('/v1/booking/flight-orders/' + this._orderId);
    else
      throw new Error('MISSING_REQUIRED_PARAMETER');
  }

  /**
   * To cancel a flight order based on its id.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a flight order with ID 'XXX'
   *
   * ```js
   * amadeus.booking.flightOrder('XXX').delete();
   * ```
   */
  delete() {
    if (this._orderId)
      return this.client.delete('/v1/booking/flight-orders/' + this._orderId);
    else
      throw new Error('MISSING_REQUIRED_PARAMETER');
  }
}

export default FlightOrder;