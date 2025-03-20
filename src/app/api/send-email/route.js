import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse request body
    const { name, email } = await req.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App Password or SMTP Password
      },
    });

    // Email Content
    let mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: email, // Recipient's email
      subject: 'Welcome to Our Platform!',
      text: `Hello ${name},\n\nThank you for signing up! Your account has been successfully created.`,
      html: `<h2>Hello ${name},</h2>
             <p>Thank you for signing up! Your account has been successfully created.</p>
             <p>You can now log in and explore our services.</p>
             <p>Best Regards,<br/>Your Company Team</p>`,
    };

    // Send Email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    return new Response(JSON.stringify({ message: 'Registration successful. Email sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Nodemailer Error:', error);

    return new Response(JSON.stringify({ error: 'Email sending failed. Try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
