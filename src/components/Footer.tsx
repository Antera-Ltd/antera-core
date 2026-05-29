import { FadeIn, Section } from './Layout'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export const FinalCTA = () => {
  return (
    <Section className="py-32">
      <div className="relative rounded-[3rem] overflow-hidden glass border-white/5 p-12 md:p-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-violet/10 to-primary/10 -z-10" />
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how ANTERA can help your organization automate processes, leverage data, and deploy intelligent digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all text-lg">
              Start a Project
            </button>
            <button className="px-10 py-5 rounded-full glass font-bold hover:bg-white/10 transition-all text-lg">
              Contact Us
            </button>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}

export const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-10 w-auto rounded" />
              <span className="text-2xl font-bold tracking-tight">ANTERA</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Advanced Neural Technologies & Engineering Research Agency. Building Intelligent Software, AI Solutions, Automation & Digital Infrastructure.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">AI Assistants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile & Web Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Enterprise AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Engagement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-primary" />
                <a href="mailto:contact@antera.ai" className="hover:text-white transition-colors">contact@antera.ai</a>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={18} className="text-primary" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <MessageSquare size={18} className="text-primary" />
                <a href="#" className="hover:text-white transition-colors">WhatsApp Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2026 ANTERA. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
