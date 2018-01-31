import Client from '../../src/amadeus/client';
import https from 'https';

let client;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

describe('Client', () => {
  test('exports an Client object', () => {
    expect(Client).not.toBe(null);
  });

  describe('.instance', () => {
    beforeEach(() => {
      client = new Client(credentials);
    });

    test('exports an Client object', () => {
      expect(client).toBeInstanceOf(Client);
    });

    test('should thrown an error without required credentials', () => {
      expect(() => { new Client(); }).toThrow();
    });

    test('should initialize all default values', () => {
      expect(client.clientId).toBe('123');
      expect(client.clientSecret).toBe('234');
      expect(client.logger).toBe(console);
      expect(client.host).toBe('https://test.api.amadeus.com');
      expect(client.customAppId).toBe(null);
      expect(client.customAppVersion).toBe(null);
      expect(client.http).toBe(https);
    });

    test('should allow for setting a custom logger', () => {
      let logger = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logger' : logger };
      let client = new Client(options);
      expect(client.logger).toBe(logger);
    });

    test('should allow for setting a different hostname', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'hostname' : 'production' };
      let client = new Client(options);
      expect(client.host).toBe('https://production.api.amadeus.com');
    });

    test('should allow for setting a custom App ID and Version', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'customAppId' : 'cli', 'customAppVersion' : '1.0.0' };
      let client = new Client(options);
      expect(client.customAppId).toBe('cli');
      expect(client.customAppVersion).toBe('1.0.0');
    });

    test('should allow for setting a custom http client', () => {
      let http = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'http' : http };
      let client = new Client(options);
      expect(client.http).toBe(http);
    });
  });
});
