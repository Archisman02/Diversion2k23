const client = require('twilio')('ACd398ec6f0effa04142c044f51f544237', '25338206a5dd3912c31e3227dcc63506');

function sendTextMessage(){
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+15017122661',
         to: '+919073549508'
       })
      .then(message => console.log(message.sid));
}

