/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.tripPurpose;
 * ```
 *
 * @param {Client} client
 */
class TripPurpose {
  constructor(client) {
    this.client = client;
  }

  /**
   * Forecast traveler purpose, Business or Leisure, together with the probability in the context of search & shopping.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.returnDate the date on which the traveler will depart from the destination to return to the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2018-02-28
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Forecast traveler purpose for a NYC-MAD round-trip between 2020-08-01 & 2020-08-12.
   *
   * ```js
   * amadeus.travel.predictions.tripPurpose.get({
   *    originLocationCode: 'NYC',
   *    destinationLocationCode: 'MAD',
   *    departureDate: '2020-08-01',
   *    returnDate: '2020-08-12'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/predictions/trip-purpose', params);
  }
}

export default TripPurpose;