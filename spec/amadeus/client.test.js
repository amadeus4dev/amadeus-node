import Client from '../../src/amadeus/client';
import https  from 'https';

let client;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

let path = '/foo/bar';
let params = { baz: 'qux' };

describe('Client', () => {
  it('should exports an Client object', () => {
    expect(Client).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      client = new Client(credentials);
    });

    it('should export an Client object', () => {
      expect(client).toBeInstanceOf(Client);
    });

    it('should throw an error without required credentials', () => {
      expect(() => { new Client(); }).toThrow();
    });

    it('should initialize all default values', () => {
      expect(client.clientId).toBe('123');
      expect(client.clientSecret).toBe('234');
      expect(client.logger).toBe(console);
      expect(client.host).toBe('production.api.amadeus.com');
      expect(client.customAppId).toBe(null);
      expect(client.customAppVersion).toBe(null);
      expect(client.http).toBe(https);
    });

    it('should allow for setting a custom logger', () => {
      let logger = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logger' : logger };
      let client = new Client(options);
      expect(client.logger).toBe(logger);
    });

    it('should allow for setting a different hostname', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'hostname' : 'test' };
      let client = new Client(options);
      expect(client.host).toBe('test.api.amadeus.com');
    });

    it('should allow for setting a custom App ID and Version', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'customAppId' : 'cli', 'customAppVersion' : '1.0.0' };
      let client = new Client(options);
      expect(client.customAppId).toBe('cli');
      expect(client.customAppVersion).toBe('1.0.0');
    });

    it('should allow for setting a custom http client', () => {
      let http = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'http' : http };
      let client = new Client(options);
      expect(client.http).toBe(http);
    });

    describe('.get', () => {
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        let call = client.call = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        // make an authenticated POST call
        client.get(path, params);
        // ensure Client.call() was called with the right parameters
        expect(call).toHaveBeenCalledWith('GET', path, params, 'token');
      });
    });

    describe('.post', () => {
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        let call = client.call = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        // make an authenticated POST call
        client.post(path, params);
        // ensure Client.call() was called with the right parameters
        expect(call).toHaveBeenCalledWith('POST', path, params, 'token');
      });
    });

    describe('.unauthenticatedPost', () => {
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        let call = client.call = jest.fn();
        // make an unauthenticated POST
        client.unauthenticatedPost(path, { baz: 'qux' });
        // ensure the call() method was called with the right params
        expect(call).toHaveBeenCalledWith('POST', path, params);
      });
    });

    describe('.call', () => {
      it('should create a new request and call it', () => {
        // make a POST call
        let verb = 'POST';
        // mock the Request.call() method
        let call = jest.fn();
        // mock the entire Request object on the client
        let Request = client.Request = jest.fn().mockImplementation(() => {
          return { call: call };
        });
        // make the call
        client.call(verb, path, params);
        // ensure Request was initialized with the right params
        expect(Request).toHaveBeenCalledWith(client, verb, path, params, null);
        // ensure the call() method was called
        expect(call).toHaveBeenCalled();
      });
    });


  });
});
