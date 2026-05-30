import { FadeIn, Section, StaggerContainer, StaggerItem } from './Layout'
import { Search, BarChart2, PenTool, Code2, LineChart, MessageSquare, Smartphone, Database, ArrowRight } from 'lucide-react'

export const OperationSection = () => {
  const steps = [
    { title: 'Discover', desc: 'Understanding your business needs and goals.' },
    { title: 'Analyze', desc: 'Evaluating data and technical requirements.' },
    { title: 'Design', desc: 'Architecting the perfect solution.' },
    { title: 'Build', desc: 'Engineering with precision and quality.' },
    { title: 'Deploy', desc: 'Launching and integrating seamlessly.' },
    { title: 'Optimize', desc: 'Continuous improvement based on data.' },
  ]

  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-20">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Operate</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We bring together people from diverse backgrounds, expertise, partnerships, and experience to deliver measurable results.
            We leverage technology to automate processes, enhance customer interactions, and unlock predictive insights that drive growth.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-right from-transparent via-primary/20 to-transparent hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center font-bold text-xl mb-6 group-hover:border-primary group-hover:text-primary transition-all relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight size={20} className="mt-4 text-gray-700 lg:hidden" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}

export const DataScienceSection = () => {
  const services = [
    { title: 'Customer Profiling', icon: Search, desc: 'Deep insights into user behavior and demographics.' },
    { title: 'Customer Relationship Management', icon: MessageSquare, desc: 'Enhancing engagement and retention.' },
    { title: 'Systems Design', icon: PenTool, desc: 'Robust architectures for enterprise scale.' },
    { title: 'Systems Development', icon: Code2, desc: 'High-performance engineering and implementation.' },
    { title: 'Systems Analysis & Review', icon: BarChart2, desc: 'Evaluating performance and security.' },
    { title: 'Digital Communication', icon: LineChart, desc: 'Omnichannel engagement strategies.' },
    { title: 'Application Development', icon: Smartphone, desc: 'Tailored mobile and web experiences.' },
    { title: 'Data Science Consulting', icon: Database, desc: 'Strategic guidance for data-driven growth.' },
  ]

  return (
    <Section id="solutions">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Data Science & Consulting</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="p-8 rounded-3xl border border-white/5 bg-surface/50 hover:bg-surface hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

export const WhySection = () => {
  const reasons = [
    "Enterprise-grade Solutions",
    "AI-first Approach",
    "Scalable Architecture",
    "Secure Infrastructure",
    "Data-driven Decision Making",
    "Rapid Deployment",
    "Long-term Partnership",
    "Custom Development"
  ]

  return (
    <Section className="bg-surface/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Organizations Choose ANTERA</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-semibold text-gray-300">{reason}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video glass rounded-3xl border-white/5 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-violet/30" />
             <div className="absolute inset-0 flex items-center justify-center text-8xl font-black opacity-5 select-none">
                ANTERA
             </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
