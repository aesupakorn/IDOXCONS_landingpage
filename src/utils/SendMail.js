const nodeMailer = require("nodemailer");

const html = `
ท่านโก้เทพSC
`;
async function sendMailSMTP() {
  const transporter = nodeMailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 587,
    secure: false,
    // requireTLS: true,
    auth: {
      user: "AKIAZQRNRQL2ZMHAE64W",
      pass: "BATVOZA0mGQdI0s7zIitFpUIDloFDAvHGoB9F1dWYBm8",
    },
    connectionTimeout: 10 * 1000,
  });

  const info = await transporter.sendMail({
    from: "iDOXCONS <admin@idoxcons.com>",
    to: "teerapan.j@imapasia.com",
    subject: "Testing",
    html: html,
  });
  console.log("Message send:" + info.messageId);
}
sendMailSMTP().catch((err) => console.log(err));
