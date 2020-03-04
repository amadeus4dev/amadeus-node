/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrders;
 * ```
 *
 * @param {Client} client
 */
class FlightOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the selected flight-offer and create a flight-order
   *
   * @param {Object} flight_offers list of flight-offer(s) as suggested by flightOffersSearch
   * @param {Object} travelers_info list of traveler information for each traveler
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the flight-offer(s) suggested by flightOffersSearch and create a flight-order
   *
   * ```js
   * amadeus.booking.flightOrders.post(flightOffers, travelers_info);
   * ```
   */
  post(flight_offers, travelers_info) {

    var flight_offers_array = [];
    if (flight_offers) {
      if (Object.prototype.toString.call(flight_offers) === '[object Array]') {
        flight_offers_array = flight_offers;
      }
      else {
        flight_offers_array.push(flight_offers);
      }
    }

    var travelers_info_array = [];
    if (travelers_info) {
      if (Object.prototype.toString.call(travelers_info) === '[object Array]') {
        travelers_info_array = travelers_info;
      }
      else {
        travelers_info_array.push(travelers_info);
      }
    }

    var body = {
      'data': {
        'type': 'flight-order',
        'flightOffers': flight_offers_array,
        'travelers': travelers_info_array
      }
    };
    return this.client.post('/v1/booking/flight-orders', body);
  }
}

export default FlightOrders;