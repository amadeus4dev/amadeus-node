import Traveled from './air_traffic/traveled.js';
import Booked from './air_traffic/booked.js';
import Searched from './air_traffic/searched.js';
import SearchedByDestination from './air_traffic/searched_by_destination.js';
import BusiestPeriod from './air_traffic/busiest_period.js';

/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.airTraffic;
 * ```
 *
 * @param {Client} client
 */
class AirTraffic {
  constructor(client) {
    this.client   = client;
    this.traveled = new Traveled(client);
    this.booked = new Booked(client);
    this.searched = new Searched(client);
    this.searchedByDestination = new SearchedByDestination(client);
    this.busiestPeriod = new BusiestPeriod(client);
  }

}

export default AirTraffic;
