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

      expect(amadeus.travel).toBeDefined();
      expect(amadeus.travel.analytics).toBeDefined();
      expect(amadeus.travel.analytics.air_traffics).toBeDefined();
      expect(amadeus.travel.analytics.fare_searches).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(amadeus.reference_data.urls.checkin_links.get).toBeDefined();
      expect(amadeus.reference_data.locations.get).toBeDefined();
      expect(amadeus.reference_data.locations.airports.get).toBeDefined();

      expect(amadeus.travel.analytics.air_traffics.get).toBeDefined();
      expect(amadeus.travel.analytics.fare_searches.get).toBeDefined();
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

    it('.amadeus.travel.analytics.air_traffics.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.air_traffics.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffics', {});
    });

    it('.amadeus.travel.analytics.fare_searches.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.fare_searches.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/fare-searches', {});
    });
  });
});
