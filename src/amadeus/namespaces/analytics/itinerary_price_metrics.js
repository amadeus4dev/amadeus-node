/**
 * A namespaced client for the
 * `/v1/analytics/itinerary-price-metrics
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics.itineraryPriceMetrics
 * ```
 *
 * @param {Client} client
 */
class ItineraryPriceMetrics {
  constructor(client) {
    this.client = client;
  }

  /**
   * Provides historical prices in a quartile distribution, including minimum, maximum and average price.
   *
   * @param {Object} params
   * @param {string} params.originIataCode city/airport code, following IATA standard, from which the traveler will depart
   * @param {string} params.destinationIataCode city/airport code, following IATA standard, from which the traveler is going
   * @param {string} params.departureDate The date on which the traveler will depart from the origin to go to the destination.
   * @return {Promise.<Response,ResponseError>} a Promise
   * Am I getting a good deal on this flight?
   * ```js
   * amadeus.analytics.itineraryPriceMetrics.get({
   * originIataCode: 'MAD',
   * destinationIataCode: 'CDG',
   * departureDate: '2021-03-13'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/analytics/itinerary-price-metrics', params);
  }
}

export default ItineraryPriceMetrics;
