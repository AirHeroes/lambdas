'use strict';

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let slots = event.currentIntent.slots;
  console.log('Received flight status by name request with data: ' + JSON.stringify(slots, null, 2));

  const response = {
    "dialogAction": {
      "type": "Close",
      "fulfillmentState": "Fulfilled",
      "message": {
        "contentType": "PlainText",
        "content": `Here will be the flight status`,
      }
    }
  };

  callback(null, response);
};
