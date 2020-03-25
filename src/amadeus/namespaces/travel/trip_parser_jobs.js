import Result from './trip_parser_jobs/result';

/**
 * A namespaced client for the
 * `/v2/travel/trip-parser-jobs` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.tripParserJobs;
 * ```
 *
 * @param {Client} client
 * @property {Result} result
 */
class TripParserJobs {
  constructor(client, jobId) {
    this.client = client;
    this._jobId = jobId;
    this.result = new Result(client, jobId);
  }

  /**
   * To get the parsing status and the link to the result in case of successful parsing.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To get the parsing status and the link to the result for job with ID 'XXX'
   *
   * ```js
   * amadeus.travel.tripParserJobs('XXX').get();
   * ```
   */
  get() {
    if (this._jobId)
      return this.client.get('/v2/travel/trip-parser-jobs/' + this._jobId);
    else
      throw new Error('MISSING_REQUIRED_PARAMETER');
  }

  /**
   * To send the request for the parsing with the booking details and input parameters.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To get the parsing status and the link to the result for job with ID 'XXX'
   *
   * ```js
   * amadeus.travel.tripParserJobs().post({
   *  'type': 'trip-parser-job',
   *  'content': amadeus.travel.tripParserJobs().convertToJson("fileContentsInUTF8Format");
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v2/travel/trip-parser-jobs', params);
  }

  /**
   * Helper method to convert file contents in UTF-8 encoded string
   * into Base64 encoded string
   */
  convertToJson(fileContentsInUTF8Format) {
    return (new Buffer(fileContentsInUTF8Format)).toString('base64');
  }
}

export default TripParserJobs;