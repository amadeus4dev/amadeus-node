/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/prediction` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.prediction.post(
 *     amadeus.shopping.flightOffers.get({ origin: 'NYC,
 *                                         destination: 'MAD',
 *                                         departureDate: '2019-08-01'
 *                                       }).body
 *      );
 * ```
 *
 * @param {Client} client
 */
class FlightChoicePrediction {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of relevant airports near to a given point.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the nearest airport to the 49.0000,2.55 lat/long
   *
   * ```js
   * amadeus.referenceData.urls.locations.airports.get({
   *   longitude: 49.0000,
   *   latitude: 2.55
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/flight-offers/prediction', params);
  }
}

export default FlightChoicePrediction;
