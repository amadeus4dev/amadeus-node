# Amadeus Node SDK

[![Module Version](https://badge.fury.io/js/amadeus.svg)](https://badge.fury.io/js/amadeus)
[![Build Status](http://img.shields.io/travis/twilio/twilio-ruby.svg)][travis]
[![Contact Support](https://img.shields.io/badge/contact-support-blue.svg)][support]

Amadeus provides a set of APIs for the travel industry. Flights, Hotels, Locations and more.

For more details see the [Node documentation](https://developer.amadeus.com/docs/node) on [Amadeus.com](https://developer.amadeus.com).

## Installation

This module has been tested using Node 6 and higher, though it should work with Node 4 as well. You can install install it using Yarn or NPM.

```sh
npm install amadeus --save
```

__Next__: [Get Started with the Node SDK.](https://developer.amadeus.com/docs/node/get_started/initialize)

## Getting Started

To send make your first API call you will need to [register for an Amadeus Developer Account](https://developer.amadeus.com/register) and [set up your first application](https://dashboard.developer.amadeus.com/applications).

```js
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: '[YOUR_CLIENT_ID]',
  clientSecret: '[YOUR_CLIENT_SECRET]'
});

amadeus.referenceData.urls.checkinLinks.get({
  airline: '1X'
}).then(function(response){
  console.log(response.data[0].href);
  //=> https://www.onex.com/manage/check-in
}).catch(function(responseError){
  console.log(responseError.code);
  //=> AuthenticationError
});
```

## Initialization

The client can be initialized directly.

```js
// Initialize using parameters
var amadeus = new Amadeus({
  clientId: '...',
  clientSecret: '...'
});
```

Alternatively it can be initialized without any parameters if the environment variables `AMADEUS_CLIENT_ID` and `AMADEUS_CLIENT_SECRET` are present.

```js
var amadeus = amadeus = new Amadeus();
```

Your credentials can be found on the [Amadeus dashboard](https://dashboard.developer.amadeus.com/client_ids). [Sign up](https://developer.amadeus.com/register) for an account today.

By default the environment for the SDK is the `test` environment. To switch to a production (paid-for) environment please switch the hostname as follows:

```js
var amadeus = new Amadeus({
  hostname: 'production'
});
```

__Next__: [Learn more about our initializing the Node SDK](https://developer.amadeus.com/docs/node/get_started_initialize) in our documentation.

## Documentation

Amadeus has a large set of APIs, and our documentation is here to get you started today.

* [Get Started](https://developer.amadeus.com/docs/node/get_started) documentation
  * [Initialize the SDK](https://developer.amadeus.com/docs/node/get_started/initialize)
  * [Find an Airport](https://developer.amadeus.com/docs/node/get_started/find_an_airport)
  * [Book a Flight](https://developer.amadeus.com/docs/node/get_started/book_a_flight)
  * [Get Flight Inspiration](https://developer.amadeus.com/docs/node/get_started/get_flight_inspiration)

Alternatively, head over to our [Reference](https://developer.amadeus.com/docs/node/reference) documentation for in-depth information about every SDK method, it's arguments and return types.

Additionally, this SDK has extensive documentation of itself available on [GitHub](https://workbetta.github.io/amadeus-node/).

## Making API calls

This library conveniently maps every API path to a similar path.

For example, `GET /v2/reference-data/urls/checkin-links?airline=1X` would be:

```js
amadeus.referenceData.urls.checkinLinks.get({ airline: '1X' });
```

Similarly, to select a resource by ID, you can pass in the ID to the path.

For example,  `GET /v1/shopping/hotel/123/hotel-offers` would be:

```js
amadeus.shopping.hotels(123).hotelOffers.get(...);
```

You can make any arbitrary API call as well directly with the `.client.get` method:

```js
amadeus.client.get('/v2/reference-data/urls/checkin-links', { airline: '1X' });
```

## Promises

Every API call returns a `Promise` that either resolves or rejects. Every
resolved API call returns a `Response` object containing a `body` attribute
with the raw response. If the API call contained a JSON response it will parse
the JSON into the `.result` attribute. If this data also contains a `data` key,
it will make that available as the `.data` attribute.

For a failed API call it returns a `ResponseError`
containing the (parsed or unparsed) response, the request, and an error code.

```js
amadeus.referenceData.urls.checkinLinks.get({
  airline: '1X'
}).then(function(response){
  console.log(response.body);   //=> The raw body
  console.log(response.result); //=> The fully parsed result
  console.log(response.data);   //=> The data attribute taken from the result
}).catch(function(error){
  console.log(error.response); //=> The response object with (un)parsed data
  console.log(error.response.request); //=> The details of the request made
  console.log(error.code); //=> A unique error code to identify the type of error
});
```

## Pagination

If an API endpoint supports pagination, the other pages are available under the
`.next`, `.previous`, `.last` and `.first` methods.

```js
amadeus.referenceData.locations.get({
  keyword: 'LON',
  subType: 'AIRPORT,CITY'
}).then(function(response){
  return response.next();
}).then(function(nextReponse){
  // etc
});
```

If a page is not available, the response will return `null`.

## Logging & Debugging

The SDK makes it easy to add your own logger compatible with the default `console`.

```js
var amadeus = new Amadeus({
  clientId: '...',
  clientSecret: '...',
  logger: new MyConsole()
});
```

## License

This library is released under the [MIT License](LICENSE).

## Help

Our [developer support team](https://developer.amadeus.com/developers) is here to help you. You can find us on [Twitter](#), [StackOverflow](#), and [email](#).

[travis]: http://travis-ci.org/twilio/twilio-ruby
[support]: http://developer.amadeus.com/support
