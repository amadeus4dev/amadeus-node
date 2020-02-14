/**
 * A namespaced client for the
 * `/v1/travel/predictions/flight-delay` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.flightDelay;
 * ```
 *
 * @param {Client} client
 */
class FlightDelay {
  constructor(client) {
    this.client = client;
  }

  /**
   * This machine learning API is based on a prediction model that takes the input of
   * the user -time, carrier, airport and aircraft information- and
   * predict the segment where the flight is likely to lay.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.departureTime local time relative to originLocationCode on which the traveler will depart from the origin. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.arrivalDate the date on which the traveler will arrive to the destination from the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.arrivalTime local time relative to destinationLocationCode on which the traveler will arrive to destination. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.aircraftCode IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)
   * @param {string} params.carrierCode airline / carrier code
   * @param {string} params.flightNumber flight number as assigned by the carrier
   * @param {string} params.duration flight duration in ISO8601 PnYnMnDTnHnMnS format, e.g. PT2H10M
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Predict the segment where LH1009 (BRU-FRA) is likely to lay on 2020-01-14
   *
   * ```js
   * amadeus.travel.predictions.flightDelay.get({
   *    originLocationCode: 'BRU',
   *    destinationLocationCode: 'FRA',
   *    departureDate: '2020-01-14',
   *    departureTime: '11:05:00',
   *    arrivalDate: '2020-01-14',
   *    arrivalTime: '12:10:00',
   *    aircraftCode: '32A',
   *    carrierCode: 'LH',
   *    flightNumber: '1009',
   *    duration: 'PT1H05M'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/predictions/flight-delay', params);
  }
}

export default FlightDelay;