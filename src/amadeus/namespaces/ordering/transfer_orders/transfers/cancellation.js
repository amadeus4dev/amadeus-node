/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post(body, confirmNbr=123);
 * ```
 *
 * @param {Client} client
 */
class TransferOrder {
    constructor(client) {
      this.client = client;
      this.orderId = orderId;
    }
  
    /**
     * To retrieve a transfer order based on its id
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To retrieve a transfer order with ID 'XXX'
     *
     * ```js
     * amadeus.ordering.transferOrders('XXX').transfers.cancellation.post({}, confirmNbr=123);
     * ```
     */
    post(params = {}) {
      return this.client.post(
        `/v1/ordering/transfer-orders/${this.orderId}/transfers/cancellation`, params);
    }
  }
  
  export default TransferOrder;