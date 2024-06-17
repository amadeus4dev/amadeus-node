/**
 * A namespaced client for the
 * `/v2/booking/hotel-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelOrders;
 * ```
 *
 * @param {Client} client
 */
class HotelOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Search API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests, travel agents and payment info
   *
   * ```js
   * amadeus.booking.hotelOrders.post({
   *  'guests': [],
   *  'travel_agent: {},
   *  'room_associations: [],
   *  'payment': {}
   * });
   * ```
   */
  post(params = {}) {
    const body = {
      data: {
        type: 'hotel-order',
        guests: params.guests || [],
        travelAgent: params.travelAgent || {},
        roomAssociations: params.roomAssociations || [],
        payment: params.payment || {},
        arrivalInformation: params.arrivalInformation || {}
      }
    };

    return this.client.post('/v2/booking/hotel-orders', JSON.stringify(body));
  }
}

export default HotelOrders;