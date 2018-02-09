import Amadeus from '../../src/amadeus';

let amadeus;

describe('Namespaces', () => {
  it('should exports an Client object', () => {
    expect(Amadeus).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus({
        clientId: '123',
        clientSecret: '234'
      });
    });

    it('should define all expected paths', () => {
      expect(amadeus.reference_data).toBeDefined();
      expect(amadeus.reference_data.urls).toBeDefined();
      expect(amadeus.reference_data.urls.checkin_links).toBeDefined();
      expect(amadeus.reference_data.locations).toBeDefined();
      expect(amadeus.reference_data.locations.airports).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(amadeus.reference_data.urls.checkin_links.get).toBeDefined();
      expect(amadeus.reference_data.locations.get).toBeDefined();
      expect(amadeus.reference_data.locations.airports.get).toBeDefined();
    });

    it('.amadeus.reference_data.urls.checkin_links.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.reference_data.urls.checkin_links.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    it('.amadeus.reference_data.urls.checkin_links.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.reference_data.locations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    it('.amadeus.reference_data.urls.checkin_links.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.reference_data.locations.airports.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });
  });
});
