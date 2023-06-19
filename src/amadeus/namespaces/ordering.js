import TransferOrders from './ordering/transfer_orders';

/**
 * A namespaced client for the
 * `/v1/ordering` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering;
 * ```
 *
 * @param {Client} client
 * @property {TransferOrders} TransferOrders
 * @protected
 */
class Ordering {
  constructor(client) {
    this.client    = client;
    this.transferOrders = new TransferOrders(client);
  }

  transferOrders (offerId) {
    return new TransferOrders(this.client, offerId);
  }
}

export default Ordering;