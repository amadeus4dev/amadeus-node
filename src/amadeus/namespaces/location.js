import Analytics    from './location/analytics';

/**
 * A namespaced client for the
 * `/v1/location` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} analytics
 */
class Location {
  constructor(client) {
    this.client             = client;
    this.analytics = new Analytics(client);
  }
}

export default Location;