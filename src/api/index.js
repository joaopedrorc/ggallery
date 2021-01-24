const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const SMTP_CONFIG = require('../config/smtp');

const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));

app.get('/send', (req, res) => {
  const transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
  });

  transport
    .sendMail({
      from: 'to@test.com', // Sender address
      to: ' to@test.com', // List of recipients
      replyTo: 'jpc5626@gmail.com',
      subject: 'Design Your Model S | Tesla', // Subject line
      text: 'Hii the most fun you can in a car. Get your Tesla today!', // Plain text body
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => res.send(error));
});

module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  res.send(`Hello ${name}!`);
};

app.listen(3000, () => console.log(`Running on port ${port}!`));
