import * as express from 'express';
import * as nodeMailer from 'nodemailer';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 8081;
const app = express();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  res.writeHead(301, { Location: 'index.html' });
  res.end();
});

app.listen(port, () => {
  console.log('Server started at http://localhost:%s', port);
});
