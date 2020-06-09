import * as express from 'express';
import * as nodeMailer from 'nodemailer';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 8081;
const app = express();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/confirm-booking', function(req, res) {
  const { name, email, subject, text, textHtml } = req.body;
  const transporter = nodeMailer.createTransport({
    host: 'mailslurper',
    port: 1025,
    secure: false,
  });
  const mailOptions = {
    to: `"${name}" ${email || 'info@gmail.com'}`,
    from: '"Docs \'r\' Us" noreply@docsrus.com',
    replyTo: '"Docs \'r\' Us Help" help@docsrus.com',
    subject,
    text,
    html: textHtml,
  };
  console.info('sending email with: ', { mailOptions });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.info('Message %s sent: %s', info.messageId, info.response);
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'success' }));
});

app.listen(port, () => {
  console.log('Server started at http://localhost:%s', port);
});
