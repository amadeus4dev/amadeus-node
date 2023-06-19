import Cancellation from './transfers/cancellation';

/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX/transfers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders('XXX').transfers;
 * ```
 *
 * @param {Client} client
 */
class Transfers {
    constructor(client) {
      this.client = client;
      this.cancellation = new Cancellation(client);
    }
  }
  
  export default Transfers;