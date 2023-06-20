
/**
 * A namespaced client for the
 * `/v1/shopping/transfer-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.transferOffers;
 * ```
 *
 * @param {Client} client
 */
class TransferOffers {
  constructor(client) {
    this.client = client;
  }

  /**
   * To search the list of transfer offers.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To search the list of transfer offers
   *
   * ```js
   * amadeus.shopping.transferOffers.post(body)

   * ```
  */
  post(params = {}) {
    return this.client.post('/v1/shopping/transfer-offers', params);
  }
}

export default TransferOffers;