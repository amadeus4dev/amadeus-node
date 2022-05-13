var Amadeus = require('./lib/amadeus');

var amadeus = new Amadeus({
    clientId: 'fvGvqmwvOeGW5u3JtiOG3lxLGgXGz2Fh',
    clientSecret: '9rVkHwGQn6mgH91l'  
});

amadeus.referenceData.locations.hotels.byHotels.get({
     hotelIds: 'ACPAR245'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
