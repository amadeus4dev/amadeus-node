import byCity from './hotels/by-city.js';
import byGeocode from './hotels/by-geocode.js';
import byHotels from './hotels/by-hotels.js';

/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels;
 * ```
 *
 * @param {Client} client
 */
class Hotels {
  constructor(client) {
    this.client = client;
    this.byCity = new byCity(client);
    this.byGeocode = new byGeocode(client);
    this.byHotels = new byHotels(client);
  }
}

export default Hotels;
