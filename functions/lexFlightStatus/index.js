'use strict';

const mocks = require('./mocks')
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
    if (flightNumber == mocks.MOCKED_DELAYED_FLIGHT_NUMBER) {
      resolve(mocks.MOCKED_DELAYED_FLIGHT);
    } else {
      https.request(options, function(res) {
          res.setEncoding('utf8');
          res.on('data', function(chunk) {
              statuses += chunk;
          });

          res.on('end', function() {
              resolve(JSON.parse(statuses));
          });
      }).end();
    }
  });
}

function getTimeDiff(a, b){
  console.log(`Calculating diff between ${b} and ${a}`)
  let milisecDiff = b.getTime() - a.getTime();
  let dateDiff = new Date( milisecDiff );

  let timeString = ''

  let days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));

  if (days > 0) {
    timeString = timeString.concat(`${days} Days`)
  }

  if (dateDiff.getHours() > 0) {
    timeString = timeString.concat(` ${dateDiff.getHours()} Hours`)
  }

  if (dateDiff.getMinutes() > 0) {
    timeString = timeString.concat(` ${dateDiff.getMinutes()} Minutes`)
  }

  if (dateDiff.getSeconds() > 0) {
    timeString = timeString.concat(` ${dateDiff.getSeconds()} Seconds`)
  }

  console.log("DateDiff: " + dateDiff);
  return timeString.trim();
}

function isClaimable(scheduledDepartureTime, realDepartureTime) {
  let milisecDiff = realDepartureTime.getTime() - scheduledDepartureTime.getTime();
  let dateDiff = new Date( milisecDiff );

  return dateDiff.getHours() >= 3;
}

function getDepartureTimeData(flight) {
  let scheduledDepartureTime = flight.time.scheduled.departure ? new Date(flight.time.scheduled.departure * 1000) : null;
  let actualDepartureTime = flight.time.real.departure ? new Date(flight.time.real.departure * 1000) : null;
  let estimatedDepartureTime = flight.time.estimated.departure ? new Date(flight.time.estimated.departure * 1000) : null;

  let mostRecentDepartureTime = actualDepartureTime || estimatedDepartureTime || scheduledDepartureTime;
  let departureTimeString = `${mostRecentDepartureTime.toISOString().slice(11, 16)} UTC`;

  let statusText = ' It will depart on time.';

  if (scheduledDepartureTime && estimatedDepartureTime && ((estimatedDepartureTime - scheduledDepartureTime) !== 0)) {
    statusText = ` It is delayed by ${getTimeDiff(scheduledDepartureTime, estimatedDepartureTime)}.`;
  }

  let departInString = getTimeDiff(new Date(), mostRecentDepartureTime);
  let canClaim = isClaimable(scheduledDepartureTime, mostRecentDepartureTime);

  return {
    'statusText': statusText,
    'departInString': departInString,
    'departureTimeString': departureTimeString,
    'isClaimable': canClaim,
  }
}

function createResponseContent(flight){
  let flightNumber = flight.identification.number.default;
  let departureAirport = flight.airport.origin.name;
  let arrivalAirport = flight.airport.destination.name;

  let departureTimeData = getDepartureTimeData(flight);

  let responseContent = `Your flight (${flightNumber}) from ${departureAirport} to ${arrivalAirport} will depart in ${departureTimeData.departInString} (on ${departureTimeData.departureTimeString}).${departureTimeData.statusText}`

  if (departureTimeData.isClaimable) {
    responseContent = responseContent.concat(' Your claim is delayed by more than 3 hours. If you want to claim start the conversation by saying "Claim".')
  }

  return responseContent;
}

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let flightNumber = event.currentIntent.slots.flight_number;
  console.log('Flight number from request: ' + flightNumber);

  getRecentFlights(flightNumber).then(function(recentFlightRecords){
    console.log('Response from getRecentFlights: ' + JSON.stringify(recentFlightRecords, null, 2));
    let lastFlight = recentFlightRecords['flightRecords'][recentFlightRecords['flightRecords'].length - 1];
    console.log('Last flight: ' + JSON.stringify(lastFlight, null, 2));
    let content = lastFlight ? createResponseContent(lastFlight) : `Flight with number: ${flightNumber} not found.`;

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
