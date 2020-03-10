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
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET'
});

amadeus.shopping.flightOffersSearch
  .get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2020-08-01',
    adults: '2'
  })
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(responseError) {
    console.log(responseError.code);
  });
```

## Initialization

The client can be initialized directly.

```js
// Initialize using parameters
var amadeus = new Amadeus({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET'
});
```

Alternatively it can be initialized without any parameters if the environment
variables `AMADEUS_CLIENT_ID` and `AMADEUS_CLIENT_SECRET` are present.

```js
var amadeus = new Amadeus();
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

- [Get Started](https://amadeus4dev.github.io/amadeus-node/) documentation
  - [Initialize the SDK](https://amadeus4dev.github.io/amadeus-node/)
  - [Find an Airport](https://amadeus4dev.github.io/amadeus-node/#airports)
  - [Find a Flight](https://amadeus4dev.github.io/amadeus-node/#flightoffers)
  - [Get Flight Inspiration](https://amadeus4dev.github.io/amadeus-node/#flightoffers)

## Making API calls

This library conveniently maps every API path to a similar path.

For example, `GET /v2/reference-data/urls/checkin-links?airlineCode=BA` would be:

```js
amadeus.referenceData.urls.checkinLinks.get({ airlineCode: 'BA' });
```

Similarly, to select a resource by ID, you can pass in the ID to the **singular** path.

For example, `GET /v1/shopping/hotelOffer/123/` would be:

```js
amadeus.shopping.hotelOffer('123').get(...);
```

You can make any arbitrary API call as well directly with the `.client.get` method:

```js
amadeus.client.get('/v2/reference-data/urls/checkin-links', {
  airlineCode: 'BA'
});
```

Or with a `POST` using `.client.post` method:

```js
amadeus.client.post(
  '/v1/shopping/flight-offers/pricing',
  JSON.stringify({ data })
);
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
amadeus.referenceData.urls.checkinLinks
  .get({
    airlineCode: 'BA'
  })
  .then(function(response) {
    console.log(response.body); //=> The raw body
    console.log(response.result); //=> The fully parsed result
    console.log(response.data); //=> The data attribute taken from the result
  })
  .catch(function(error) {
    console.log(error.response); //=> The response object with (un)parsed data
    console.log(error.response.request); //=> The details of the request made
    console.log(error.code); //=> A unique error code to identify the type of error
  });
```

## Pagination

If an API endpoint supports pagination, the other pages are available under the
`.next`, `.previous`, `.last` and `.first` methods.

```js
amadeus.referenceData.locations
  .get({
    keyword: 'LON',
    subType: 'AIRPORT,CITY'
  })
  .then(function(response) {
    console.log(response.data); // first page
    return amadeus.next(response);
  })
  .then(function(nextResponse) {
    console.log(nextResponse.data); // second page
  });
```

If a page is not available, the response will resolve to `null`.

## Logging & Debugging

The SDK makes it easy to add your own logger compatible with the default `console`.

```js
var amadeus = new Amadeus({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET',
  logger: new MyConsole()
});
```

Additionally, to enable more verbose logging, you can set the appropriate level
on your own logger, though the easiest way would be to enable debugging via a
parameter on initialization, or using the `AMADEUS_LOG_LEVEL` environment
variable. The available options are `silent` (default), `warn`, and `debug`.

```js
var amadeus = new Amadeus({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET',
  logLevel: 'debug'
});
```

## List of supported endpoints

```js
// Flight Inspiration Search
amadeus.shopping.flightDestinations.get({
  origin : 'MAD'
})

// Flight Cheapest Date Search
amadeus.shopping.flightDates.get({
  origin : 'MAD',
  destination : 'MUC'
})

// Flight Offers Search
amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2020-08-01',
    adults: '2'
})

// Flight Choice Prediction
amadeus.shopping.flightOffers.get({
       origin: 'MAD',
       destination: 'NYC',
       departureDate: '2020-08-01'
}).then(function(response){
    return amadeus.shopping.flightOffers.prediction.post(
      JSON.stringify(response.result)
    );
}).then(function(response){
    console.log(response.data);
}).catch(function(responseError){
    console.log(responseError);
});

// Flight Checkin Links
amadeus.referenceData.urls.checkinLinks.get({
  airlineCode : 'BA'
})

// Airline Code Lookup
amadeus.referenceData.airlines.get({
  airlineCodes : 'U2'
})

// Airports and City Search (autocomplete)
// Find all the cities and airports starting by 'LON'
amadeus.referenceData.locations.get({
  keyword : 'LON',
  subType : Amadeus.location.any
})

// Get a specific city or airport based on its id
amadeus.referenceData.location('ALHR').get()

// Airport Nearest Relevant Airport (for London)
amadeus.referenceData.locations.airports.get({
  longitude : 0.1278,
  latitude  : 51.5074
})

// Flight Most Searched Destinations
// Which were the most searched flight destinations from Madrid in August 2017?
amadeus.travel.analytics.airTraffic.searched.get({
    originCityCode : 'MAD',
    searchPeriod : '2017-08',
    marketCountryCode : 'ES'
})
// How many people in Spain searched for a trip from Madrid to New-York in September 2017?
amadeus.travel.analytics.airTraffic.searchedByDestination.get({
    originCityCode : 'MAD',
    destinationCityCode : 'NYC',
    searchPeriod : '2017-08',
    marketCountryCode : 'ES'
})

// Flight Most Booked Destinations
amadeus.travel.analytics.airTraffic.booked.get({
    originCityCode : 'MAD',
    period : '2017-08'
})

// Flight Most Traveled Destinations
amadeus.travel.analytics.airTraffic.traveled.get({
    originCityCode : 'MAD',
    period : '2017-01'
})

// Flight Busiest Traveling Period
amadeus.travel.analytics.airTraffic.busiestPeriod.get({
    cityCode: 'MAD',
    period: '2017',
    direction: Amadeus.direction.arriving
})

// Hotel Search API
// Get list of hotels by city code
amadeus.shopping.hotelOffers.get({
  cityCode : 'MAD'
})
// Get list of offers for a specific hotel
amadeus.shopping.hotelOffersByHotel.get({
  hotelId : 'XKPARC12'
})
// Confirm the availability of a specific offer id
amadeus.shopping.hotelOffer('XXX').get()

// Points of Interest
// What are the popular places in Barcelona (based a geo location and a radius)
amadeus.referenceData.locations.pointsOfInterest.get({
    latitude : 41.397158,
    longitude : 2.160873
})

// What are the popular places in Barcelona? (based on a square)
amadeus.referenceData.locations.pointsOfInterest.bySquare.get({
    north: 41.397158,
    west: 2.160873,
    south: 41.394582,
    east: 2.177181
})

// Hotel Ratings
// Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
amadeus.eReputation.hotelSentiments.get({
    hotelIds: 'XKPARC12'
})

// Trip Purpose Prediction
// Forecast traveler purpose, Business or Leisure, together with the probability in the context of search & shopping.
amadeus.travel.predictions.tripPurpose.get({
    originLocationCode: 'NYC',
    destinationLocationCode: 'MAD',
    departureDate: '2020-08-01',
    returnDate: '2020-08-12'
})

// AI-Generated Photos
// Get a link to download a rendered image of a landscape.
amadeus.media.files.generatedPhotos.get({
    category: 'BEACH'
})

// Flight Delay Prediction
// This machine learning API is based on a prediction model that takes the input of the user - time, carrier, airport and aircraft information;
// and predict the segment where the flight is likely to lay.
amadeus.travel.predictions.flightDelay.get({
    originLocationCode: 'BRU',
    destinationLocationCode: 'FRA',
    departureDate: '2020-01-14',
    departureTime: '11:05:00',
    arrivalDate: '2020-01-14',
    arrivalTime: '12:10:00',
    aircraftCode: '32A',
    carrierCode: 'LH',
    flightNumber: '1009',
    duration: 'PT1H05M'
})

// Airport On-time Performance
// Get the percentage of on-time flight departures from JFK
amadeus.airport.predictions.onTime.get({
    airportCode: 'JFK',
    date: '2020-08-01'
})

// Book a flight / create flight order
// The Flight Create Orders is an API to book flights and ancillary services proposed by the airlines
// like additional checked bags or seats with  extra-legroom. It returns flight order unique ID and details.
amadeus.booking.flightCreateOrder.post({
  {
    "data": {
      "type": "flight-order",
      "flightOffers": [
        {
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "paymentCardRequired": false,
          "lastTicketingDate": "2020-03-01",
          "itineraries": [
            {
              "segments": [
                {
                  "departure": {
                    "iataCode": "GIG",
                    "terminal": "2",
                    "at": "2020-03-01T21:05:00"
                  },
                  "arrival": {
                    "iataCode": "CDG",
                    "terminal": "2E",
                    "at": "2020-03-02T12:20:00"
                  },
                  "carrierCode": "KL",
                  "number": "2410",
                  "aircraft": {
                    "code": "772"
                  },
                  "operating": {
                    "carrierCode": "AF"
                  },
                  "duration": "PT11H15M",
                  "id": "40",
                  "numberOfStops": 0
                },
                {
                  "departure": {
                    "iataCode": "CDG",
                    "terminal": "2F",
                    "at": "2020-03-02T14:30:00"
                  },
                  "arrival": {
                    "iataCode": "AMS",
                    "at": "2020-03-02T15:45:00"
                  },
                  "carrierCode": "KL",
                  "number": "1234",
                  "aircraft": {
                    "code": "73H"
                  },
                  "operating": {
                    "carrierCode": "KL"
                  },
                  "duration": "PT1H15M",
                  "id": "41",
                  "numberOfStops": 0
                },
                {
                  "departure": {
                    "iataCode": "AMS",
                    "at": "2020-03-02T17:05:00"
                  },
                  "arrival": {
                    "iataCode": "MAD",
                    "terminal": "2",
                    "at": "2020-03-02T19:35:00"
                  },
                  "carrierCode": "KL",
                  "number": "1705",
                  "aircraft": {
                    "code": "73J"
                  },
                  "operating": {
                    "carrierCode": "KL"
                  },
                  "duration": "PT2H30M",
                  "id": "42",
                  "numberOfStops": 0
                }
              ]
            },
            {
              "segments": [
                {
                  "departure": {
                    "iataCode": "MAD",
                    "terminal": "2",
                    "at": "2020-03-05T20:25:00"
                  },
                  "arrival": {
                    "iataCode": "AMS",
                    "at": "2020-03-05T23:00:00"
                  },
                  "carrierCode": "KL",
                  "number": "1706",
                  "aircraft": {
                    "code": "73J"
                  },
                  "operating": {
                    "carrierCode": "KL"
                  },
                  "duration": "PT2H35M",
                  "id": "81",
                  "numberOfStops": 0
                },
                {
                  "departure": {
                    "iataCode": "AMS",
                    "at": "2020-03-06T10:40:00"
                  },
                  "arrival": {
                    "iataCode": "GIG",
                    "terminal": "2",
                    "at": "2020-03-06T18:35:00"
                  },
                  "carrierCode": "KL",
                  "number": "705",
                  "aircraft": {
                    "code": "772"
                  },
                  "operating": {
                    "carrierCode": "KL"
                  },
                  "duration": "PT11H55M",
                  "id": "82",
                  "numberOfStops": 0
                }
              ]
            }
          ],
          "price": {
            "currency": "USD",
            "total": "8514.96",
            "base": "8314.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "TICKETING"
              },
              {
                "amount": "0.00",
                "type": "FORM_OF_PAYMENT"
              }
            ],
            "grandTotal": "8514.96",
            "billingCurrency": "USD"
          },
          "pricingOptions": {
            "fareType": [
              "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
          },
          "validatingAirlineCodes": [
            "AF"
          ],
          "travelerPricings": [
            {
              "travelerId": "1",
              "fareOption": "STANDARD",
              "travelerType": "ADULT",
              "price": {
                "currency": "USD",
                "total": "4849.48",
                "base": "4749.00",
                "taxes": [
                  {
                    "amount": "31.94",
                    "code": "BR"
                  },
                  {
                    "amount": "14.68",
                    "code": "CJ"
                  },
                  {
                    "amount": "5.28",
                    "code": "FR"
                  },
                  {
                    "amount": "17.38",
                    "code": "JD"
                  },
                  {
                    "amount": "0.69",
                    "code": "OG"
                  },
                  {
                    "amount": "3.95",
                    "code": "QV"
                  },
                  {
                    "amount": "12.12",
                    "code": "QX"
                  },
                  {
                    "amount": "14.44",
                    "code": "RN"
                  }
                ]
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "40",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "C",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "41",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "J",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "42",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "J",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "81",
                  "cabin": "ECONOMY",
                  "fareBasis": "YFFBR",
                  "brandedFare": "FULLFLEX",
                  "class": "Y",
                  "includedCheckedBags": {
                    "quantity": 1
                  }
                },
                {
                  "segmentId": "82",
                  "cabin": "ECONOMY",
                  "fareBasis": "YFFBR",
                  "brandedFare": "FULLFLEX",
                  "class": "Y",
                  "includedCheckedBags": {
                    "quantity": 1
                  }
                }
              ]
            },
            {
              "travelerId": "2",
              "fareOption": "STANDARD",
              "travelerType": "CHILD",
              "price": {
                "currency": "USD",
                "total": "3665.48",
                "base": "3565.00",
                "taxes": [
                  {
                    "amount": "31.94",
                    "code": "BR"
                  },
                  {
                    "amount": "14.68",
                    "code": "CJ"
                  },
                  {
                    "amount": "5.28",
                    "code": "FR"
                  },
                  {
                    "amount": "17.38",
                    "code": "JD"
                  },
                  {
                    "amount": "0.69",
                    "code": "OG"
                  },
                  {
                    "amount": "3.95",
                    "code": "QV"
                  },
                  {
                    "amount": "12.12",
                    "code": "QX"
                  },
                  {
                    "amount": "14.44",
                    "code": "RN"
                  }
                ]
              },
              "fareDetailsBySegment": [
                {
                  "segmentId": "40",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "C",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "41",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "J",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "42",
                  "cabin": "BUSINESS",
                  "fareBasis": "CFFBR",
                  "brandedFare": "BUSINESS",
                  "class": "J",
                  "includedCheckedBags": {
                    "quantity": 2
                  }
                },
                {
                  "segmentId": "81",
                  "cabin": "ECONOMY",
                  "fareBasis": "YFFBR",
                  "brandedFare": "FULLFLEX",
                  "class": "Y",
                  "includedCheckedBags": {
                    "quantity": 1
                  }
                },
                {
                  "segmentId": "82",
                  "cabin": "ECONOMY",
                  "fareBasis": "YFFBR",
                  "brandedFare": "FULLFLEX",
                  "class": "Y",
                  "includedCheckedBags": {
                    "quantity": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "travelers": [
        {
          "id": "1",
          "dateOfBirth": "1982-01-16",
          "name": {
            "firstName": "JORGE",
            "lastName": "GONZALES"
          },
          "gender": "MALE",
          "contact": {
            "emailAddress": "jorge.gonzales833@telefonica.es",
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "34",
                "number": "480080076"
              }
            ]
          },
          "documents": [
            {
              "documentType": "PASSPORT",
              "birthPlace": "Madrid",
              "issuanceLocation": "Madrid",
              "issuanceDate": "2015-04-14",
              "number": "00000000",
              "expiryDate": "2025-04-14",
              "issuanceCountry": "ES",
              "validityCountry": "ES",
              "nationality": "ES",
              "holder": true
            }
          ]
        },
        {
          "id": "2",
          "dateOfBirth": "2012-10-11",
          "gender": "FEMALE",
          "contact": {
            "emailAddress": "jorge.gonzales833@telefonica.es",
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "34",
                "number": "480080076"
              }
            ]
          },
          "name": {
            "firstName": "ADRIANA",
            "lastName": "GONZALES"
          }
        }
      ],
      "remarks": {
        "general": [
          {
            "subType": "GENERAL_MISCELLANEOUS",
            "text": "ONLINE BOOKING FROM INCREIBLE VIAJES"
          }
        ]
      },
      "ticketingAgreement": {
        "option": "DELAY_TO_CANCEL",
        "delay": "6D"
      },
      "contacts": [
        {
          "addresseeName": {
            "firstName": "PABLO",
            "lastName": "RODRIGUEZ"
          },
          "companyName": "INCREIBLE VIAJES",
          "purpose": "STANDARD",
          "phones": [
            {
              "deviceType": "LANDLINE",
              "countryCallingCode": "34",
              "number": "480080071"
            },
            {
              "deviceType": "MOBILE",
              "countryCallingCode": "33",
              "number": "480080072"
            }
          ],
          "emailAddress": "support@increibleviajes.es",
          "address": {
            "lines": [
              "Calle Prado, 16"
            ],
            "postalCode": "28014",
            "cityName": "Madrid",
            "countryCode": "ES"
          }
        }
      ]
    }
  }
})

// retrieve a flight booking.
// The Flight Order Management REST JSON API is an open API that allows you to manipulate a flight order previously created.
amadeus.booking.flightOrders('xyz12345').get();

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
