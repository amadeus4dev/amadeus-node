# Amadeus Node SDK

[![Module Version](https://badge.fury.io/js/amadeus.svg)](npmjs)
[![Build Status](https://img.shields.io/travis/amadeus4dev/amadeus-node/master.svg)][travis]
[![Maintainability](https://api.codeclimate.com/v1/badges/5accb4b8a41e4e3fd1da/maintainability)](https://codeclimate.com/github/amadeus4dev/amadeus-node/maintainability)
[![Dependencies](.github/images/dependencies.svg)](npmjs)
[![Contact Support](https://img.shields.io/badge/contact-support-blue.svg)][support]

Amadeus provides a set of APIs for the travel industry. Flights, Hotels, Locations and more.

For more details see the [Node
documentation](https://amadeus4dev.github.io/amadeus-node/) on
[Amadeus.com](https://developers.amadeus.com).

## Installation

This module has been tested using Node 6 and higher, though it should work with
Node 4 and 5 as well. You can install install it using Yarn or NPM.

```sh
npm install amadeus --save
```

## Getting Started

To make your first API call you will need to [register for an Amadeus Developer
Account](https://developers.amadeus.com/create-account) and [set up your first
application](https://developers.amadeus.com/my-apps).

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

Alternatively it can be initialized without any parameters if the environment
variables `AMADEUS_CLIENT_ID` and `AMADEUS_CLIENT_SECRET` are present.

```js
var amadeus = amadeus = new Amadeus();
```

Your credentials can be found on the [Amadeus
dashboard](https://developers.amadeus.com/my-apps). [Sign
up](https://developers.amadeus.com/create-account) for an account today.

By default the environment for the SDK is the `test` environment. To switch to
a production (paid-for) environment please switch the hostname as follows:

```js
var amadeus = new Amadeus({
  hostname: 'production'
});
```

## Documentation

Amadeus has a large set of APIs, and our documentation is here to get you
started today. Head over to our
[Reference](https://amadeus4dev.github.io/amadeus-node/) documentation for
in-depth information about every SDK method, it's arguments and return types.


* [Get Started](https://amadeus4dev.github.io/amadeus-node/) documentation
  * [Initialize the SDK](https://amadeus4dev.github.io/amadeus-node/)
  * [Find an Airport](https://amadeus4dev.github.io/amadeus-node/#airports)
  * [Find a Flight](https://amadeus4dev.github.io/amadeus-node/#flightoffers)
  * [Get Flight Inspiration](https://amadeus4dev.github.io/amadeus-node/#flightoffers)

## Making API calls

This library conveniently maps every API path to a similar path.

For example, `GET /v2/reference-data/urls/checkin-links?airline=1X` would be:

```js
amadeus.referenceData.urls.checkinLinks.get({ airline: '1X' });
```

Similarly, to select a resource by ID, you can pass in the ID to the **singular** path.

For example,  `GET /v1/shopping/hotel/123/offers/234` would be:

```js
amadeus.shopping.hotel(123).offer(234).get(...);
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
  console.log(response.data); // first page
  return amadeus.next(response);
}).then(function(nextReponse){
  console.log(nextReponse.data); // second page
});
```

If a page is not available, the response will resolve to `null`.

## Logging & Debugging

The SDK makes it easy to add your own logger compatible with the default `console`.

```js
var amadeus = new Amadeus({
  clientId: '...',
  clientSecret: '...',
  logger: new MyConsole()
});
```

Additionally, to enable more verbose logging, you can set the appropriate level
on your own logger, though the easiest way would be to enable debugging via a
parameter on initialization, or using the `AMADEUS_LOG_LEVEL` environment
variable. The available options are `silent` (default), `warn`, and `debug`.

```js
var amadeus = new Amadeus({
  clientId: '...',
  clientSecret: '...',
  logLevel: 'debug'
});
```

## List of supported endpoints

```js
// Airpot and City Search
// Find all the cities and airportes starting by 'LON'
amadeus.referenceData.locations.get({
  keyword : 'LON',
  subType : Amadeus.location.any
})

// Get a specific city or airport based on its id
amadeus.referenceData.location('ALHR').get()

// Aiport Nearest Relevant Airport
amadeus.referenceData.locations.airports.get({
   longitude : 49.000,
   latitude  : 2.55
})

// Flight Cheapest Date Search
amadeus.shopping.flightDates.get({
   origin : 'NCE',
   destination : 'PAR',
   duration : 1
})

// Flight Checkin Links
amadeus.referenceData.urls.checkinLinks.get({
  airline : 'LH'
})

// Flight Inspiration Search
amadeus.shopping.flightDestinations.get({
  origin : 'MAD',
  maxPrice : 200
})

// Flight Low-fare Search
  amadeus.shopping.flightOffers.get({
  origin : 'MAD',
  destination : 'OPO',
  departureDate : '2017-04-20'
})

// Flight Most Searched Destinations
amadeus.travel.analytics.fareSearches.get({
    origin : 'NCE',
    souirceCountry : 'FR',
    period : '2017-08'
})

// Flight Most Traveled Destinations
amadeus.travel.analytics.airTraffic.traveled.get({
    origin : 'NCE',
    period : '2017-08'
})

// Hotel Search API

// List of Hotels by City Code
amadeus.shopping.hotelOffers.get({
  cityCode : 'PAR'
})

// Get list of offers for a specific Hotel
amadeus.shopping.hotel('SMPARCOL').hotelOffers.get()

// Confirm the availability of a specific offer for a specific Hotel
amadeus.shopping.hotel('SMPARCOL').offer('4BA070BA10485322FA2C7E78C7852E').get()
```

## Development & Contributing

Want to contribute? Read our [Contributors Guide](.github/CONTRIBUTING.md) for
guidance on installing and running this code in a development environment.

## License

This library is released under the [MIT License](LICENSE).

## Help

Our [developer support team](https://developers.amadeus.com/support) is here to
help you. You can find us on
[StackOverflow](https://stackoverflow.com/questions/tagged/amadeus) and
[email](mailto:developers@amadeus.com).

[npmjs]: https://www.npmjs.com/package/amadeus
[travis]: http://travis-ci.org/amadeus4dev/amadeus-node
[support]: http://developers.amadeus.com/support
