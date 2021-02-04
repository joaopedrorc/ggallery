require('dotenv').config();

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  EMAIL_ADDRESS,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  // ACCESS_TOKEN,
} = process.env;
const oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET, // Client Secret
  OAUTH_PLAYGROUND // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: EMAIL_ADDRESS,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken,
  },
});
module.exports = transporter;
