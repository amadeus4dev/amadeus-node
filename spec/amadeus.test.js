import Amadeus from '../src/amadeus';
import Client from '../src/amadeus/client';

let amadeus;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

describe('Amadeus', () => {
  test('exports an Amadeus object', () => {
    expect(Amadeus).not.toBe(null);
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus(credentials);
    });

    test('exports an Amadeus object', () => {
      expect(amadeus).toBeInstanceOf(Amadeus);
    });

    test('throw an error', () => {
      expect(() => { new Amadeus(); }).toThrowError();
    });
    test('exports an Client object', () => {
      expect(amadeus.client).toBeInstanceOf(Client);
    });
  });
});
