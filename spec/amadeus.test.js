import Amadeus from '../src/amadeus';
import Client  from '../src/amadeus/client';

let amadeus;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

describe('Amadeus', () => {
  it('should export an Amadeus object', () => {
    expect(Amadeus).not.toBe(null);
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus(credentials);
    });

    it('should initialize an Amadeus instance', () => {
      expect(amadeus).toBeInstanceOf(Amadeus);
    });

    it('should throw an error', () => {
      expect(() => { new Amadeus(); }).toThrowError();
    });

    it('should have an client property', () => {
      expect(amadeus.client).toBeInstanceOf(Client);
    });
  });
});
