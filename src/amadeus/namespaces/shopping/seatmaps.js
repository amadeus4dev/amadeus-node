
/**
 * A namespaced client for the
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */
class Seatmaps {
  constructor(client) {
    this.client = client;
  }

  /**
   * To retrieve the seat map of each flight present in an order.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Retrieve the seat map for flight order with ID 'XXX'
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *    'flight-orderId': 'XXX'}
   * );
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/seatmaps', params);
  }

  /**
   * To retrieve the seat map of each flight included in a flight offer.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To retrieve the seat map of each flight included in flight offers
   * for MAD-NYC flight on 2020-08-01.
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    origin: 'MAD',
   *    destination: 'NYC',
   *    departureDate: '2020-08-01'
   * }).then(function(response){
   *    return amadeus.shopping.flightOffers.seatmaps.post(
   *        JSON.stringify({
   *            'data': response.data
   *        })
   *    );
   * });
   * ```
  */
  post(params = {}) {
    return this.client.post('/v1/shopping/seatmaps', params);
  }

}

export default Seatmaps;