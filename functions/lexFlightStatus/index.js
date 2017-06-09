'use strict';

const https = require('https');

function getRecentFlights(flightNumber) {
  var options = {
      host: 'metlu0ohua.execute-api.us-east-1.amazonaws.com',
      port: 443,
      method: 'GET'
  };

  var statuses = '';

  options.path = `/dev/fr24/${flightNumber}`;

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

function createResponseContent(flight){
  let flightNumber = flight.identification.number.default;
  let departureAirport = flight.airport.origin.name;
  let arrivalAirport = flight.airport.destination.name;
  return `Your flight (${flightNumber}) from ${departureAirport} to ${arrivalAirport} is delayed 20 minutes`;
}

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let flightNumber = event.currentIntent.slots.flight_number;
  console.log('Flight number from request: ' + flightNumber);

  getRecentFlights(flightNumber).then(function(recentFlightRecords){
    console.log('Response from getRecentFlights: ' + JSON.stringify(recentFlightRecords, null, 2));
    let lastFlight = recentFlightRecords['flightRecords'][recentFlightRecords['flightRecords'].length - 1];
    console.log('Last flight: ' + JSON.stringify(lastFlight, null, 2));
    let content = createResponseContent(lastFlight);

    console.log('Created content: ' + content);

    const response = {
      "dialogAction": {
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": content,
        }
      }
    };

    callback(null, response);
  });
};
