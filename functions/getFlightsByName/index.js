'use strict';

var https = require('https');
const airports = require('./airports')

const TOKEN = process.env.TOKEN;

function fetchFlightsFromFR24(departureAirportCode) {
    var options = {
        host: 'api.flightradar24.com',
        port: 443,
        method: 'GET'
    };

    var statuses = '';
    var timestamp = Math.round((new Date().getTime()/1000));

    options.path = `/common/v1/airport.json?code=${departureAirportCode}&plugin[]=&plugin-setting[schedule][mode]=&plugin-setting[schedule][timestamp]=${timestamp}&page=1&limit=50&token=${TOKEN}`;

    console.log("Getting data from: " + options.path)

    return new Promise(function(resolve, reject) {
        https.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                statuses += chunk;
            });

            res.on('end', function() {
                resolve(JSON.parse(statuses));
            });
        }).end();
    });
}

function getDepartureFlightRecords(departureAirportCode) {
  return fetchFlightsFromFR24(departureAirportCode).then(function(statuses) {
    return statuses.result.response.airport.pluginData.schedule.departures.data || [];
  });
}

function filterOutPastFlightRecords(flightRecords){
  let unixTimeNow = Math.floor(Date.now() / 1000);
  console.log("Filtering past records.")
  return flightRecords.filter(function(flightRecord){
    return flightRecord.flight.time.scheduled.departure > unixTimeNow;
  });
}

function sortByDeparture(flightRecords){
  return flightRecords.sort(function(firstFlightRecord, secondFlightRecord){
    return firstFlightRecord.flight.time.scheduled.departure - secondFlightRecord.flight.time.scheduled.departure;
  });
}

function filterOutOtherDestination(flightRecords, arrivalCity){
  console.log("Filtering other destination records.")
  return flightRecords.filter(function(flightRecord){
    console.log(JSON.stringify(flightRecord.flight.airport.destination.position.region));
    return flightRecord.flight.airport.destination.position.region.city == arrivalCity;
  });
}

function getMostRecentFlightRecords(departureAirportCode, arrivalCity){
  return getDepartureFlightRecords(departureAirportCode).then(function(flightRecords) {
    console.log("Got flight records: " + JSON.stringify(flightRecords, null, 2));
    return sortByDeparture(filterOutOtherDestination(filterOutPastFlightRecords(flightRecords), arrivalCity));
  });
}

function getAirportByCity(cityName){
  return airports.AIRPORTS.find(function(airport){
    return airport.city == cityName;
  });
}

module.exports.handler = (event, context, callback) => {
    console.log("Starting with: " + JSON.stringify(event, null, 2));
    if (typeof event === 'string' || event instanceof String) {
        event = JSON.parse(event);
    }

    var departureCity = event.queryStringParameters.departure_city;
    var arrivalCity = event.queryStringParameters.arrival_city;
    console.log(`Downloading flight data from ${departureCity} to ${arrivalCity}`);
    let departureAirport = getAirportByCity(departureCity);
    console.log(`Matched Airport: ${JSON.stringify(departureAirport)} (ICAO: ${departureAirport.icao}) to city ${departureCity}`);

    getMostRecentFlightRecords(departureAirport.icao, arrivalCity).then(function(recentFlightRecords) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          flightRecords: recentFlightRecords,
          input: event,
        }),
      };

      console.log('Response for ' + departureCity + ' is: ' + JSON.stringify(recentFlightRecords, null, 2));
      callback(null, response);
    });
};
