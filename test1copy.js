var Amadeus = require('./lib/amadeus');

var amadeus = new Amadeus({
  clientId: '8nO6oq4ywwDlqZG3btuBy7bkSoAjZGdn',
  clientSecret: 'BJyF3fvNG9frmkAE',
  logLevel: 'debug'
});

body = {
    "originDestinations": [
        {
            "id": "1",
            "originLocationCode": "BOS",
            "destinationLocationCode": "MAD",
            "departureDateTime": {
                "date": "{{departureDate}}",
                "time": "21:15:00"
            }
        }
    ],
    "travelers": [
        {
            "id": "1",
            "travelerType": "ADULT"
        },
        {
            "id": "2",
            "travelerType": "CHILD"
        }
    ],
    "sources": [
        "GDS"
    ]
}

amadeus.shopping.availability.flightAvailabilities.post(body).then(function (response) {
  console.log(response);
}).catch(function (response) {
  console.error(response);
});