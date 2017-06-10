def lambda_handler(event, context):
    content = 'Available commands are: flight status, claim flight and departures'
    response = {
        'dialogAction': {
            'type': 'Close',
            'fulfillmentState': 'Fulfilled',
            'message': {
              'contentType': 'PlainText',
              'content': content,
            }
        }
    }

    return response
