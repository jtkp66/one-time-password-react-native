const twilio = require('twilio');

const accountSid = 'ACf91eeb2a859f2d11813d198e6f9d01a8';
const authToken = 'a4f1da4d76644221eafb90cd381e7f2c';

module.exports = new twilio.Twilio(accountSid, authToken);
