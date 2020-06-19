let JSON_CONTENT_TYPES = ['application/json', 'application/vnd.amadeus+json'];

/**
 * The response object returned for every API call.
 *
 * @param {Object} http_response the response object returned from the Node/HTTP
 *  request
 * @param {Request} request the request object used to make this API call
 *
 * @property {number} statusCode the HTTP status code for the response, if any
 * @property {string} body the raw body received from the API
 * @property {Object} result the parsed JSON received from the API
 * @property {Object} data the data attribute taken from the result
 * @property {boolean} parsed wether the raw body has been parsed into JSON
 * @property {Request} request the request object used to make this API call
 *
 */
class Response {
  constructor(http_response, request) {
    this.headers = http_response.headers || {};
    this.statusCode  = http_response.statusCode;
    this.request     = request;
    this.body        = '';
    this.result      = null;
    this.data        = null;
    this.parsed      = false;
  }

  // PROTECTED

  /**
   * Add a chunk received from the API to the body
   *
   * @param  {string} chunk a chunk of data
   * @protected
   */
  addChunk(chunk) {
    this.body += chunk;
  }


  /**
   * Tries to parse parse the raw data
   * @protected
   */
  parse() {
    try {
      if (this.isJson()) {
        this.result = JSON.parse(this.body);
        this.data = this.result.data;
        this.parsed = true;
      } else {
        this.parsed = false;
      }
    } catch (SyntaxError) {
      this.parsed = false;
    }
  }

  /**
   * Wether this API call can be considered a success. Used to wrap the response
   * into a ResponseError
   *
   * @return {boolean}
   * @protected
   */
  success() {
    return (this.parsed && this.statusCode < 300);
  }

  // PRIVATE


  /**
   * Tests if the content is seemingly JSON
   *
   * @return {boolean}
   * @private
   */
  isJson() {
    return (JSON_CONTENT_TYPES.indexOf(this.headers['content-type']) !== -1);
  }
}

export default Response;
