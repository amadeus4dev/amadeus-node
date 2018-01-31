import Client from '../../src/amadeus/client';

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

    test('should thrown an error', () => {
      expect(() => { new Client(); }).toThrow();
    });
  });
});
