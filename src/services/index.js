const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

var transport = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
});

const message = {
  from: 'elonmusk@tesla.com', // Sender address
  to: ' to@test.com', // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  text: 'Hii the most fun you can in a car. Get your Tesla today!', // Plain text body
};

async function run() {
  await transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('INFO', info);
    }
  });

  // console.log(mailSent);
}

run();
