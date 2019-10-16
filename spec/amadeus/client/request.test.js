import Request from '../../../src/amadeus/client/request';

let host = 'test.api.amadeus.com';
let port = 443;
let verb = 'GET';
let ssl = true;
let path = '/foo/bar';
let params = { foo: 'bar' };
let bearerToken = 'token';
let clientVersion = '1.2.3';
let languageVersion = '2.3.4';
let appId = 'amadeus-cli';
let appVersion = '3.4.5';

let request;

describe('Request', () => {
  it('should exports an Request object', () => {
    expect(Request).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      request =  new Request({
        host: host,
        port: port,
        ssl: ssl,
        verb: verb,
        path: path,
        params: params,
        bearerToken: bearerToken,
        clientVersion: clientVersion,
        languageVersion: languageVersion,
        appId: appId,
        appVersion: appVersion
      });
    });

    it('should store the instance variables', () => {
      expect(request.verb).toBe(verb);
      expect(request.path).toBe(path);
      expect(request.params).toBe(params);
      expect(request.queryPath).toBe('/foo/bar?foo=bar');
      expect(request.bearerToken).toBe(bearerToken);
      expect(request.clientVersion).toBe(clientVersion);
      expect(request.languageVersion).toBe(languageVersion);
      expect(request.appId).toBe(appId);
      expect(request.appVersion).toBe(appVersion);
      expect(request.headers).toEqual({
        'Accept': 'application/json, application/vnd.amadeus+json',
        'User-Agent': 'amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5',
        'Authorization': 'Bearer token',
        'Content-Type': 'application/vnd.amadeus+json'
      });
    });

    describe('.userAgent', () => {
      it('should build the user agent', () => {
        request.appId = undefined;
        request.appVersion = undefined;
        expect(request.userAgent()).toBe('amadeus-node/1.2.3 node/2.3.4');
      });

      it('should build use the custom App ID and Version when present', () => {
        request.appId = 'amadeus-cli';
        request.appVersion = '3.4.5';
        expect(request.userAgent()).toBe('amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5');
      });
    });

    describe('.fullQueryPath', () => {
      it('should return just the path in case of a POST call', () => {
        request.verb = 'POST';
        expect(request.fullQueryPath()).toBe(path);
      });

      it('should serialize params and merge them with the path', () => {
        request.verb = 'GET';
        expect(request.fullQueryPath()).toBe('/foo/bar?foo=bar');
      });

      it('should accept nested objects', () => {
        request.verb = 'GET';
        request.params = { foo: { bar: 'baz' }};
        expect(request.fullQueryPath()).toBe('/foo/bar?foo%5Bbar%5D=baz');
      });

      it('should accept empty params', () => {
        request.verb = 'GET';
        request.params = {};
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });

      it('should accept undefined params', () => {
        request.verb = 'GET';
        request.params = undefined;
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });

      it('should accept null params', () => {
        request.verb = 'GET';
        request.params = null;
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });
    });

    describe('.body', () => {

      it('should return an empty string in case of a non-POST call', () => {
        request.verb = 'GET';
        expect(request.body()).toEqual('');
      });

      it('should return a serialized body if token is not present', () => {
        request.verb = 'POST';
        request.bearerToken = undefined;
        expect(request.body()).toEqual('foo=bar');
      });

      it('should return the params', () => {
        request.verb = 'POST';
        expect(request.body()).toStrictEqual({'foo': 'bar'});
      });

      it('should accept nested objects', () => {
        request.verb = 'POST';
        request.params = { foo: { bar: 'baz' }};
        expect(request.body()).toStrictEqual({'foo': { 'bar' : 'baz'}});
      });

      it('should accept empty params', () => {
        request.verb = 'POST';
        request.params = {};
        expect(request.body()).toStrictEqual({});
      });

      it('should accept null params', () => {
        request.verb = 'POST';
        request.params = null;
        expect(request.body()).toBe(null);
      });

      it('should accept undefined params', () => {
        request.verb = 'POST';
        request.params = undefined;
        expect(request.body()).toBe(undefined);
      });
    });

    describe('.options', () => {
      it('should combine the options object for making an API call', () => {
        expect(request.options()).toEqual({
          method: verb,
          host: 'test.api.amadeus.com',
          port: 443,
          path: '/foo/bar?foo=bar',
          protocol: 'https:',
          headers: {
            Accept: 'application/json, application/vnd.amadeus+json',
            Authorization: 'Bearer token',
            'User-Agent': 'amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5',
            'Content-Type': 'application/vnd.amadeus+json'
          }
        });
      });
    });

    describe('.addAuthorizationHeader', () => {
      it('should add the authorization header if the token is present', () => {
        request.bearerToken = '123456789';
        request.headers = {};
        request.addAuthorizationHeader();
        expect(request.headers['Authorization']).toBe('Bearer 123456789');
      });

      it('skip if the token is not present', () => {
        request.bearerToken = undefined;
        request.headers = {};
        request.addAuthorizationHeader();
        expect(request.headers['Authorization']).toBeUndefined();
      });
    });

    describe('.addContentTypeHeader', () => {
      it('should add the x-www-form-urlencoded header if the token is not present', () => {
        request.verb = 'POST';
        request.headers = {};
        request.bearerToken = undefined;
        request.addContentTypeHeader();
        expect(request.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
      });

      it('skip if the verb is not POST', () => {
        request.verb = 'GET';
        request.headers = {};
        request.addContentTypeHeader();
        expect(request.headers['Content-Type']).toBe('application/vnd.amadeus+json');
      });
    });
  });
});
