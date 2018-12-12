import FlightDestinations from './shopping/flight_destinations';
import FlightOffers       from './shopping/flight_offers';
import FlightDates        from './shopping/flight_dates';
import HotelOffers        from './shopping/hotel_offers';
import HotelOffersByHotel from './shopping/hotel_offers_by_hotel';
import HotelOffer         from './shopping/hotel_offer';


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
 * @property {HotelOffer} hotel_offer
 * @property {HotelOffersByHotel} hotel_offers_by_hotel
 */
class Shopping {
  constructor(client) {
    this.client             = client;
    this.flightDestinations = new FlightDestinations(client);
    this.flightOffers       = new FlightOffers(client);
    this.flightDates        = new FlightDates(client);
    this.hotelOffers        = new HotelOffers(client);
    this.hotelOffersByHotel = new HotelOffersByHotel(client);
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
}

export default Shopping;
