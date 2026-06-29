import { supabase } from './supabase';


function getLogoUrl() {
  return 'https://www.antera.co.tz/antera-logo.jpeg';
}

// Sends a welcome email to newly registered subscribers
export async function sendWelcomeEmail(email: string, name?: string) {
  const logoUrl = getLogoUrl();

  // HTML email template with company branding and logo
  const welcomeHtml = `
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #000; line-height: 1.6; margin: 0; padding: 0; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
              <tr>
                <td align="center">
                  <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <!-- Header with Logo -->
                    <tr>
                      <td style="background-color: #000000; padding: 30px 20px; text-align: center;">
                        <img src="${logoUrl}" alt="Antera Group Software" width="180" style="display: block; max-width: 180px; height: auto; margin: 0 auto 15px;" />
                        <h1 style="color: #FA520F; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 3px; font-weight: 700;">ANTERA GROUP</h1>
                        <p style="color: #ffffff; margin: 5px 0 0; font-size: 14px; letter-spacing: 1px; opacity: 0.8;">SOFTWARE</p>
                      </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                      <td style="padding: 40px 30px; background-color: #ffffff;">
                        <h2 style="text-transform: uppercase; font-weight: 900; margin-top: 0; color: #000; font-size: 20px; border-bottom: 3px solid #FA520F; padding-bottom: 10px;">Registered Successfully</h2>
                        <p style="font-size: 16px; margin: 20px 0;">Hello ${name || email},</p>
                        <p style="font-size: 16px; margin: 20px 0; color: #333;">You have been successfully added to the Antera newsletter. You will now receive technical articles, product alerts, and strategic updates directly from our engineering team.</p>
                        <p style="font-size: 16px; margin: 20px 0; color: #333;">Our mission is to build the future of digital infrastructure in Tanzania and beyond. We are glad to have you with us.</p>
                        <div style="margin: 30px 0; text-align: center;">
                          <a href="https://www.antera.co.tz" style="background-color: #FA520F; color: #ffffff; padding: 14px 32px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 14px; border-radius: 4px; display: inline-block; border: none;">Visit Headquarters</a>
                        </div>
                        <hr style="border: none; border-top: 2px solid #f0f0f0; margin: 40px 0;">
                        <p style="font-size: 12px; color: #999; font-family: 'Courier New', monospace; text-transform: uppercase; letter-spacing: 1px; margin: 0;">
                          ✓ Verification complete.
                        </p>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8f8f8; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="font-size: 12px; color: #666; margin: 0;">
                          &copy; ${new Date().getFullYear()} Antera Group Software. All rights reserved.
                        </p>
                        <p style="font-size: 12px; color: #999; margin: 5px 0 0;">
                          <a href="https://www.antera.co.tz" style="color: #FA520F; text-decoration: none;">antera.co.tz</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
  `;

  // Invoke the Supabase Edge Function to send the email
  const { data, error } = await supabase.functions.invoke('send-email', {
    body: {
      sender: { name: "ANTERA GROUP SOFTWARE", email: "sheldoncodesdaily@gmail.com" },
      to: [{ email: email, name: name || email }],
      subject: "Welcome to Antera Group Software",
      htmlContent: welcomeHtml
    }
  });

  // Log and return the result
  if (error) {
    console.error("Welcome Email Error:", error);
    return { success: false, error };
  }

  return { success: true, data };
}

// Sends a broadcast email to all subscribers
export async function sendBroadcastEmail(subject: string, content: string, subscribers: { email: string; name?: string }[]) {
  const logoUrl = getLogoUrl();

  // HTML email template for broadcast messages with company branding
  const broadcastHtml = `
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #000; line-height: 1.6; margin: 0; padding: 0; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
              <tr>
                <td align="center">
                  <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <!-- Header with Logo -->
                    <tr>
                      <td style="background-color: #000000; padding: 30px 20px; text-align: center;">
                        <img src="${logoUrl}" alt="Antera Group Software" width="180" style="display: block; max-width: 180px; height: auto; margin: 0 auto 15px;" />
                        <h1 style="color: #FA520F; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 3px; font-weight: 700;">ANTERA GROUP SOFTWARE</h1>
                      </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                      <td style="padding: 40px 30px; background-color: #ffffff;">
                        <div style="font-size: 16px; margin-bottom: 20px; color: #333; line-height: 1.8;">
                          ${content.replace(/\n/g, '<br>')}
                        </div>
                        <hr style="border: none; border-top: 2px solid #f0f0f0; margin: 40px 0;">
                        <p style="font-size: 12px; color: #999; font-family: 'Courier New', monospace; text-transform: uppercase; letter-spacing: 1px; margin: 0;">
                          🔒 You are receiving this as a verified subscriber.
                        </p>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8f8f8; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                        <p style="font-size: 12px; color: #666; margin: 0;">
                          &copy; ${new Date().getFullYear()} Antera Group Software. All rights reserved.
                        </p>
                        <p style="font-size: 12px; color: #999; margin: 5px 0 0;">
                          <a href="https://www.antera.co.tz" style="color: #FA520F; text-decoration: none;">antera.co.tz</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
  `;

  // Invoke the Supabase Edge Function to send the broadcast
  const { data, error } = await supabase.functions.invoke('send-email', {
    body: {
      sender: { name: "ANTERA", email: "sheldoncodesdaily@gmail.com" },
      to: [{ email: "sheldoncodesdaily@gmail.com", name: "Antera Group CEO" }],
      bcc: subscribers.map(s => ({ email: s.email, name: s.name || s.email })),
      subject: subject,
      htmlContent: broadcastHtml
    }
  });

  // Log and return the result
  if (error) {
    console.error("Broadcast Email Error:", error);
    return { success: false, error };
  }

  return { success: true, data };
}
