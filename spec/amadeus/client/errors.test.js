import {
  ServerError,
  NotFoundError,
  ClientError,
  ParserError,
  UnknownError,
  NetworkError,
  AuthenticationError
} from '../../../src/amadeus/client/errors';

import Response from '../../../src/amadeus/client/response';

describe('Errors', () => {
  it('should exports all error types', () => {
    expect(ServerError).toBeDefined();
    expect(NotFoundError).toBeDefined();
    expect(ClientError).toBeDefined();
    expect(ParserError).toBeDefined();
    expect(UnknownError).toBeDefined();
    expect(NetworkError).toBeDefined();
    expect(AuthenticationError).toBeDefined();
  });

  describe('.instance', () => {
    it('should initialize the names', () => {
      let response = new Response({});

      expect(new ServerError(response).code).toBe('ServerError');
      expect(new NotFoundError(response).code).toBe('NotFoundError');
      expect(new ClientError(response).code).toBe('ClientError');
      expect(new ParserError(response).code).toBe('ParserError');
      expect(new UnknownError(response).code).toBe('UnknownError');
      expect(new NetworkError(response).code).toBe('NetworkError');
      expect(new AuthenticationError(response).code).toBe('AuthenticationError');
    });
  });
});
