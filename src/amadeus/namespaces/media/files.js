import GeneratedPhotos from './files/generated_photos';

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
 * @property {GeneratedPhotos} generatedPhotos
 */
class Files {
  constructor(client) {
    this.client = client;
    this.generatedPhotos = new GeneratedPhotos(client);
  }
}

export default Files;
