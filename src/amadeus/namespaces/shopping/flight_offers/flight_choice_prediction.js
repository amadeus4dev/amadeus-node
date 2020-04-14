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
   * amadeus.shopping.flightOffers.get({
   *   origin: 'MAD',
   *   destination: 'NYC',
   *   departureDate: '2020-10-01'
   * }).then(function (flightOffersResponse) {
   *   return amadeus.shopping.flightOffers.prediction.post(
   *     JSON.stringify(flightOffersResponse.result)
   *   );
   * }).then(function (response) {
   *   console.log(response);
   * }).catch(function (response) {
   *   console.error(response);
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/flight-offers/prediction', params);
  }
}

export default FlightChoicePrediction;
