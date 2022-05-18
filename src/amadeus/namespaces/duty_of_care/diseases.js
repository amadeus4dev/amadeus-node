import Covid19AreaReport from './diseases/covid19_area_report';
/**
 * A namespaced client for the
 * `/v1/duty-of-care/diseases` endpoints
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
    this.covid19AreaReport = new Covid19AreaReport(client);
  }
}

export default Diseases;
