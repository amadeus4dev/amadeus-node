import OnTime    from './predictions/on_time';

/**
 * A namespaced client for the
 * `/v1/airport/predictions` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} OnTime
 */
class Predictions {
  constructor(client) {
    this.client = client;
    this.onTime = new OnTime(client);
  }
}

export default Predictions;