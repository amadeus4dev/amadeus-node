class ResponseHandler {
  constructor(request, emitter) {
    return (http_response) => {
      let response = new Response(http_response, request);

      http_response.on('data', (chunk) => {
        response.addChunk(chunk);
      });

      http_response.on('end', () => {
        response.parse();

        if (response.parsed && http_response.statusCode < 300) {
          emitter.emit('resolve', response);
          return;
        }

        let error;
        if (http_response.statusCode >= 500) {
          error = new ServerError(request, response);
        } else if (http_response.statusCode == 404) {
          error = new NotFoundError(request, response);
        } else if (http_response.statusCode >= 400) {
          error = new ClientError(request, response);
        } else if (!response.parsed) {
          error = new ParserError(request, response);
        } else {
          error = new UnknownError(request, response);
        }

        emitter.emit('reject', error);
      });

      http_response.on('close', (error) => {
        let networkError = new NetworkError(request, error);
        emitter.emit('reject', networkError);
      });

      http_response.on('error', (error) => {
        let networkError = new NetworkError(request, error);
        emitter.emit('reject', networkError);
      });
    };
  }
}

class Response {
  constructor(http_response, request) {
    this.http_response = http_response;
    this.request = request;
    this.json = '';
  }

  addChunk(chunk) {
    this.json += chunk;
  }

  parse() {
    try {
      let types = ['application/json', 'application/vnd.amadeus+json'];
      let isJson = types.includes(this.http_response.headers['content-type']);
      if (isJson && this.json.length > 0) { this.data = JSON.parse(this.json); }
      else { this.data = null; }
      this.parsed = true;
    } catch (SyntaxError) {
      this.parsed = false;
    }
  }
}

class ResponseError extends Error {
  constructor(request, error) {
    super();
    this.request = request;
    this.error = error;
  }
}

class NetworkError  extends ResponseError {}
class ParserError   extends ResponseError {}
class ServerError   extends ResponseError {}
class ClientError   extends ResponseError {}
class NotFoundError extends ResponseError {}
class UnknownError  extends ResponseError {}

export default ResponseHandler;
