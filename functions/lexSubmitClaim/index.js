'use strict';

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let slots = event.currentIntent.slots;
  console.log('Received claim enquiry with data: ' + JSON.stringify(slots, null, 2));

  let flightNumber = event.currentIntent.slots.flight_number || event.currentIntent.slots.flight_no;

  if (event.currentIntent.slots.airline_code && event.currentIntent.slots.airline_flight_number) {
    flightNumber = '' + event.currentIntent.slots.airline_code + event.currentIntent.slots.airline_flight_number;
  }

  if (flightNumber) {
    flightNumber = flightNumber.replace(/\./g, '').replace(/ /g, '');
  }

  const response = {
    "dialogAction": {
      "type": "Close",
      "fulfillmentState": "Fulfilled",
      "message": {
        "contentType": "PlainText",
        "content": `Your claim for ${slots.first_name} ${slots.last_name} for flight ${flightNumber} was submitted successfully.`,
      }
    }
  };

  callback(null, response);
};
