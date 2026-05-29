import { FadeIn, Section, StaggerContainer, StaggerItem } from './Layout'
import { Activity, Clock, Server, BarChart3, Bot, MessageSquare, Smartphone, Globe, Shield, Send, PieChart, Settings } from 'lucide-react'

export const TrustSection = () => {
  const metrics = [
    { title: 'Real-Time Insights', icon: Activity },
    { title: '24/7 Automation', icon: Clock },
    { title: 'Scalable Infrastructure', icon: Server },
    { title: 'Data-Driven Decisions', icon: BarChart3 },
  ]

  return (
    <Section className="border-t border-white/5">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-3xl">
          Technology That Works Across Your Entire Organization
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl leading-relaxed">
          Capture data gathered at all your branches, agents, customers, applications, social media platforms, and website traffic in real-time while delivering exceptional customer experiences.
        </p>
      </FadeIn>

      <StaggerContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <StaggerItem key={metric.title}>
              <div className="p-8 rounded-3xl glass hover:border-primary/50 transition-colors group">
                <metric.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold">{metric.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  )
}

export const ServicesSection = () => {
  const services = [
    {
      title: 'AI Assistants',
      desc: 'Custom AI solutions that automate tasks, support customers, and improve operational efficiency.',
      icon: Bot
    },
    {
      title: 'Chatbots',
      desc: 'Intelligent conversational systems for WhatsApp, websites, and social platforms.',
      icon: MessageSquare
    },
    {
      title: 'Mobile Applications',
      desc: 'Custom Android and iOS applications tailored to business needs.',
      icon: Smartphone
    },
    {
      title: 'Web Applications',
      desc: 'Scalable web systems, dashboards, and enterprise platforms.',
      icon: Globe
    },
    {
      title: 'Backend & API Development',
      desc: 'Secure infrastructure powering applications and integrations.',
      icon: Shield
    },
    {
      title: 'WhatsApp Automation',
      desc: 'Automated customer engagement, messaging, and workflow solutions.',
      icon: Send
    },
    {
      title: 'Data Analytics',
      desc: 'Transform raw data into actionable business intelligence.',
      icon: PieChart
    },
    {
      title: 'Business Automation',
      desc: 'Streamline repetitive operations through intelligent automation.',
      icon: Settings
    },
  ]

  return (
    <Section id="services" className="bg-surface/30">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">What We Build</h2>
      </FadeIn>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="h-full p-8 rounded-3xl border border-white/5 bg-surface/50 hover:bg-surface transition-all group flex flex-col">
                <service.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  )
}
