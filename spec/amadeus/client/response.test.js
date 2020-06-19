import Response from '../../../src/amadeus/client/response';

let response;
let http_response = {
  statusCode: 200,
  headers: {
    'content-type' : 'application/json'
  }
};
let request = 'request';

describe('Response', () => {
  it('should exports the module', () => {
    expect(Response).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      response = new Response(http_response, request);
    });

    it('should initialize the params', () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers).toEqual(http_response.headers);
      expect(response.request).toEqual(request);
      expect(response.body).toEqual('');
      expect(response.result).toEqual(null);
      expect(response.data).toEqual(null);
      expect(response.parsed).toBeFalsy();
    });

    describe('.addChunk', () => {
      it('should append chunks to the body', () => {
        response.addChunk('test');
        expect(response.body).toEqual('test');
        response.addChunk('1234');
        expect(response.body).toEqual('test1234');
      });
    });

    describe('.parse', () => {
      it('should parse the body if json', () => {
        response.addChunk('{ "data" : "b"}');
        response.parse();
        expect(response.parsed).toBeTruthy();
        expect(response.result).toEqual({ data: 'b' });
        expect(response.data).toEqual('b');
      });

      it('should not parse if not json', () => {
        response.contentType = 'plain/text';
        response.parse();
        expect(response.parsed).toBeFalsy();
        expect(response.result).toBeNull();
        expect(response.data).toBeNull();
      });

      it('should handle badly formed json', () => {
        response.addChunk('{ "a" : ');
        response.parse();
        expect(response.parsed).toBeFalsy();
        expect(response.result).toBeNull();
        expect(response.data).toBeNull();
      });
    });

    describe('.success', () => {
      it('be true if the document was parsed and with a 2XX status code', () => {
        response.statusCode = 201;
        response.parsed = true;
        expect(response.success()).toBeTruthy();
      });

      it('be false if the document was parsed and with a non-2XX status code', () => {
        response.statusCode = 301;
        response.parsed = true;
        expect(response.success()).toBeFalsy();
      });

      it('be false if the document was not parsed and with a 2XX status code', () => {
        response.statusCode = 201;
        response.parsed = false;
        expect(response.success()).toBeFalsy();
      });
    });
  });
});
