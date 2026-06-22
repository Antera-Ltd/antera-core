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
      subject: "Welcome to ANTERA Blog",
      htmlContent: `<html><body><h1>Welcome ${name || email}!</h1><p>Thank you for subscribing to our newsletter.</p></body></html>`
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
