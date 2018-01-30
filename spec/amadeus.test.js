import Amadeus from '../src/amadeus';

let amadeus;

describe('Amadeus', () => {
  test('exports an Amadeus object', () => {
    expect(Amadeus).not.toBe(null);
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus();
    });

    test('exports an Amadeus object', () => {
      expect(amadeus).toBeInstanceOf(Amadeus);
    });
  });
});
