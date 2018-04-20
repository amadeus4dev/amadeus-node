# Changelog

## 1.0.1 - 2018-04-19

Release 1.0.1

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
