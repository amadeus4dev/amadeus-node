import Listener          from '../../../src/amadeus/client/listener';
import Response          from '../../../src/amadeus/client/response';
import { ResponseError } from '../../../src/amadeus/client/errors';
import EventEmitter      from 'events';

let handler;
let request;
let emitter;
let client;

describe('Listener', () => {
  it('should exports the module', () => {
    expect(Listener).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      emitter = new EventEmitter();
      request = 'request';
      client  = {
        warn: () => { return false; },
        debug: () => { return false; }
      };
      handler = new Listener(request, emitter, client);
    });

    it('should initialize the params', () => {
      expect(handler.request).toBe(request);
      expect(handler.emitter).toBe(emitter);
    });

    describe('.onResponse', () => {
      it('should create a response object and listed to http events', () => {
        let http_response = { on: jest.fn() };
        handler.onResponse(http_response);
        expect(http_response.on).toHaveBeenCalledTimes(4);
        expect(http_response.on).toHaveBeenCalledWith('data', expect.any(Function));
        expect(http_response.on).toHaveBeenCalledWith('end', expect.any(Function));
        expect(http_response.on).toHaveBeenCalledWith('close', expect.any(Function));
        expect(http_response.on).toHaveBeenCalledWith('error', expect.any(Function));
      });
    });

    describe('.onError', () => {
      it('should create and trigger onNetworkError', () => {
        let http_response = {};
        handler.onNetworkError = jest.fn(() => { return () => {}; });
        handler.onError(http_response);
        expect(handler.onNetworkError).toHaveBeenCalledWith(expect.any(Response));
      });
    });

    describe('.onEnd', () => {
      it('should parse the response and trigger success if it parsed', () => {
        handler.onSuccess = jest.fn();
        let response = new Response({}, {});
        response.parse = jest.fn();
        response.success = jest.fn(() => { return true; });

        handler.onEnd(response)();
        expect(handler.onSuccess).toHaveBeenCalledWith(response);
        expect(response.parse).toHaveBeenCalled();

      });

      it('should parse the response and trigger fail if it did not parse', () => {
        handler.onFail = jest.fn();
        let response = new Response({}, {});
        response.parse = jest.fn();
        response.success = jest.fn(() => { return false; });

        handler.onEnd(response)();
        expect(handler.onFail).toHaveBeenCalledWith(response);
        expect(response.parse).toHaveBeenCalled();
      });
    });

    describe('.onSuccess', () => {
      it('should emit the response', () => {
        handler.emitter.emit = jest.fn();
        let response = 'response';
        handler.onSuccess(response);
        expect(emitter.emit).toHaveBeenCalledWith('resolve', response);
      });
    });

    describe('.onFail', () => {
      it('should handle a ServerError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 500 }, {});
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ServerError'}));
      });

      it('should handle a AuthenticationError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 401 }, {});
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'AuthenticationError'}));
      });

      it('should handle a NotFoundError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 404 }, {});
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'NotFoundError'}));
      });

      it('should handle a ClientError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 403 }, {});
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ClientError'}));
      });

      it('should handle a ParserError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 200 }, {});
        response.addChunk('{ a: "b"');
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ParserError'}));
      });

      it('should handle a UnknownError', () => {
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 200 }, {});
        response.parsed = true;
        handler.onFail(response);
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'UnknownError'}));
      });
    });

    describe('.onNetworkError', () => {
      it('should try to parse and then return a NetworkError', () => {
        let response = new Response({}, {});
        response.parse = jest.fn();
        handler.emitter.emit = jest.fn();

        handler.onNetworkError(response)();
        expect(response.parse).toHaveBeenCalled();
        expect(handler.emitter.emit).toHaveBeenCalledWith('reject', expect.any(ResponseError));
      });
    });
  });
});
