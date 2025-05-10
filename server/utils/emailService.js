// // utils/emailService.js
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// const sendWelcomeEmail = async (email, name, password) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Welcome to RB Classes Admin Panel',
//     html: `
//       <h1>Welcome ${name}!</h1>
//       <p>Your admin account for RB Classes has been created.</p>
//       <p>Here are your login credentials:</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Password:</strong> ${password}</p>
//       <p>Please change your password after first login.</p>
//       <p>Login at: ${process.env.FRONTEND_URL}/admin</p>
//     `
//   };

//   await transporter.sendMail(mailOptions);
// };

// const sendNotificationEmail = async (subject, message) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.ADMIN_NOTIFICATION_EMAIL,
//     subject: `RB Classes Notification: ${subject}`,
//     text: message
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = {
//   sendWelcomeEmail,
//   sendNotificationEmail
// };

// utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendWelcomeEmail = async (email, name, password) => {
  const mailOptions = {
    from: `"RB Classes" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Welcome to RB Classes Admin Panel',
    html: `
      <h1>Welcome ${name}!</h1>
      <p>Your admin account for RB Classes has been created.</p>
      <p>Here are your login credentials:</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p>Please change your password after first login.</p>
      <p>Login at: ${process.env.FRONTEND_URL}/admin</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

const sendNotificationEmail = async (subject, message) => {
  const mailOptions = {
    from: `"RB Classes" <${process.env.EMAIL_FROM}>`,
    to: process.env.ADMIN_NOTIFICATION_EMAIL,
    subject: `RB Classes Notification: ${subject}`,
    text: message,
    html: `<p>${message}</p>`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendWelcomeEmail,
  sendNotificationEmail
};