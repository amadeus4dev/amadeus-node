/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-hotels` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byHotels;
 * ```
 *
 * @param {Client} client
 */
class byHotels {
  constructor(client) {
    this.client = client;
  }

  /**
  * Returns a list of hotels for a given area.
  *
  * @param {Object} params
  * @param {string} params.hotelIds Comma separated list of Amadeus hotel
  *   codes to request. Example: XKPARC12
  * @return {Promise.<Response,ResponseError>} a Promise
  *
  * Find relevant points of interest within an area in Barcelona
  * ```js
  * amadeus.referenceData.locations.hotels.byHotels.get({
  *   hotelIds: 'ACPAR245'
  * })
  * ```
  */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/hotels/by-hotels', params);
  }
}

export default byHotels;