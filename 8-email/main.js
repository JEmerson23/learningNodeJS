//módulo externo para enviar email
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  type: 'OAuth2',
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  clientId: process.env.OAUTH_CLIENTID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  refreshToken: process.env.OAUTH_REFRESH_TOKEN
 }
});

const mailOption = {
 from: "me@gmail.com",
 to: "he@gmail.com",
 subject: "nodemailer",
 text: "El psy congroo"
};

transporter.sendMail(mailOption,function(error, info){
 if(error) {
  console.log(error);
 } else {
  console.log(info);
 }
});