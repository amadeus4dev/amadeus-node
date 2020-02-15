/**
 * A namespaced client for the
 * `/v2/media/files/generated-photos` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.media.files.generatedPhotos;
 * ```
 *
 * @param {Client} client
 */
class GeneratedPhotos {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a link to download a rendered image of a landscape.
   *
   * @param {Object} params
   * @param {string} params.category select the type of landscape to be generated
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get a link to download a rendered image of a beach landscape.
   *
   * ```js
   * amadeus.media.files.generatedPhotos.get({
   *   category: 'BEACH'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/media/files/generated-photos', params);
  }
}

export default GeneratedPhotos;
