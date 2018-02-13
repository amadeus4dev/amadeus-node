import Amadeus    from '../src/amadeus';
import Client     from '../src/amadeus/client';
import Pagination from '../src/amadeus/client/pagination';

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

    it('should have an pagination property', () => {
      expect(amadeus.pagination).toBeInstanceOf(Pagination);
    });

    it('should pass .next on to the paginator', () => {
      amadeus.pagination.page = jest.fn();
      amadeus.next({});
      expect(amadeus.pagination.page).toHaveBeenCalledWith('next', {});
    });

    it('should pass .previous on to the paginator', () => {
      amadeus.pagination.page = jest.fn();
      amadeus.previous({});
      expect(amadeus.pagination.page).toHaveBeenCalledWith('previous', {});
    });

    it('should pass .first on to the paginator', () => {
      amadeus.pagination.page = jest.fn();
      amadeus.first({});
      expect(amadeus.pagination.page).toHaveBeenCalledWith('first', {});
    });

    it('should pass .last on to the paginator', () => {
      amadeus.pagination.page = jest.fn();
      amadeus.last({});
      expect(amadeus.pagination.page).toHaveBeenCalledWith('last', {});
    });
  });
});
