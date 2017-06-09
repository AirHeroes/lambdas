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

function getFlightRecordsSortedByDeparture(departureAirportCode){
  return getFlightRecords(departureAirportCode).then(function(flightRecords){
    return flightRecords.sort(function(firstFlightRecord, secondFlightRecord){
      return firstFlightRecord.time.scheduled.departure - secondFlightRecord.time.scheduled.departure;
    });
  });
}

function getMostRecentFlightRecords(departureAirportCode){
  return getFlightRecordsSortedByDeparture(departureAirportCode).then(function(flightRecords){
    let unixTimeNow = Math.floor(Date.now() / 1000);
    let nextFlightRecord = flightRecords.find(function(flightRecord){
      return flightRecord.time.scheduled.departure >= unixTimeNow;
    });

    return nextFlightRecord;
  });
}

function getAirportIataByCity(cityName){
  airports.AIRPORTS.find(function(airport){
    return airport.city == cityName;
  });
}

module.exports.handler = (event, context, callback) => {
    console.log("Starting with: " + JSON.stringify(event));
    if (typeof event === 'string' || event instanceof String) {
        event = JSON.parse(event);
    }

    var departureCity = event.pathParameters.departure_city;
    var arrivalCity = event.pathParameters.arrival_city;
    console.log(`Downloading flight data from ${departureCity} to ${arrivalCity}`);
    let departureIcao = getAirportIataByCity(departureCity);
    console.log(`Matched icao: ${departureIcao} to city ${departureCity}`);

    getMostRecentFlightRecords(flight_number).then(function(recentFlightRecords) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          flightRecords: recentFlightRecords,
          input: event,
        }),
      };

      console.log('Response for ' + flight_number + ' is: ' + JSON.stringify(recentFlightRecords, null, 2));
      callback(null, response);
    });
};
