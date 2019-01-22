/**
 * A namespaced client for the
 * `/v2/shopping/hotel-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOffers;
 * ```
 *
 * @param {Client} client
 */
class HotelOffers {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the list of hotels for a dedicated city.
   *
   * @param {Object} params
   * @param {string} params.cityCode City IATA code
   * @param {number} params.latitude latitude of geographic location to
   *   search around. Example: 52.5238
   * @param {number} params.longitude Longitude of geographic location to
   *   search around. Example: 13.3835
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   *   codes to request. Example: RTPAR001
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Search for hotels in Paris
   *
   * ```js
   * amadeus.shopping.hotelOffers.get({
   *   cityCode: 'PAR'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/shopping/hotel-offers', params);
  }
}

export default HotelOffers;
