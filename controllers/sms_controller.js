const express = require('express');


module.exports.sms = function(req, res){
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());

  return res.redirect('back');
};