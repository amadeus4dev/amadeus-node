import CheckinLinks from './urls/checkin_links';

/**
 * A namespaced client for the
 * `/v2/reference-data/urls` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.reference_data.urls;
 * ```
 *
 * @param {Client} client
 * @property {CheckinLinks} checkin_links
 * @protected
 */
class Urls {
  constructor(client) {
    this.client = client;
    this.checkin_links = new CheckinLinks(client);
  }
}

export default Urls;
