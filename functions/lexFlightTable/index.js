'use strict';

module.exports.handler = (event, context, callback) => {
  console.log('Received request: ' + JSON.stringify(event, null, 2));
  let slots = event.currentIntent.slots;
  console.log('Received flight table request with data: ' + JSON.stringify(slots, null, 2));

  const response = {
    "dialogAction": {
      "type": "Close",
      "fulfillmentState": "Fulfilled",
      "message": {
        "contentType": "PlainText",
        "content": `Here will be the timetable`,
      }
    }
  };

  callback(null, response);
};
