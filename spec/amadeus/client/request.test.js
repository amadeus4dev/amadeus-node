import Request          from '../../../src/amadeus/client/request';
import Client           from '../../../src/amadeus/client';

import EventEmitter from 'events';

let verb = 'GET';
let path = '/foo/bar';
let params = { foo: 'bar' };
let bearerToken = 'token';

let client;
let clientParams = { clientId: '123', clientSecret: '234' };
let env = { version: '2.3.4' };
let request;

describe('Request', () => {
  it('should exports an Request object', () => {
    expect(Request).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      request = new Request(verb, path, params, bearerToken);
      client = new Client(clientParams);
      client.version = '1.2.3';
    });

    it('should store the instance variables', () => {
      expect(request.verb).toBe(verb);
      expect(request.path).toBe(path);
      expect(request.params).toBe(params);
      expect(request.bearerToken).toBe(bearerToken);
    });

    describe('.call', () => {
      it('should make a request and return a promise', () => {
        client.unauthenticatedPost = jest.fn(() => Promise.resolve('data'));

        request.request = jest.fn();
        request.promise = jest.fn();
        request.call(client);
        expect(request.promise).toHaveBeenCalledWith(expect.any(EventEmitter));
        expect(request.request).toHaveBeenCalledWith(client, expect.any(EventEmitter));
      });
    });

    describe('.request', () => {
      it('should make a request and bind the handlers', () => {
        let emitter = new EventEmitter();

        let http_request = {
          on: jest.fn(),
          write: jest.fn(),
          end: jest.fn()
        };

        client.http.request = jest.fn().mockImplementation(() => {
          return http_request;
        });

        request.call(client, emitter);

        expect(client.http.request).toHaveBeenCalledWith(expect.any(Object));
        expect(http_request.on).toHaveBeenCalledTimes(2);
        expect(http_request.on).toHaveBeenCalledWith('response', expect.any(Function));
        expect(http_request.on).toHaveBeenCalledWith('error', expect.any(Function));
        expect(http_request.write).toHaveBeenCalledWith('');
        expect(http_request.end).toHaveBeenCalled();
      });
    });

    describe('.promise', () => {
      it('should return a new promise with the emitter bound to resolve/reject', () => {
        let onFn = jest.fn();
        let emitter = { on: onFn };

        request.promise(emitter);

        expect(onFn).toHaveBeenCalledTimes(2);
        expect(onFn).toHaveBeenCalledWith('resolve', expect.any(Function));
        expect(onFn).toHaveBeenCalledWith('reject', expect.any(Function));
      });

      it('should listen to the emitter on resolve', () => {
        let emitter = new EventEmitter();
        let promise = request.promise(emitter);

        emitter.emit('resolve', 'success');
        expect(promise).resolves.toBe('success');
      });

      it('should listen to the emitter on reject', () => {
        let emitter = new EventEmitter();
        let promise = request.promise(emitter);

        emitter.emit('reject', 'error');
        expect(promise).rejects.toBe('error');
      });
    });

    describe('.userAgent', () => {
      it('should build the user agent', () => {
        expect(request.userAgent(client, env)).toBe('amadeus-node/1.2.3 node/2.3.4');
      });

      it('should build use the custom App ID and Version when present', () => {
        client.customAppId = 'amadeus-cli';
        client.customAppVersion = '3.4.5';
        expect(request.userAgent(client, env)).toBe('amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5');
      });
    });

    describe('.queryPath', () => {
      it('should return just the path in case of a POST call', () => {
        request.verb = 'POST';
        expect(request.queryPath()).toBe(path);
      });

      it('should serialize params and merge them with the path', () => {
        request.verb = 'GET';
        expect(request.queryPath()).toBe('/foo/bar?foo=bar');
      });

      it('should accept nested objects', () => {
        request.verb = 'GET';
        request.params = { foo: { bar: 'baz' }};
        expect(request.queryPath()).toBe('/foo/bar?foo%5Bbar%5D=baz');
      });

      it('should accept empty params', () => {
        request.verb = 'GET';
        request.params = {};
        expect(request.queryPath()).toBe('/foo/bar?');
      });

      it('should accept undefined params', () => {
        request.verb = 'GET';
        request.params = undefined;
        expect(request.queryPath()).toBe('/foo/bar?');
      });

      it('should accept null params', () => {
        request.verb = 'GET';
        request.params = null;
        expect(request.queryPath()).toBe('/foo/bar?');
      });
    });

    describe('.body', () => {
      it('should return an empty string in case of a non-POST call', () => {
        request.verb = 'GET';
        expect(request.body()).toEqual('');
      });

      it('should return the serialized params', () => {
        request.verb = 'POST';
        expect(request.body()).toBe('foo=bar');
      });

      it('should accept nested objects', () => {
        request.verb = 'POST';
        request.params = { foo: { bar: 'baz' }};
        expect(request.body()).toBe('foo%5Bbar%5D=baz');
      });

      it('should accept empty params', () => {
        request.verb = 'POST';
        request.params = {};
        expect(request.body()).toBe('');
      });

      it('should accept null params', () => {
        request.verb = 'POST';
        request.params = null;
        expect(request.body()).toBe('');
      });

      it('should accept undefined params', () => {
        request.verb = 'POST';
        request.params = undefined;
        expect(request.body()).toBe('');
      });

    });

    describe('.options', () => {
      it('should combine the options object for making an API call', () => {
        client.version = '1.1.1';
        let env = { version: '2.3.4' };

        expect(request.options(client, env)).toEqual({
          method: verb,
          host: 'production.api.amadeus.com',
          port: 443,
          path: '/foo/bar?foo=bar',
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer token',
            'User-Agent': 'amadeus-node/1.1.1 node/2.3.4',
          }
        });
      });
    });

    describe('.addAuthorizationHeader', () => {
      it('should add the authorization header if the token is present', () => {
        request.bearerToken = '123456789';
        let options = { headers: {} };
        request.addAuthorizationHeader(options);
        expect(options['headers']['Authorization']).toBe('Bearer 123456789');
      });

      it('skip if the token is not present', () => {
        request.bearerToken = undefined;
        let options = { headers: {} };
        request.addAuthorizationHeader(options);
        expect(options['headers']['Authorization']).toBeUndefined();
      });
    });

    describe('.addContentTypeHeader', () => {
      it('should add the Content-Type header if the verb is POST', () => {
        request.verb = 'POST';
        let options = { headers: {} };
        request.addContentTypeHeader(options);
        expect(options['headers']['Content-Type']).toBe('application/x-www-form-urlencoded');
      });

      it('skip if the verb is not POST', () => {
        request.verb = 'GET';
        let options = { headers: {} };
        request.addContentTypeHeader(options);
        expect(options['headers']['Content-Type']).toBeUndefined();
      });
    });
  });
});
