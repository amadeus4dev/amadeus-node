import FlightDestinations from './shopping/flight_destinations';
import FlightOffers       from './shopping/flight_offers';
import FlightDates        from './shopping/flight_dates';
import HotelOffers        from './shopping/hotel_offers';
import Hotel              from './shopping/hotel';

/**
 * A namespaced client for the
 * `/v1/shopping` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping;
 * ```
 *
 * @param {Client} client
 * @property {FlightDestinations} flight_destinations
 * @property {FlightOffers} flight_offers
 * @property {FlightDates} flight_dates
 * @property {HotelOffers} hotel_offers
 */
class Shopping {
  constructor(client) {
    this.client             = client;
    this.flightDestinations = new FlightDestinations(client);
    this.flightOffers       = new FlightOffers(client);
    this.flightDates        = new FlightDates(client);
    this.hotelOffers        = new HotelOffers(client);
  }


  /**
   * Loads a namespaced path for a specific hotel with a specific hotel ID
   *
   * @param  {number} [hotelId]  The ID of the hotel to search for
   * @return {Hotel}
   **/
  hotel(hotelId) {
    return new Hotel(this.client, hotelId);
  }
}

export default Shopping;
