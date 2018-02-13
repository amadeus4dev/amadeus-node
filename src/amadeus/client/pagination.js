export class Pager {
  constructor(client, pageName) {
    this.client = client;
    this.pageName = pageName;
  }

  page(response) {
    let pageNumber = this.pageNumber(response, this.pageName);
    let params = response.request.params;

    if (pageNumber) {
      params = params || {};
      params['page'] = params['page'] || {};
      params['page']['offset'] = pageNumber;

      return this.client.call(
        response.request.verb,
        response.request.path,
        params
      );
    } else {
      return new Promise(function(resolve) {
        resolve(null);
      });
    }


  }

  pageNumber(response, pageName) {
    try {
      return response.result['meta']['links'][pageName].split('=').pop();
    } catch (TypeError) {
      return null;
    }
  }
}

export default function(client, pageName) {
  let pager = new Pager(client, pageName);
  return pager.page.bind(pager);
}
