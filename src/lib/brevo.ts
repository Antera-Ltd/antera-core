export async function sendWelcomeEmail(email: string, name?: string) {
  const apiKey = process.env.BREVO_API_KEY || '';

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      sender: { name: "ANTERA", email: "hello@antera.ai" },
      to: [{ email: email, name: name || email }],
      subject: "Welcome to ANTERA Network",
      htmlContent: `
        <html>
          <body style="font-family: sans-serif; color: #000; line-height: 1.6;">
            <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
              <h1 style="color: #FA520F; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">ANTERA INTELLIGENCE</h1>
            </div>
            <div style="padding: 40px; border: 2px solid #000; border-top: none;">
              <h2 style="text-transform: uppercase; font-weight: 900; margin-top: 0;">Node Registered Successfully</h2>
              <p>Hello ${name || email},</p>
              <p>You have been successfully added to the ANTERA intelligence network. You will now receive technical briefings, product alerts, and strategic updates directly from our engineering team.</p>
              <p>Our mission is to build the future of digital infrastructure in Tanzania and beyond. We are glad to have you with us.</p>
              <div style="margin-top: 30px;">
                <a href="https://antera.ai" style="background-color: #FA520F; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 14px; border: 2px solid #000;">Visit Headquarters</a>
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;">
              <p style="font-size: 12px; color: #666; font-family: monospace; text-transform: uppercase;">
                Verification complete. Welcome to the core.
              </p>
            </div>
          </body>
        </html>
      `
    })
  });

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch (e) {
      error = await response.text();
    }
    console.error("Brevo API Error:", error);
    return { success: false, error };
  }

  const data = await response.json();
  return { success: true, data };
}

export async function sendBroadcastEmail(subject: string, content: string, subscribers: { email: string; name?: string }[]) {
  const apiKey = process.env.BREVO_API_KEY || '';

  // Brevo API allows sending to multiple recipients
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      sender: { name: "ANTERA", email: "hello@antera.ai" },
      to: [{ email: "hello@antera.ai", name: "ANTERA Network" }],
      bcc: subscribers.map(s => ({ email: s.email, name: s.name || s.email })),
      subject: subject,
      htmlContent: `
        <html>
          <body style="font-family: sans-serif; color: #000; line-height: 1.6;">
            <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
              <h1 style="color: #FA520F; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">ANTERA INTELLIGENCE</h1>
            </div>
            <div style="padding: 40px; border: 2px solid #000; border-top: none;">
              <div style="font-size: 16px; margin-bottom: 20px;">
                ${content.replace(/\n/g, '<br>')}
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;">
              <p style="font-size: 12px; color: #666; font-family: monospace; text-transform: uppercase;">
                You are receiving this as a verified node in the ANTERA network.
              </p>
            </div>
          </body>
        </html>
      `
    })
  });

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch (e) {
      error = await response.text();
    }
    console.error("Brevo Broadcast Error:", error);
    return { success: false, error };
  }

  return { success: true };
}
