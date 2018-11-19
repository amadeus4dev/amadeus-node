// /**
//  * A namespaced client for the
//  * `/v1/travel/analytics/fare-searches` endpoints
//  *
//  * Access via the {@link Amadeus} object
//  *
//  * ```js
//  * let amadeus = new Amadeus();
//  * amadeus.travel.analytics.fareSearches;
//  * ```
//  *
//  * @param {Client} client
//  */
// class FareSearches {
//   constructor(client) {
//     this.client = client;
//   }

//   /**
//    * The Fare Search History API allows to find the number of
//    * estimated searches from an origin, optionally a destination,
//    * within a time period when travelers are performing the searches.
//    *
//    * @param {Object} params
//    * @param {string} params.origin IATA code of the origin city e.g. BOS for
//    *   Boston - required
//    * @param {string} params.sourceCountry IATA code of the country from which
//    *   fare searches were made - e.g. US for United States
//    * @param {string} params.period period of search; can be a year
//    *   or a month or a week. ISO format must be used - e.g. 2015
//    *   for year; 2015-05 for month and 2015-W04 for week. Period
//    *   ranges are not supported. Only periods from year 2011-01 up
//    *   to current year and previous month or week are valid. Future
//    *   dates are not supported.
//    * @return {Promise.<Response,ResponseError>} a Promise
//    *
//    * Find the air traffic from Nice in August 2017 for the French market
//    *
//    * ```js
//    * amadeus.travel.analytics.fareSearches.get({
//    *   origin: 'NCE',
//    *   sourceCountry : 'FR',
//    *   period: '2017-08'
//    * });
//    * ```
//    */
//   get(params = {}) {
//     return this.client.get('/v1/travel/analytics/fare-searches', params);
//   }
// }

// export default FareSearches;
