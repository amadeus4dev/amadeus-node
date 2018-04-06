import Client from '../../src/amadeus/client';
import https  from 'https';

import EventEmitter from 'events';

let client;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

let verb = 'GET';
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
      expect(client.host).toBe('test.api.amadeus.com');
      expect(client.customAppId).toBe(null);
      expect(client.customAppVersion).toBe(null);
      expect(client.http).toBe(https);
      expect(client.logLevel).toBe('silent');
    });

    it('should allow for setting a custom logger', () => {
      let logger = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logger' : logger };
      let client = new Client(options);
      expect(client.logger).toBe(logger);
    });

    it('should allow for setting debug mode', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logLevel' : 'debug' };
      let client = new Client(options);
      expect(client.logLevel).toBe('debug');
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
        let call = client.unauthenticatedRequest = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        // make an authenticated POST call
        client.get(path, params);
        // ensure Client.call() was called with the right parameters
        expect(call).toHaveBeenCalledWith('GET', path, params, 'token');
      });

      it('should work without params', () => {
        let call = client.unauthenticatedRequest = jest.fn();
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        client.get(path);
        expect(call).toHaveBeenCalledWith('GET', path, {}, 'token');
      });
    });

    describe('.post', () => {
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        let call = client.unauthenticatedRequest = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        // make an authenticated POST call
        client.post(path, params);
        // ensure Client.call() was called with the right parameters
        expect(call).toHaveBeenCalledWith('POST', path, params, 'token');
      });

      it('should work without params', () => {
        let call = client.unauthenticatedRequest = jest.fn();
        client.accessToken = { bearerToken: () => {
          return { then: resolve => resolve('token') };
        }};
        client.post(path);
        expect(call).toHaveBeenCalledWith('POST', path, {}, 'token');
      });
    });

    describe('.unauthenticatedRequest', () => {
      it('should create a new request and call it', () => {
        client.accessToken.bearerToken = jest.fn(() => Promise.resolve('data'));
        client.execute = jest.fn();
        let request = jest.mock();
        client.buildRequest = jest.fn(() => { return request; });
        client.buildPromise = jest.fn();
        client.unauthenticatedRequest(verb, path, params);
        expect(client.buildPromise).toHaveBeenCalledWith(expect.any(EventEmitter));
        expect(client.buildRequest).toHaveBeenCalledWith(verb, path, params, null);
        expect(client.execute).toHaveBeenCalledWith(request, expect.any(EventEmitter));
      });
    });

    describe('.execute', () => {
      it('should make a request and bind the handlers', () => {
        let emitter = new EventEmitter();
        let request = client.buildRequest('GET', '/foo/bar', {});

        let http_request = {
          on: jest.fn(),
          write: jest.fn(),
          end: jest.fn()
        };

        client.http.request = jest.fn().mockImplementation(() => {
          return http_request;
        });

        client.execute(request, emitter);

        expect(client.http.request).toHaveBeenCalledWith(expect.any(Object));
        expect(http_request.on).toHaveBeenCalledTimes(2);
        expect(http_request.on).toHaveBeenCalledWith('response', expect.any(Function));
        expect(http_request.on).toHaveBeenCalledWith('error', expect.any(Function));
        expect(http_request.write).toHaveBeenCalledWith('');
        expect(http_request.end).toHaveBeenCalled();
      });
    });


    describe('.buildPromise', () => {
      it('should return a new promise with the emitter bound to resolve/reject', () => {
        let onFn = jest.fn();
        let emitter = { on: onFn };

        client.buildPromise(emitter);

        expect(onFn).toHaveBeenCalledTimes(2);
        expect(onFn).toHaveBeenCalledWith('resolve', expect.any(Function));
        expect(onFn).toHaveBeenCalledWith('reject', expect.any(Function));
      });

      it('should listen to the emitter on resolve', () => {
        let emitter = new EventEmitter();
        let promise = client.buildPromise(emitter);

        emitter.emit('resolve', 'success');
        expect(promise).resolves.toBe('success');
      });

      it('should listen to the emitter on reject', () => {
        let emitter = new EventEmitter();
        let promise = client.buildPromise(emitter);

        emitter.emit('reject', 'error');
        expect(promise).rejects.toBe('error');
      });
    });

    describe('.debug', () => {
      it('should be true if the log level is debug', () => {
        client.logLevel = 'debug';
        expect(client.debug()).toBeTruthy();
      });

      it('should be false if the log level is not debug', () => {
        client.logLevel = 'warn';
        expect(client.debug()).toBeFalsy();
      });
    });

    describe('.warn', () => {
      it('should be true if the log level is debug', () => {
        client.logLevel = 'debug';
        expect(client.warn()).toBeTruthy();
      });

      it('should be true if the log level is warn', () => {
        client.logLevel = 'warn';
        expect(client.warn()).toBeTruthy();
      });

      it('should be false if the log level is not debug or warn', () => {
        client.logLevel = 'silent';
        expect(client.warn()).toBeFalsy();
      });
    });
  });
});
