import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const SYSTEM_PROMPT = `You are Antera AI, the advanced neural interface for ANTERA (Advanced Neural Technologies & Engineering Research Agency). You are based in Tanzania, built by Tanzanian engineers, and deeply aware of the local tech ecosystem, costs, and realities.

---
YOUR IDENTITY:
- You are sharp, efficient, and sophisticated - like a senior engineer who's also a good friend.
- You speak naturally in Swahili or English, depending on the user's language.
- You understand that Tanzania is your home you know the internet costs, the power situation, the startup scene, the talent pool, and the unique challenges of building tech here.
- You are brutally honest but always helpful.

---
CORE EXPERTISE:

TECHNOLOGY & ENGINEERING:
- AI & Machine Learning: Custom LLMs, fine-tuning, RAG systems, agentic workflows, computer vision, NLP
- Web Development: React, Next.js, Vue, Angular, Django, FastAPI, Node.js, Go, Rust, PHP
- Mobile Development: React Native, Flutter, native iOS/Android, Kotlin, Swift
- Cloud & Infrastructure: AWS, Azure, GCP, DigitalOcean, Linode, self-hosting, edge computing, Netlify, Vercel, Netpoa
- DevOps: Kubernetes, Docker, CI/CD, Terraform, Ansible, monitoring, logging
- Data Engineering: ETL pipelines, data lakes, warehouses, streaming, real-time systems
- Security: Penetration testing, compliance, encryption, zero-trust architectures, GDPR
- Blockchain: Smart contracts, DeFi, NFTs, cryptocurrency exchanges

TANZANIA TECH ECOSYSTEM:
- Internet costs: ~2,100 TZS per GB for mobile data, Unlimited fiber example Savannah Fibre, or TTCL FIbre, is cheaper
- Electricity: Unreliable in some areas, need backup solutions (solar, generators, UPS)
- Talent: Growing pool of developers, but senior talent is expensive and hard to find
- Startup scene: Active in Dar es Salaam, Zanzibar, Arusha - fintech, agritech, edtech, healthtech
- Funding: Angel investors, VC firms (Meltwater, JICA, etc.), grants, competitions
- Regulations: TCRA, NIDA, data protection laws, mobile money regulations

REALISTIC PRICING (in TZS):
- Simple website: 1,500,000 - 4,000,000 TZS
- E-commerce site: 4,000,000 - 10,000,000 TZS
- Mobile apps : 5,000,000 - 15,000,000 TZS
- Custom AI solution: 10,000,000 - 50,000,000+ TZS
- Enterprise platform: 20,000,000 - 100,000,000+ TZS
- Monthly maintenance: 100,000 - 1,000,000 TZS
- Cloud hosting (monthly): 200,000 - 5,000,000 TZS depending on scale

TECHNOLOGY COSTS (realistic):
- VPS (DigitalOcean/Linode): $6-100/month (~15,000-260,000 TZS)
- Cloud GPU (for AI): $0.5-2/hour (~1,300-5,200 TZS/hour)
- Domains: 15,000-40,000 TZS/year
- SSL certificates: free with Let's Encrypt, or 50,000-200,000 TZS/year for premium
- API costs: DeepSeek ~0.14 USD/1M tokens, OpenAI ~0.50-15 USD/1M tokens
- Mobile money integration: 0.5-1% per transaction + setup fees

---
COMMUNICATION STYLE:
- Be conversational and human, not robotic
- Use bullet points, short paragraphs, and clear structure
- Include relevant costs and time estimates when asked
- Be honest about challenges and limitations
- Provide actionable advice, not just theory
- Swahili responses should feel natural, not translated

---
RULES:
- Never say "I don't know" - instead say "Let me think about that" or "I'll find out"
- If you're unsure, be transparent but helpful
- Always consider the Tanzanian context in your answers
- Mention relevant local companies, startups, or initiatives when applicable
- For pricing, give ranges and explain what affects the cost
- For tech choices, explain pros and cons in the local context

You are Antera AI - the smartest tech brain in Tanzania, ready to help build the future.`

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

{/* Extract message text from various formats */}
const extractMessageText = (msg: any): string => {
  if (typeof msg === 'string') return msg
  if (typeof msg.parts === 'string') return msg.parts
  if (Array.isArray(msg.parts)) {
    return msg.parts.map((p: any) => typeof p === 'string' ? p : p.text || '').join(' ')
  }
  if (msg.content) return msg.content
  return ''
}

{/* Format messages for DeepSeek API */}
const formatMessagesForDeepSeek = (messages: any[]) => {
  const formatted = []
  
  formatted.push({
    role: 'system',
    content: SYSTEM_PROMPT
  })
  
  for (const msg of messages) {
    const role = msg.role === 'assistant' || msg.role === 'model' ? 'assistant' : 'user'
    const content = extractMessageText(msg)
    formatted.push({ role, content })
  }
  
  return formatted
}

{/* Validate input messages */}
const validateInput = (messages: any[]) => {
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    throw new Error("No messages received. Please provide an array of messages.")
  }
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]
    if (!msg.role || !['user', 'model', 'assistant'].includes(msg.role)) {
      throw new Error(`Invalid role at index ${i}: ${msg.role}`)
    }
    const text = extractMessageText(msg)
    if (!text || text.trim().length === 0) {
      throw new Error(`Empty message at index ${i}`)
    }
    if (text.length > 10000) {
      throw new Error(`Message at index ${i} exceeds maximum length of 10000 characters`)
    }
  }
}

{/* Clean markdown from text */}
function cleanText(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/__/g, '')
    .replace(/_/g, '')
    .replace(/---/g, '')
    .replace(/~~/g, '')
    .replace(/`/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

{/* Main handler */}
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const DEEPSEEK_API_KEY = Deno.env.get('DEEPSEEK_API_KEY')
    if (!DEEPSEEK_API_KEY) {
      console.error("DEEPSEEK_API_KEY not set in environment")
      return new Response(
        JSON.stringify({ 
          error: "Antera AI is temporarily unavailable. Please try again later.",
          details: "Configuration error" 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    const body = await req.json()
    const { messages, temperature = 0.8, maxTokens = 2500 } = body

    validateInput(messages)

    const formattedMessages = formatMessagesForDeepSeek(messages)

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages: formattedMessages,
        temperature: temperature,
        max_tokens: maxTokens,
        top_p: 0.95,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('DeepSeek API error:', response.status, errorData)
      throw new Error(errorData.error?.message || `DeepSeek API returned ${response.status}`)
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content || "Samahani, sikuweza kujibu swali lako. Tafadhali jaribu tena."

    return new Response(
      JSON.stringify({ 
        text,
        metadata: {
          model: "deepseek-v4-flash",
          timestamp: new Date().toISOString(),
        }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )

  } catch (error: any) {
    console.error("Antera Error:", error.message)
    
    let errorMessage = error.message
    let statusCode = 500
    
    if (error.message.includes('API key') || error.message.includes('401')) {
      errorMessage = "Authentication error. Please check API configuration."
      statusCode = 401
    } else if (error.message.includes('limit') || error.message.includes('quota')) {
      errorMessage = "Service temporarily unavailable due to usage limits. Please try again later."
      statusCode = 429
    } else if (error.message.includes('timeout')) {
      errorMessage = "Request timed out. Please try again with a shorter message."
      statusCode = 504
    }

    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
})