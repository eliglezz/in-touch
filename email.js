let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
process.env.AWS_ACCESS_KEY_ID = "....";
process.env.AWS_SECRET_ACCESS_KEY = "....";
const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
});
let transporter = nodemailer.createTransport({
  SES: { ses, aws },
}); 

let transporter = nodemailer.createTransport(options[, defaults])
nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "username",
      pass: "password",
    },
  });
  

var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };
  
  var message = {
    ...,
    headers: {
        'My-Custom-Header': 'header value'
    },
    date: new Date('2000-01-01 00:00:00')
};

var htmlstream = fs.createReadStream("content.html");
transport.sendMail({ html: htmlstream }, function(err) {
  if (err) {
    // check if htmlstream is still open and close it to clean up
  }
});

let message = {
    from: 'Nodemailer <example@nodemailer.com>',
    to: 'Nodemailer <example@nodemailer.com>',
    subject: 'AMP4EMAIL message',
    text: 'For clients with plaintext support only',
    html: '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`
}
