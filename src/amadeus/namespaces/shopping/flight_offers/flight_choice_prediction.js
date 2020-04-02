/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/prediction` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.prediction;
 * ```
 *
 * @param {Client} client
 */
class FlightChoicePrediction {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of flight offers with the probability to be chosen.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Returns flights from NYC to MAD with the probability to be chosen.
   *
   * ```js
   * let amadeus = new Amadeus();
   * amadeus.shopping.flightOffers.prediction.post(
   *     amadeus.shopping.flightOffers.get({ origin: 'NYC',
   *                                         destination: 'MAD',
   *                                         departureDate: '2020-08-01'
   *                                       }).body
   *      );
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/flight-offers/prediction', params);
  }
}

export default FlightChoicePrediction;
