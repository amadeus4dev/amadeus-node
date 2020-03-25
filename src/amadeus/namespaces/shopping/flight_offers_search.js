/**
 * A namespaced client for the
 * `/v2/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffersSeach;
 * ```
 *
 * @param {Client} client
 */
class FlightOffersSearch {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get cheapest flight recommendations and prices on a given journey.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart
   * from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.adults the number of adult travelers (age 12 or older on date of departure)
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get cheapest flight recommendations and prices for SYD-BKK on 2020-08-01 for 2 adults
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    originLocationCode: 'SYD',
   *    destinationLocationCode: 'BKK',
   *    departureDate: '2020-08-01',
   *    adults: '2'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/shopping/flight-offers', params);
  }

  /**
   * To do a customized search with every option available.
   *
   * @param {Object} params
   * @param {Double} params.getFlightOffersBody list of criteria to retrieve a list of flight offers
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To do a customized search with given options.
   *
   * ```js
   * amadeus.shopping.flightOffersSearch.post (JSON.stringify({
        "currencyCode": "USD",
        "originDestinations": [
          {
            "id": "1",
            "originLocationCode": "RIO",
            "destinationLocationCode": "MAD",
            "departureDateTimeRange": {
              "date": "2020-03-01",
              "time": "10:00:00"
            }
          },
          {
            "id": "2",
            "originLocationCode": "MAD",
            "destinationLocationCode": "RIO",
            "departureDateTimeRange": {
              "date": "2020-03-05",
              "time": "17:00:00"
            }
          }
        ],
        "travelers": [
          {
            "id": "1",
            "travelerType": "ADULT",
            "fareOptions": [
              "STANDARD"
            ]
          },
          {
            "id": "2",
            "travelerType": "CHILD",
            "fareOptions": [
              "STANDARD"
            ]
          }
        ],
        "sources": [
          "GDS"
        ],
        "searchCriteria": {
          "maxFlightOffers": 50,
          "flightFilters": {
            "cabinRestrictions": [
              {
                "cabin": "BUSINESS",
                "coverage": "MOST_SEGMENTS",
                "originDestinationIds": [
                  "1"
                ]
              }
            ],
            "carrierRestrictions": {
              "excludedCarrierCodes": [
                "AA",
                "TP",
                "AZ"
              ]
            }
          }
        }
      }))
    * ```
    */
  post(params = {}) {
    return this.client.post('/v2/shopping/flight-offers', params);
  }
}

export default FlightOffersSearch;
