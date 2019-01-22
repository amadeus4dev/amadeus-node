# Changelog
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
