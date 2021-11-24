const path = require('path');
const express = require('express');
const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
const transporter = require('./config');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.static(buildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.EMAIL_ADDRESS, // list of receivers
      replyTo: req.body.email,
      subject: 'Formulário de Cotação do Website', // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Client name: ${req.body.name}</li>
        <li>Phone number: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Service area: ${req.body.area}</li>
        <li>Service: ${req.body.service}</li>
        <li>Service Type: ${req.body.check}</li>
        <li>Details Message: ${req.body.message}</li>
        <li>Client images: ${req.body.files[0]}</li>
      </ul>
      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later 1',
        });
        console.warn('error during call 1', err);
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Something went wrong. Try again later 2 + ${error}`,
    });
    console.warn('error during call 2 =>', error);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
