import Analytics from './travel/analytics';
import Predictions from './travel/predictions';
import TripParser from './travel/trip_parser';

/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` & `/v3/travel` endpoints
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
 * @property {TripParser} tripParser
 * @protected
 */
class Travel {
  constructor(client) {
    this.client    = client;
    this.analytics = new Analytics(client);
    this.predictions = new Predictions(client);
    this.tripParser = new TripParser(client);
  }
}

export default Travel;
