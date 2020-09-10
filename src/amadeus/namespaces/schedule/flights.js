/**
 * A namespaced client for the
 * `/v2/schedule/flights` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.schedule.flights;
 * ```
 *
 * @param {Client} client
 */
class Flights {
  constructor(client) {
    this.client = client;
  }

  /**
   * Provides real-time flight schedule data including up-to-date departure and arrival times,
   *  terminal and gate information, flight duration and real-time delay status
   *
   * @param {Object} params
   * @param {Double} params.carrierCode 2 to 3-character IATA carrier code - required
   * @param {Double} params.flightNumber 1 to 4-digit number of the flight. e.g. 4537 - required
   * @param {Double} params.scheduledDepartureDate scheduled departure date of the flight, local to the departure airport - required
   * @return {Promise.<Response,ResponseError>} a Promise
   * What's the current status of my flight?
   * ```js
   * amadeus.schedule.flights.get({
   * carrierCode: 'AZ',
   * flightNumber: '319',
   * scheduledDepartureDate: '2021-03-13'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/schedule/flights', params);
  }
}

export default Flights;
