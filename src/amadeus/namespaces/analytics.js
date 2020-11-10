import ItineraryPriceMetrics from './analytics/itinerary_price_metrics';

/**
 * A namespaced client for the
 * `/v1/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
class Analytics {
  constructor(client) {
    this.client = client;
    this.itineraryPriceMetrics = new ItineraryPriceMetrics(client);
  }
}

export default Analytics;
