import Analytics from './travel/analytics';

/**
 * A namespaced client for the
 * `/v1/travel` endpoints
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
 * @protected
 */
class Travel {
  constructor(client) {
    this.client    = client;
    this.analytics = new Analytics(client);
  }
}

export default Travel;
