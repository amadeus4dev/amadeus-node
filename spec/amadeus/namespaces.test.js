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
      expect(amadeus.referenceData).toBeDefined();
      expect(amadeus.referenceData.urls).toBeDefined();
      expect(amadeus.referenceData.urls.checkinLinks).toBeDefined();
      expect(amadeus.referenceData.locations).toBeDefined();
      expect(amadeus.referenceData.locations.airports).toBeDefined();

      expect(amadeus.travel).toBeDefined();
      expect(amadeus.travel.analytics).toBeDefined();
      expect(amadeus.travel.analytics.airTraffics).toBeDefined();
      expect(amadeus.travel.analytics.fareSearches).toBeDefined();

      expect(amadeus.shopping).toBeDefined();
      expect(amadeus.shopping.flightDates).toBeDefined();
      expect(amadeus.shopping.flightDestinations).toBeDefined();
      expect(amadeus.shopping.flightOffers).toBeDefined();

      expect(amadeus.shopping.hotelOffers).toBeDefined();
      expect(amadeus.shopping.hotels).toBeDefined();
      expect(amadeus.shopping.hotels(123).offers).toBeDefined();
      expect(amadeus.shopping.hotels(123).hotelOffers).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(amadeus.referenceData.urls.checkinLinks.get).toBeDefined();
      expect(amadeus.referenceData.locations.get).toBeDefined();
      expect(amadeus.referenceData.locations.airports.get).toBeDefined();

      expect(amadeus.travel.analytics.airTraffics.get).toBeDefined();
      expect(amadeus.travel.analytics.fareSearches.get).toBeDefined();

      expect(amadeus.shopping.flightDates.get).toBeDefined();
      expect(amadeus.shopping.flightDestinations.get).toBeDefined();
      expect(amadeus.shopping.flightOffers.get).toBeDefined();

      expect(amadeus.shopping.hotelOffers.get).toBeDefined();
      expect(amadeus.shopping.hotels(123).hotelOffers.get).toBeDefined();
      expect(amadeus.shopping.hotels(123).offers(234).get).toBeDefined();
    });

    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.urls.checkinLinks.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.airports.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });

    it('.amadeus.travel.analytics.airTraffics.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffics.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffics', {});
    });

    it('.amadeus.travel.analytics.fareSearches.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.fareSearches.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/fare-searches', {});
    });

    it('.amadeus.shopping.flightDates.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDates.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-dates', {});
    });

    it('.amadeus.shopping.flightDestinations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDestinations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-destinations', {});
    });

    it('.amadeus.shopping.flightOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers', {});
    });

    it('.amadeus.shopping.hotelOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/hotel-offers', {});
    });

    it('.amadeus.shopping.hotels(123).hotelOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotels(123).hotelOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/hotel/123/hotel-offers', {});
    });

    it('.amadeus.shopping.hotels(123).offers(234).get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotels(123).offers(234).get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/hotel/123/offers/234', {});
    });
  });
});
