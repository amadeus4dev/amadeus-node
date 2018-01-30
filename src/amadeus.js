import Client from './amadeus/client';

class Amadeus {
  constructor(options = {}) {
    this._client = new Client(options);
  }
}

export default Amadeus;
