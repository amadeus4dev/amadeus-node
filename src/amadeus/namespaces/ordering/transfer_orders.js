/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders;
 * ```
 *
 * @param {Client} client
 */
class TransferOrders {
    constructor(client) {
      this.client = client;
      this.offerId = offerId;
    }
  
    /**
     * To book the selected transfer-offer and create a transfer-order
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To book the transfer-offer(s) suggested by transferOffers and create a transfer-order
     *
     * ```js
     * amadeus.ordering.transferOrders.post(JSON.stringify(body),offerId='2094123123');
     * ```
     */
    post(params = {}) {
      return this.client.post(
        `/v1/ordering/transfer-orders/${this.offerId}`, params
      );
    }
  }
  
  export default TransferOrders;