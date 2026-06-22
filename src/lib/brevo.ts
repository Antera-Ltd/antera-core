import { supabase } from './supabase';

function getLogoUrl() {
  return 'https://www.antera.co.tz/antera-logo.jpeg';
}

const DEFAULT_SENDER = { name: "ANTERA", email: "sheldoncodesdaily@gmail.com" };

export async function sendWelcomeEmail(email: string, name?: string) {
  const logoUrl = getLogoUrl();
  const welcomeHtml = `<html>...</html>`; // Simplified for now

  const { data, error } = await supabase.functions.invoke('send-email', {
    body: {
      sender: DEFAULT_SENDER,
      to: [{ email: email, name: name || email }],
      subject: "Welcome to Antera Group Software",
      htmlContent: welcomeHtml
    }
  });

  if (error) return { success: false, error };
  return { success: true, data };
}

export async function sendBroadcastEmail(subject: string, content: string, subscribers: { email: string; name?: string }[]) {
  const logoUrl = getLogoUrl();
  const broadcastHtml = `<html><body>${content}</body></html>`;

  const { data, error } = await supabase.functions.invoke('send-email', {
    body: {
      sender: DEFAULT_SENDER,
      to: [DEFAULT_SENDER],
      bcc: subscribers.map(s => ({ email: s.email, name: s.name || s.email })),
      subject: subject,
      htmlContent: broadcastHtml
    }
  });

  if (error) return { success: false, error };
  return { success: true, data };
}
