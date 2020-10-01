import FlightDestinations from './shopping/flight_destinations';
import FlightOffers       from './shopping/flight_offers';
import FlightOffersSearch from './shopping/flight_offers_search';
import FlightDates        from './shopping/flight_dates';
import Seatmaps           from './shopping/seatmaps';
import HotelOffers        from './shopping/hotel_offers';
import HotelOffersByHotel from './shopping/hotel_offers_by_hotel';
import HotelOffer         from './shopping/hotel_offer';
import Activities         from './shopping/activities';
import Activity           from './shopping/activity';


/**
 * A namespaced client for the
 * `/v1/shopping` and `/v2/shopping` endpoints
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
 * @property {HotelOffers} hotelOffers
 * @property {HotelOffer} hotelOffer
 * @property {HotelOffersByHotel} hotelOffersByHotel
 */
class Shopping {
  constructor(client) {
    this.client             = client;
    this.flightDestinations = new FlightDestinations(client);
    this.flightOffers       = new FlightOffers(client);
    this.flightOffersSearch = new FlightOffersSearch(client);
    this.flightDates        = new FlightDates(client);
    this.seatmaps           = new Seatmaps(client);
    this.hotelOffers        = new HotelOffers(client);
    this.hotelOffersByHotel = new HotelOffersByHotel(client);
    this.activities         = new Activities(client);
  }


  /**
   * Loads a namespaced path for a specific offer ID
   *
   * @param  {string} [offerId]  The ID of the offer for a dedicated hotel
   * @return {HotelOffer}
   **/
  hotelOffer(offerId) {
    return new HotelOffer(this.client, offerId);
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
