/**
 * A namespaced client for the
 * `/v3/travel/trip-parser` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.tripParser;
 * ```
 *
 * @param {Client} client
 */
class TripParser {
  constructor(client) {
    this.client = client;
  }

  /**
     * parse information from flight, hotel, rail, and rental car confirmation emails
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * "How can I show travelers their full itinerary in one place?"
     *
     * ```js
     * amadeus.tripParser.post(body);
     * ```
     */
  post(params = {}) {
    return this.client.post('/v3/travel/trip-parser', params);
  }
  /**
  * Helper method to convert file contents in UTF-8 encoded string
  * into Base64 encoded string
  */
  fromFile(fileContentsInUTF8Format) {
    return (new Buffer.from(fileContentsInUTF8Format)).toString('base64');
  }
}

export default TripParser;
