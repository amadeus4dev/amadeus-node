import Predictions    from './airport/predictions';

/**
 * A namespaced client for the
 * `/v1/airport` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */
class Airport {
  constructor(client) {
    this.client             = client;
    this.predictions = new Predictions(client);
  }
}

export default Airport;