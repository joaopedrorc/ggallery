const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../src/config/smtp');

module.exports = (req, res) => {
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
      subject: 'Test do meu bb', // Subject line
      text: 'Finalment deu certo!!', // Plain text body
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => res.send(error));
};
