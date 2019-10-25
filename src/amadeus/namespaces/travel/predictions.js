import TripPurpose from './predictions/trip_purpose';

/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions;
 * ```
 *
 * @param {Client} client
 * @property {tripPurpose} trip_purpose
 */
class Predictions {
  constructor(client) {
    this.client = client;
    this.tripPurpose = new TripPurpose(client);
  }
}

export default Predictions;