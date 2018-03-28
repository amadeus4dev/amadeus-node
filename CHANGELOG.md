# Changelog

## 1.0.0.beta2 - 2018-03-28

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
