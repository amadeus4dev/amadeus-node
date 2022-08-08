/**
 * A namespaced client for the
 * `/v2/duty-of-care/diseases/covid19-area-report` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.dutyOfCare.diseases.covid19Report;
 * ```
 *
 * @param {Client} client
 */
class Covid19Report {
  constructor(client) {
    this.client = client;
  }

  /**
  * Returns Covid-19 related restrictions for a given country
  *
  * @param {Object} params
  * @param {string} params.countryCode  ISO 3166 Alpha-2 code. e.g. "US" United States of America.
  * @return {Promise.<Response,ResponseError>} a Promise
  *
  * Returns Covid-19 restrictions in the United States
  *
  * ```js
  * amadeus.dutyOfCare.diseases.covid19Report.get({
  *     countryCode: 'US'
  * }).then(function(response){
  *     console.log(response.data);
  * }).catch(function(responseError){
  *     console.log(responseError);
  * });
  * ```
  */


  get(params = {}) {
    return this.client.get('/v2/duty-of-care/diseases/covid19-area-report', params);
  }
}

export default Covid19Report;
