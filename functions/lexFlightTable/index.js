'use strict';

const https = require('https');

function getFlights(departureCity, arrivalCity) {
  var options = {
      host: 'metlu0ohua.execute-api.us-east-1.amazonaws.com',
      port: 443,
      method: 'GET'
  };

  var statuses = '';

  options.path = encodeURI(`/dev/fr24_by_name?departure_city=${departureCity}&arrival_city=${arrivalCity}`);

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

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let slots = event.currentIntent.slots;
  console.log('Received flight table request with data: ' + JSON.stringify(slots, null, 2));

  getFlights(event.currentIntent.slots.departure_city, event.currentIntent.slots.destination_city).then(function(flights){

    var results = [];
    let len = flights.flightRecords.length;
    for (var i = 0; i < len; i++) {
      let flight = flights.flightRecords[i].flight
      let scheduledDepartureTime = flight.time.scheduled.departure ? new Date(flight.time.scheduled.departure * 1000) : null;
      let estimatedDepartureTime = flight.time.estimated.departure ? new Date(flight.time.estimated.departure * 1000) : null;
      let result = { 'flight': flight.identification.number.default,
                     'scheduled': scheduledDepartureTime,
                     'estimated': estimatedDepartureTime};
      results.push(result);
    }

    let content = ''
    results.forEach(function (item) {
      let scheduledFormated = item.scheduled? addZero(item.scheduled.getHours()) + ':' + addZero(item.scheduled.getMinutes()) + ':' + addZero(item.scheduled.getSeconds()) : '';
      let estimatedFormated = item.estimated? 'DELAYED TO ' + addZero(item.estimated.getHours()) + ':' + addZero(item.estimated.getMinutes()) + ':' + addZero(item.estimated.getSeconds()) : 'ON TIME';
      content += item.flight + ', ' + scheduledFormated + ', ' + estimatedFormated + '\n';
    })

    console.log('Created content: ' + content)

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

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
