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

    it('should extract a detail descriptions', () => {
      let response = new Response({});
      response.parsed = true;
      response.data = { errors: [{ detail: 'detail' }] };
      expect(new ServerError(response).description).toBe('detail');
    });

    it('should extract a error_descriptions', () => {
      let response = new Response({});
      response.parsed = true;
      response.data = { error_description: 'error_description' };
      expect(new ServerError(response).description).toBe('error_description');
    });

    it('should have no description when there the data does not have the right data', () => {
      let response = new Response({});
      response.parsed = true;
      response.data = {};
      expect(new ServerError(response).description).toBeUndefined();
    });

    it('should have no description when there is no data', () => {
      let response = new Response({});
      response.parsed = false;
      expect(new ServerError(response).description).toBeUndefined();
    });
  });
});
