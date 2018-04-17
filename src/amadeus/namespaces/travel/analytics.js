import AirTraffic  from './analytics/air_traffic';
import FareSearches from './analytics/fare_searches';

/**
 * A namespaced client for the
 * `/v2/travel/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
class Analytics {
  constructor(client) {
    this.client        = client;
    this.airTraffic   = new AirTraffic(client);
    this.fareSearches = new FareSearches(client);
  }
}

export default Analytics;
