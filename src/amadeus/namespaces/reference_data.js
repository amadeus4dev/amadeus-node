import Urls      from './reference_data/urls';
import Locations from './reference_data/locations';

/**
 * A namespaced client for the
 * `/v2/reference-data` endpoints
 *
 * Access via the +Amadeus+ object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.reference_data.urls
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 */
class ReferenceData {
  constructor(client) {
    this.client = client;

    this.urls      = new Urls(client);
    this.locations = new Locations(client);
  }
}

export default ReferenceData;
