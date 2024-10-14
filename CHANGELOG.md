# Changelog
## 11.0.0 - 2024-10-14
Decommissioned Trip Parser API 

JSON body is now stringified before sent to the POST API calls. Thanks to [Mohammed Alsammarrai](https://github.com/Darseen) for his contribution!

## 10.1.0 - 2024-06-24
Add support for the [Hotel Booking API v2](https://developers.amadeus.com/self-service/category/hotels/api-doc/hotel-booking)

## 10.0.0 - 2024-04-17
Decommissioned Safe Place API

Removed [bluebird](https://github.com/petkaantonov/bluebird/) from dependencies, Big thanks to [Mohammed Alsammarrai](https://github.com/Darseen) for his contribution!

Minor code improvement, Big thanks to [Mohammed Alsammarrai](https://github.com/Darseen) for his contribution!

## 9.1.0 - 2023-12-11
Add support for additional parameters with [Flight Offers Price API](https://developers.amadeus.com/self-service/category/flights/api-doc/flight-offers-price)

## 9.0.0 - 2023-09-06
Decommissioned Travel Restrictions API v2

## 8.1.0 - 2023-06-23
Add support for the [Transfer Search API](https://developers.amadeus.com/self-service/category/cars-and-transfers/api-doc/transfer-search)

Add support for the [Transfer Booking API](https://developers.amadeus.com/self-service/category/cars-and-transfers/api-doc/transfer-booking)

Add support for the [Transfer Management API](https://developers.amadeus.com/self-service/category/cars-and-transfers/api-doc/transfer-management)

## 8.0.0 - 2023-01-30
Decommissioned Travel Restrictions API v1 

Decommissioned Hotel Search API v2

Fixed [#174](https://github.com/amadeus4dev/amadeus-node/issues/174) SDK reference documentation is back

Fixed [#183](https://github.com/amadeus4dev/amadeus-node/issues/183) Update comparisons in condition statements

Minor updates in How to Release in contribution guide

## 7.1.0 - 2022-11-08
Add support for [Travel Restrictions API v2](https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/travel-restrictions/api-reference)

Fix pagination issue 

Add [SonarCloud](https://sonarcloud.io/) support

## 7.0.0 - 2022-07-19
Decommission Trip Parser API v2 

Update versions of dependencies
- @babel/cli from ^7.4.4 to ^7.18.6
- @babel/core from ^7.4.5 to ^7.18.6
- @babel/preset-env from ^7.4.5 to ^7.18.6
- babel-plugin-add-module-exports from ^0.2.1 to ^1.0.4
- documentation from ^11.0.0 to ^13.2.5
- bluebird from ^3.5.1 to ^3.7.2
- qs from ^6.9.1 to ^6.11.0

Add support for the [City Search API](https://developers.amadeus.com/self-service/category/trip/api-doc/city-search/api-reference)

Add support for the [Hotel Name Autocomplete API](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-name-autocomplete/api-reference)

Add support for the [Airline Routes API](https://developers.amadeus.com/self-service/category/air/api-doc/airline-routes/api-reference)

Add support for the [Trip Parser API v3](https://developers.amadeus.com/self-service/category/trip/api-doc/trip-parser/api-reference)

## 6.0.0 - 2022-05-20
Decommission AI-Generated Photos API

Fix the initialization of client without parameters

Add X-HTTP-Method-Override in HTTP headers for 6 endpoints

Add support for the [Airport Routes API](https://developers.amadeus.com/self-service/category/air/api-doc/airport-routes/api-reference)

Add support for the [Travel Restrictions API](https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/travel-restrictions/api-reference)

Add support for the [Hotel Search API V3](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-search/api-reference)

Add support for the [Hotel List API](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-list/api-reference)

## 5.7.1 - 2021-11-30
Migrate to Github Actions

## 5.7.0 - 2021-05-19
Add support for the [Flight Availabilities Search API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-availabilities-search/api-reference)

Add support for the [Branded Fares Upsell API](https://developers.amadeus.com/self-service/category/air/api-doc/branded-fares-upsell/api-reference)

## 5.6.1 - 2021-02-01
Fix unwanted exception on `DELETE` method of Flight Order Management API

## 5.6.0 - 2020-12-03
Update Node versions in Travis configuration to [Node LTS versions](https://nodejs.org/en/about/releases/)

## 5.5.0 - 2020-11-11
Add support for the [Flight Price Analysis API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-price-analysis/api-reference)

## 5.4.0 - 2020-10-01
Add support for the [Tours and Activities API](https://developers.amadeus.com/self-service/category/destination-content/api-doc/tours-and-activities/api-reference)

## 5.3.0 - 2020-09-15
Add support for the [On-Demand Flight Status API](https://developers.amadeus.com/self-service/category/air/api-doc/on-demand-flight-status/api-reference)

## 5.2.0 - 2020-07-30
Adding [Travel Recommendations API](https://developers.amadeus.com/self-service/category/air/api-doc/travel-recommendations/api-reference)

## 5.1.0 - 2020-06-11
Adding [Safe Place API](https://developers.amadeus.com/self-service/category/destination-content/api-doc/safe-place-api/api-reference)

## 5.0.0 - 2020-05-21
Decommission Flight Low-Fare Search API

Decommission Flight Choice Prediction v1

Adding [Flight Choice Prediction v2](https://developers.amadeus.com/self-service/category/air/api-doc/flight-choice-prediction/api-reference)
> The input of Flight Choice Prediction v2 is the result of Flight Offers Search API - in v1 the input was the result of Flight Low-Fare Search

Adding support for [POI API](https://developers.amadeus.com/self-service/category/destination-content/api-doc/points-of-interest/api-reference)'s retrieve endpoint

## 4.0.0 - 2020-03-25
Add support for the [Flight Offers Price API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-price)

> The Flight Offers Price API confirms the flight price (including taxes and fees) and availability for a given flight returned by the Flight Offers Search API. The API also returns pricing for ancillary products (additional bags, extra legroom, etc.) and the payment information details needed for booking.

Add support for the [Flight Create Orders API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-create-orders)

> The Flight Create Orders API is a flight booking API that lets you perform the final booking for a desired flight and ancillary products (additional bags, extra legroom, etc.). The API returns a unique ID for the flight order and reservation details. This API is used to perform the final booking on confirmed fares returned by the Flight Offers Price API.

Add support for the [Flight Order Management API](https://developers.amadeus.com/self-service/category/air/api-doc/flight-order-management)

> The Flight Order Management API lets you consult bookings created through the Flight Create Orders API. Using the booking ID generated by Flight Create Orders, Flight Order Management returns the last-updated version of the booking record with any post-booking modifications including but not limited to ticket information, form of payment or other remarks.

Add support for the [Hotel Booking API](https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-booking)

> The Amadeus Hotel Booking API lets you complete bookings at over 150,000 hotels and accommodations around the world. To complete bookings, you must first use the Amadeus Hotel Search API to search for hotel deals, select the desired offer and confirm the final price and availability. You can then use the Hotel Booking API to complete the reservation by providing an offer id, guest information and payment information.

Add support for the [SeatMap Display API](https://developers.amadeus.com/self-service/category/air/api-doc/seatmap-display)

> SeatMap Display API allows you to get information to display airplane cabin plan from a Flight Offer in order for the traveler to be able to choose his seat during the flight booking flow thanks to POST method. In addition GET method allows you to display airplane cabin plan from an existing Flight Order.

Remove support for Most Searched Destinations

Add support for the [Trip Parser API](https://developers.amadeus.com/self-service/category/trip/api-doc/trip-parser)
> The Trip Parser API parses information from various booking confirmation emails and returns a standardized, structured travel itinerary. The API can extract relevant information from a wide variety of flight, hotel, rental car and rail providersâ€™ confirmation emails by first identifying the provider and then using a database of provider-specific email structures to determine which information to extract. The API then returns a link to the JSON structure of the itinerary.

## 3.3.0 - 2020-02-14
Add support for the [Flight Offers Search](https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search)

> The Flight Offers Search API is a flight search API that returns cheap flights between two airports for a given number of passengers and for a given date or date range. The API returns airline name, price and fare details, as well as additional information like baggage allowance, prices for additional baggage and departure terminal.

Add support for the AI-Generated Photos

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
