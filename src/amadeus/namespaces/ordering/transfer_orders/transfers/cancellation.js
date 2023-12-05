/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
 * ```
 *
 * @param {Client} client
 */
class Cancellation {
  constructor(client, orderId) {
    this.client = client;
    this.orderId = orderId;
  }

  /**
   * To cancel a transfer order based on its id
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a transfer order with ID 'XXX' and confirmation number '12345'
   *
   * ```js
   * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
   * ```
   */
  post(body, confirmNbr) {
    return this.client.post(
      `/v1/ordering/transfer-orders/${this.orderId}/transfers/cancellation?confirmNbr=${confirmNbr}`, body);
  }
}

export default Cancellation;