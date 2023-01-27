import Covid19Report from './diseases/covid19_report';
/**
 * A namespaced client for the
 * `/v2/duty-of-care/diseases` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.dutyOfCare.diseases;
 * ```
 *
 * @param {Client} client
 */
class Diseases {
  constructor(client) {
    this.client = client;
    this.covid19Report = new Covid19Report(client);
  }
}

export default Diseases;
