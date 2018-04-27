require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const config = require("./config");

const {
  USER, 
  PASS,
  SERVER_PORT,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  ACCESS_TOKEN,
  MY_EMAIL
} = process.env;

const app = express()
app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: ACCESS_TOKEN,
    expires: 3600,
  }
});

app.post('/api/contact', (req, res) => {
  const { email, name, subject, message} = req.body;


  const mailOptions = {
    from: email,         // Sender of the email
    to: MY_EMAIL,  // Recipient of the email
    subject: `${email} - ${subject}`,              // Subject of the email
    text: `${name} - ${message}`,                // Message of the email

  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({"success": false, message: "There was an error sending the email!"});
    } else {
      //console.log('Email sent successfully' + info.response);
      res.json({"success": true, message: "Email sent successfully!"});
    }
  });

});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

const PORT = SERVER_PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
