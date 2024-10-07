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

  }

  /**
   * To book the selected transfer-offer and create a transfer-order
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the transfer-offer(s) suggested by transferOffers and create a transfer-order
   *
   * ```js
   * amadeus.ordering.transferOrders.post(body, '2094123123');
   * ```
   */
  post(body, offerId) {
    return this.client.post(`/v1/ordering/transfer-orders?offerId=${offerId}`, body);
  }
}

export default TransferOrders;