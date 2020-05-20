import Airports from './locations/airports';
import PointOfInterest from './locations/poi';
import PointsOfInterest from './locations/pois';

/**
 * A namespaced client for the
 * `/v2/reference-data/locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations;
 * ```
 *
 * @param {Client} client
 * @property {Airports} airports
 */
class Locations {
  constructor(client) {
    this.client = client;
    this.airports = new Airports(client);
    this.pointsOfInterest = new PointsOfInterest(client);
  }

  /**
   * Returns a list of airports and cities matching a given keyword.
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent the start of
   *   a word in a city or airport name or code
   * @param {string} params.subType the type of location to search for
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find any location starting with 'lon'
   *
   * ```js
   * amadeus.referenceData.location.get({
   *   keyword: 'lon',
   *   subType: Amadeus.location.any
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations', params);
  }

  pointOfInterest(poiId) {
    return new PointOfInterest(this.client, poiId);
  }

}

export default Locations;
