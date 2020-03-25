/**
 * A namespaced client for the
 * `/v2/travel/trip-parser-jobs/{jobId}/result` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.tripParserJobs.result;
 * ```
 *
 * @param {Client} client
 */
class Result {
  constructor(client, jobId) {
    this.client = client;
    this._jobId = jobId;
  }

  /**
   * To get the complete result of parsing as a aggregated view of Trip.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To get the complete result of parsing job ID 'XXX'
   *
   * ```js
   * amadeus.travel.tripParserJobs('XXX').result.get();
   * ```
   */
  get() {
    if (this._jobId)
      return this.client.get('/v2/travel/trip-parser-jobs/' + this._jobId + '/result');
    else
      throw new Error('MISSING_REQUIRED_PARAMETER');
  }
}

export default Result;