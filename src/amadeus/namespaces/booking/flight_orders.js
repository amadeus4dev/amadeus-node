/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrders;
 * ```
 *
 * @param {Client} client
 */
class FlightOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the selected flight-offer and create a flight-order
   *
   * @param {Object} params
   * @param {string} params.body list of element needed to book a flight Order
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the flight-offer suggested by flightOffersSearch and then create a flight-order
   *
   * ```js
   * amadeus.booking.flightOrders.post(JSON.stringify({
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
  }));
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/booking/flight-orders', params);
  }
}

export default FlightOrders;