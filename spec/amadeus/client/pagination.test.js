import Pagination from '../../../src/amadeus/client/pagination';

let pagination;
let client;

describe('Pagination', () => {
  it('should exports an Pagination class', () => {
    expect(Pagination).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      client = {};
      pagination = new Pagination(client);
    });

    describe('.page', () => {
      it('should make a call for the right page if it exists', () => {
        let response = {
          request: {
            verb: 'GET',
            path: '/foo/bar'
          },
          result: {
            meta: {
              links: {
                next: 'https://example.com?page=2'
              }
            }
          }
        };

        client.request = jest.fn();
        pagination.page('next', response);
        expect(client.request).toHaveBeenCalledWith('GET', '/foo/bar', { page: { offset: '2' } });
      });

      it('should resolve to null if no pagination headers were found', () => {
        let response = {
          request: {},
          result: {}
        };

        client.call = jest.fn();
        expect(pagination.page('next', response)).resolves.toBeNull();
      });
    });
  });
});
