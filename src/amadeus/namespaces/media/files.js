/**
 * A namespaced client for the
 * `/v2/media/files` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.media.files;
 * ```
 *
 * @param {Client} client
 */
class Files {
  constructor(client) {
    this.client = client;
  }
}

export default Files;
