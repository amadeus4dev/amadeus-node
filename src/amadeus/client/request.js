import EventEmitter from 'events';
import Promise      from 'bluebird';
import queryString  from 'qs';

import ResponseHandler from './handlers/response_handler';
import ErrorHandler    from './handlers/error_handler';

import library      from '../../../package.json';

class Request {
  constructor(client, verb, path, params, bearerToken) {
    this.client = client;
    this.verb = verb;
    this.path = path;
    this.params = params;
    this.bearerToken = bearerToken;
    this.emitter = new EventEmitter();
  }

  call() {
    this.request();
    return this.promise();
  }

  // PRIVATE

  request() {
    let request = this.client.http.request(this.options());
    request.on('response', new ResponseHandler(this, this.emitter));
    request.on('error',    new ErrorHandler(this, this.emitter));
    request.write(this.body());
    request.end();
  }

  promise() {
    return new Promise((resolve, reject) => {
      this.emitter.on('resolve', response => resolve(response));
      this.emitter.on('reject', error => reject(error));
    });
  }

  userAgent() {
    let userAgent = `amadeus-node/${library.version} node/${process.version}`;
    if (this.client.customAppId) {
      userAgent = `${userAgent} ${this.client.customAppId}/${this.client.customAppVersion}`;
    }
    return userAgent;
  }

  queryPath() {
    if (this.verb === 'POST') { return this.path; }
    else { return `${this.path}?${queryString.stringify(this.params)}`; }
  }

  body() {
    if (this.verb === 'GET') { return ''; }
    else { return queryString.stringify(this.params); }
  }

  options() {
    let options = {
      'host' : this.client.host,
      'port' : 443,
      'path' : this.queryPath(),
      'method' : this.verb,
      'headers' : {
        'User-Agent' : this.userAgent(),
        'Accept' : 'application/json'
      }
    };
    
    if (this.bearerToken) {
      options['headers']['Authorization'] = `Bearer ${this.bearerToken}`;
    }

    if (this.verb == 'POST') {
      options['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return options;
  }
}

export default Request;
