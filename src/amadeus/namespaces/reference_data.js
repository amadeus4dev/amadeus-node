import Urls      from './reference_data/urls';
import Locations from './reference_data/locations';
import Location  from './reference_data/location';
import Airlines from './reference_data/airlines';
import RecommendedLocations from './reference_data/recommended_locations';

/**
 * A namespaced client for the
 * `/v2/reference-data` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
class ReferenceData {
  constructor(client) {
    this.client    = client;
    this.urls      = new Urls(client);
    this.locations = new Locations(client);
    this.airlines  = new Airlines(client);
    this.recommendedLocations = new RecommendedLocations(client);
  }

  /**
   * The namespace for the Location APIs - accessing a specific location
   *
   * @param  {string} [locationId]  The ID of the location to search for
   * @return {Location}
   **/
  location(locationId) {
    return new Location(this.client, locationId);
  }
}

export default ReferenceData;
