'use strict';

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let slots = event.currentIntent.slots;
  console.log('Received claim enquiry with data: ' + JSON.stringify(slots, null, 2));

  const response = {
    "dialogAction": {
      "type": "Close",
      "fulfillmentState": "Fulfilled",
      "message": {
        "contentType": "PlainText",
        "content": `Your claim for ${slots.first_name} ${slots.last_name} for flight ${slots.flight_number} was submitted successfully.`,
      }
    }
  };

  callback(null, response);
};
