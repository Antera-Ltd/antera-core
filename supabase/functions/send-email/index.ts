import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
    if (!BREVO_API_KEY) return new Response(JSON.stringify({ error: "Missing API Key" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } })

    const { to, bcc, subject, htmlContent, sender } = await req.json()

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: sender || { name: "ANTERA", email: "sheldoncodesdaily@gmail.com" },
        to: to || [],
        bcc: bcc || [],
        subject: subject,
        htmlContent: htmlContent
      })
    })

    const result = await response.json()
    return new Response(JSON.stringify(result), { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } })
  }
})
