import FlightDestinations from './shopping/flight_destinations';
import FlightOffers       from './shopping/flight_offers';
import FlightOffersSearch from './shopping/flight_offers_search';
import FlightDates        from './shopping/flight_dates';
import Seatmaps           from './shopping/seatmaps';
import HotelOfferSearch   from './shopping/hotel_offer_search';
import HotelOffersSearch  from './shopping/hotel_offers_search';
import Activities         from './shopping/activities';
import Activity           from './shopping/activity';
import Availability       from './shopping/availability';


/**
 * A namespaced client for the
 * `/v1/shopping`, `/v2/shopping` and `/v3/shopping` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping;
 * ```
 *
 * @param {Client} client
 * @property {FlightDestinations} flightDestinations
 * @property {FlightOffers} flightOffers
 * @property {FlightOffersSearch} flightOffersSearch
 * @property {FlightDates} flightDates
 * @property {Seatmaps} seatmaps
 * @property {HotelOfferSearch} hotelOffers
 * @property {HotelOffersSearch} hotelOffers
 * @property {Availability} availability
 */
class Shopping {
  constructor(client) {
    this.client             = client;
    this.flightDestinations = new FlightDestinations(client);
    this.flightOffers       = new FlightOffers(client);
    this.flightOffersSearch = new FlightOffersSearch(client);
    this.flightDates        = new FlightDates(client);
    this.seatmaps           = new Seatmaps(client);
    this.hotelOffersSearch  = new HotelOffersSearch(client);
    this.activities         = new Activities(client);
    this.availability       = new Availability(client);
  }

  /**
   * Loads a namespaced path for a specific offer ID for Hotel Search V3
   *
   * @param  {string} [offerId]  The ID of the offer for a dedicated hotel
   * @return {HotelOfferSearch}
   **/
  hotelOfferSearch(offerId) {
    return new HotelOfferSearch(this.client, offerId);
  }

  /**
   * Loads a namespaced path for a specific activity ID
   *
   * @param  {string} [activityId]  The ID of the activity for a dedicated tour or activity
   * @return {Activity}
   **/
  activity(activityId) {
    return new Activity(this.client, activityId);
  }

}

export default Shopping;
