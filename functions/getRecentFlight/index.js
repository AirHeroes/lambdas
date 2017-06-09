'use strict';

var https = require('https');

const TOKEN = process.env.TOKEN;

function fetchFlightsFromFR24(flight_number) {
    var options = {
        host: 'api.flightradar24.com',
        port: 443,
        method: 'GET'
    };

    var statuses = '';

    options.path = `/common/v1/flight/list.json?query=${flight_number}&fetchBy=flight&page=1&limit=100&token=${TOKEN}`;

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

function getFlightRecords(flight_number) {
  return fetchFlightsFromFR24(flight_number).then(function(statuses) {
    return statuses.result.response.data;
  });
}

function getFlightRecordsSortedByDeparture(flight_number){
  return getFlightRecords(flight_number).then(function(flightRecords){
    return flightRecords.sort(function(firstFlightRecord, secondFlightRecord){
      return firstFlightRecord.time.scheduled.departure - secondFlightRecord.time.scheduled.departure;
    });
  });
}

function getMostRecentFlightRecords(flight_number){
  return getFlightRecordsSortedByDeparture(flight_number).then(function(flightRecords){
    let unixTimeNow = Math.floor(Date.now() / 1000);
    let nextFlightRecord = flightRecords.find(function(flightRecord){
      return flightRecord.time.scheduled.departure >= unixTimeNow;
    });
    flightRecords.reverse();
    let previousFlightRecord = flightRecords.find(function(flightRecord){
      return flightRecord.time.scheduled.departure < unixTimeNow;
    });

    return [ previousFlightRecord, nextFlightRecord ];
  });
}


module.exports.handler = (event, context, callback) => {
    console.log("Starting with: " + JSON.stringify(event));
    if (typeof event === 'string' || event instanceof String) {
        event = JSON.parse(event);
    }
    var flight_number = event.pathParameters.flight_number;
    console.log('Downloading flight data for ' + flight_number);

    getMostRecentFlightRecords(flight_number).then(function(recentFlightRecords) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          flightRecords: recentFlightRecords,
          input: event,
        }),
      };

      callback(null, response);
    });
};
