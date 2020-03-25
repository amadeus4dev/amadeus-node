import FlightChoicePrediction from './flight_offers/flight_choice_prediction.js';
import Pricing from './flight_offers/pricing.js';

/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
class FlightOffers {
  constructor(client) {
    this.client = client;
    this.prediction = new FlightChoicePrediction(client);
    this.pricing = new Pricing(client);
  }

  /**
   * Find the cheapest bookable flights for a date.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @param {string} params.destination City/Airport IATA code to which the
   *   traveler is going. PAR, for example
   * @param {string} params.departureDate The departure date for the flight
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest flights from New-York to Madrid for Summer 2020
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *   origin: 'NYC',
   *   destination: 'MAD',
   *   departureDate: '2020-08-01'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/flight-offers', params);
  }
}

export default FlightOffers;
