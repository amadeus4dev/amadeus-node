import Analytics from './travel/analytics';
import Predictions from './travel/predictions';
import TripParserJobs from './travel/trip_parser_jobs';

/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel;
 * ```
 *
 * @param {Client} client
 * @property {Analytics} analytics
 * @property {Predictions} predictions
 * @property {TripParserJobs} tripParserJobs
 * @protected
 */
class Travel {
  constructor(client) {
    this.client    = client;
    this.analytics = new Analytics(client);
    this.predictions = new Predictions(client);
  }

  tripParserJobs (jobId) {
    return new TripParserJobs(this.client, jobId);
  }
}

export default Travel;
