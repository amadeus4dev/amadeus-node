/**
 * A namespaced client for the
 * `/v2/e-reputation/hotel-sentiments` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation.hotelSentiments;
 * ```
 *
 * @param {Client} client
 */
class HotelSentiments {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get the sentiment analysis of hotel reviews
   *
   * @param {Object} params
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   *   codes to request. Example: XKPARC12
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
   *
   * ```js
   * amadeus.eReputation.hotelSentiments.get({
   *   hotelIds: 'XKPARC12'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/e-reputation/hotel-sentiments', params);
  }
}

export default HotelSentiments;