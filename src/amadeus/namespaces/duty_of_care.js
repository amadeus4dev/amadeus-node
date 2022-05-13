import Diseases from './duty_of_care/diseases';
/**
 * A namespaced client for the
 * `/v1/duty-of-care` endpoint
 *
 * Access via the {@link Amadeus} object
 *
 * @param {Client} client
 * @property {Diseases} diseases
 */
class DutyOfCare {
  constructor(client) {
    this.client   = client;
    this.diseases = new Diseases(client);
  }

}

export default DutyOfCare;
