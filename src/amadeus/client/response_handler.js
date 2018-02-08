import Response from './response';

import {
  ServerError,
  NotFoundError,
  ClientError,
  ParserError,
  UnknownError,
  NetworkError,
  AuthenticationError
} from './errors';


class ResponseHandler {
  constructor(request, emitter) {
    this.request = request;
    this.emitter = emitter;
  }

  onResponse(http_response) {
    let response = new Response(http_response, this.request);

    http_response.on('data',  response.addChunk.bind(response));
    http_response.on('end',   this.onEnd(response).bind(this));
    http_response.on('close', this.onNetworkError(response).bind(this));
    http_response.on('error', this.onNetworkError(response).bind(this));
  }

  onError(http_response) {
    let response = new Response(http_response, this.request);
    this.onNetworkError(response)();
  }

  onEnd(response) {
    return () => {
      response.parse();
      if (response.success()) { return this.onSuccess(response); }
      else { return this.onFail(response);  }
    };
  }

  onSuccess(response) {
    this.emitter.emit('resolve', response);
  }

  onFail(response) {
    let Error;
    if (response.statusCode >= 500) {
      Error = ServerError;
    } else if (response.statusCode == 401) {
      Error = AuthenticationError;
    } else if (response.statusCode == 404) {
      Error = NotFoundError;
    } else if (response.statusCode >= 400) {
      Error = ClientError;
    } else if (!response.parsed) {
      Error = ParserError;
    } else {
      Error = UnknownError;
    }

    let error = new Error(response);
    this.emitter.emit('reject', error);
  }

  onNetworkError(response) {
    return () => {
      response.parse();
      let error = new NetworkError(response);
      this.emitter.emit('reject', error);
    };
  }
}

export default ResponseHandler;
