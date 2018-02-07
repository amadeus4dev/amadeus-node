class ErrorHandler {
  constructor(request, emitter) {
    return (error) => {
      let networkError = new NetworkError(request, error);
      emitter.emit('reject', networkError);
    };
  }
}

class NetworkError extends Error {
  constructor(request, error) {
    super(error);
    this.error = error;
    this.request = request;
    this.name = 'NetworkError';
  }
}

export default ErrorHandler;
