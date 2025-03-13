import sgMail from '@sendgrid/mail';

// Set API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Export a named function for the POST request
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

    // Email Content
    const msg = {
      to: email, // Recipient's email
      from: process.env.SENDGRID_FROM_EMAIL, // Must be a verified sender in SendGrid
      subject: 'Welcome to Our Platform!',
      text: `Hello ${name},\n\nThank you for signing up! Your account has been successfully created.`,
      html: `<h2>Hello ${name},</h2>
             <p>Thank you for signing up! Your account has been successfully created.</p>
             <p>You can now log in and explore our services.</p>
             <p>Best Regards,<br/>Your Company Team</p>`,
    };

    // Send Email
    const response = await sgMail.send(msg);
    console.log('SendGrid Response:', response);

    return new Response(JSON.stringify({ message: 'Registration successful. Email sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('SendGrid Error:', error.response ? error.response.body : error);

    return new Response(JSON.stringify({ error: 'Email sending failed. Try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
