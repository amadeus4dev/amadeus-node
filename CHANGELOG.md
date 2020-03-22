# Changelog
## 3.3.0 - 2020-02-14
Add support for the [Flight Offers Search](https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search)

> The Flight Offers Search API is a flight search API that returns cheap flights between two airports for a given number of passengers and for a given date or date range. The API returns airline name, price and fare details, as well as additional information like baggage allowance, prices for additional baggage and departure terminal.

Add support for the A[I-Generated Photos](https://developers.amadeus.com/self-service/category/trip/api-doc/ai-generated-photos)

> The AI-Generated Photos API returns a link to download a rendered image of a landscape. The image size is 512x512 pixels and the currently available image categories are BEACH and MOUNTAIN. The link to download the AI-generated picture is valid for 24 hours. This API is an experimental project created by the Amadeus AI Lab using the Nvidia StyleGAN framework. This API is free to use and we welcome any feedback you may have about improvements.

Add support for the [Flight Delay Prediction](https://developers.amadeus.com/self-service/category/air/api-doc/flight-delay-prediction)

> The Flight Delay Prediction API returns the probability that a given flight will be delayed by four possible delay lengths: less than 30 minutes, 30-60 minutes, 60-120 minutes and over 120 minutes/cancellation. The API receives flight information and applies a machine-learning model trained with Amadeus historical data to determine the probability of flight delay.

Add support for the [Airport On-Time Performance](https://developers.amadeus.com/self-service/category/air/api-doc/airport-on-time-performance)

> The Airport On-Time Performance API returns the estimated percentage of on-time flight departures for a given airport and date. The API receives the 3-letter IATA airport code and departure date and applies a machine-learning model trained with Amadeus historical data to estimate the overall airport on-time performance. This API is in currently in beta and only returns accurate data for airports located in the U.S.

Add support for the [Trip Purpose Prediction](https://developers.amadeus.com/self-service/category/trip/api-doc/trip-purpose-prediction)

> The Trip Purpose Prediction API returns the probability of whether a round-trip flight itinerary is for business or leisure travel. The API takes flight dates, departure city and arrival city and then applies a machine-learning model trained with Amadeus historical data to determine the probability that the itinerary is for business or leisure travel. This API is useful for gaining insight and optimizing the search and shopping experience.

## 3.2.0 - 2019-10-16

Add support for the [Flight Choice Prediction API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-choice-prediction)

> The Flight Choice Prediction API allows developers to forecast traveler choices in the context of search & shopping. Exposing machine learning & AI services for travel, this API consumes the output of the Flight Low-fare Search API and returns augmented content with probabilities of choices for each flight offers.
>

Add support for the [Hotel Ratings API](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-ratings)

> The Hotel Ratings API provides hotel ratings based on automated sentiment analysis algorithm applied on the online reviews. Apart from an overall rating for a hotel also provides ratings for different categories of each (e.g.: staff, pool, internet, location). This provides a key content information for decision making during a shopping experience being able to compare how good a hotel is compared to others, sort hotels by ratings, filter by categories or recommend a hotel based on the trip context.

Fix an issue with the `POST` method that was not adding the right Content-Type.

## 3.2.0 - 2019-07-31

## Hotel Ratings API

New version of the Node SDK to support a new endpoint:

* [Hotel Ratings](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-ratings/api-reference)


## 3.1.0 - 2019-04-08

## Points of interest API

New version of the Node SDK to support a new endpoint:

* [Points of Interest](https://developers.amadeus.com/self-service/category/210/api-doc/55/api-docs-and-example/10014)

## 3.0.0 - 2019-01-22

## Hotel Search v2 has been deployed (Hotel Search v1 is now deprecated)

### General
* Remove the support for Hotel Search v1
* URLs for all three endpoints have been simplified for ease-of-use and consistency
Find Hotels
### Find Hotels - 1st endpoint
* The parameter `hotels` has been renamed to `hotelIds`
### View Hotel Rooms - 2nd endpoint
* Update from `amadeus.shopping.hotel('IALONCHO').hotelOffers.get()` to `amadeus.shopping.hotelOffersByHotel.get({hotelId : 'IALONCHO'})`
* Now get all images in ‘View Hotels Rooms’ endpoint using the view parameter as `FULL_ALL_IMAGES`
### View Room Details - 3rd endpoint
* Updated from `amadeus.shopping.hotel('IALONCHO').offer('XXX').get()` to `amadeus.shopping.hotelOffer('XXX').get()`
* Image category added under Media in the response
* Hotel distance added in the response
* Response now refers to the common HotelOffer object model

## 2.0.0 - 2018-10-12

[Flight Most Searched Destinations](https://developers.amadeus.com/self-service/category/203/api-doc/6): Redesign of the API - Split the previous endpoint in 2 endpoints:
* 1st endpoint to find the most searched destinations
* 2nd endpoint to have more data about a dedicated origin & destination

[Flight Most Booked Destinations](https://developers.amadeus.com/self-service/category/203/api-doc/27):
* Rename origin to originCityCode

[Flight Most Traveled Destinations](https://developers.amadeus.com/self-service/category/203/api-doc/7):
* Rename origin in originCityCode

[Flight Check-in Links](https://developers.amadeus.com/self-service/category/203/api-doc/8):
* Rename airline to airlineCode

[Airport & City Search](https://developers.amadeus.com/self-service/category/203/api-doc/10):
* Remove parameter onlyMajor

[Airport Nearest Relevant](https://developers.amadeus.com/self-service/category/203/api-doc/9):
* Add radius as parameter

[Airline Code Lookup](https://developers.amadeus.com/self-service/category/203/api-doc/26):
* Regroup parameters _IATACode_ and _ICAOCode_ under the same name _airlineCodes_

## 1.1.0 - 2018-08-01

Release 1.1.0.

- Support of 3 new endpoints

## 1.0.1 - 2018-04-19

Remove Beta tag

## 1.0.0 - 2018-04-19

Release 1.0.0

## 1.0.0-beta7 - 2018-04-19

Fix most traveled destination API

## 1.0.0-beta6 - 2018-04-06

Remove node shrinkwrap

## 1.0.0-beta5 - 2018-04-06

Set default log level to silent

## 1.0.0-beta4 - 2018-04-03

Updates hostname for production server

## 1.0.0-beta3 - 2018-03-28

Add support for Amadeus's specific `Accept` request header.

## 1.0.0-beta2 - 2018-03-28

Update singular endpoints to use singular names.

For example:

```sh
GET /v1/shopping/hotels/SMPARCOL/hotel-offers
```

becomes

```js
amadeus.shopping.hotel('SMPARCOL').hotelOffers.get()
```

## 1.0.0-beta1 - 2018-03-27

* First Beta release with support for all the initial API endpoints

## 1.0.0 - 2017-12-01

* Initial release
