import { motion } from 'framer-motion'
import { FadeIn, Section, StaggerContainer, StaggerItem } from './Layout'
import { MessageCircle, Hash, Share2, PhoneCall, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'

export const CommunicationSection = () => {
  const features = [
    { title: 'SMS Communication', icon: MessageCircle },
    { title: 'USSD Solutions', icon: Hash },
    { title: 'Social Media Integration', icon: Share2 },
    { title: 'Robo Calls', icon: PhoneCall },
    { title: 'Email Campaigns', icon: Mail },
    { title: 'Customer Messaging', icon: MessageSquare },
  ]

  return (
    <Section className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Unified Customer Communication</h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Bring all customer engagement channels together through a single platform. We help you create a seamless experience across every touchpoint.
            </p>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <feature.icon size={20} />
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        <div className="relative">
           {/* Abstract connection visualization */}
           <div className="aspect-square glass rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet/20" />
              <div className="z-10 text-center p-8">
                 <div className="w-24 h-24 bg-white/10 rounded-3xl mx-auto mb-6 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <img src="/antera-logo.jpeg" alt="ANTERA" className="w-16 h-16 rounded-xl" />
                 </div>
                 <div className="space-y-2">
                    <div className="h-2 w-32 bg-white/20 rounded-full mx-auto" />
                    <div className="h-2 w-24 bg-white/10 rounded-full mx-auto" />
                 </div>
              </div>

              {/* Floating orbits */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"
                  style={{
                    margin: `${i * 40 + 40}px`,
                    animationDuration: `${10 + i * 5}s`,
                    animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                  }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-1/2 -translate-x-1/2 blur-[2px]" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </Section>
  )
}

export const ApplicationSection = () => {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Applications Built Around Your Business</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We design and develop web and mobile applications customized for your organization's unique workflows, customer engagement processes, transactions, and information dissemination needs.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Mobile App Mockups', color: 'from-blue-500/20' },
          { title: 'Dashboard Screens', color: 'from-violet-500/20' },
          { title: 'Enterprise Software UI', color: 'from-emerald-500/20' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass border-white/5">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-50 group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                {/* Abstract UI elements */}
                <div className="w-full h-full border border-white/10 rounded-xl bg-background/50 backdrop-blur-sm p-4 translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-white/10 rounded" />
                    <div className="h-4 w-1/2 bg-white/5 rounded" />
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div className="h-20 bg-white/5 rounded-lg" />
                       <div className="h-20 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 font-bold text-xl">{item.title}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

export const DataIntelligenceSection = () => {
  const features = [
    "Business Intelligence",
    "Predictive Analytics",
    "Real-Time Dashboards",
    "Customer Insights",
    "Performance Monitoring",
    "Decision Support Systems"
  ]

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative h-full w-full glass rounded-3xl border-white/5 p-8 flex items-center justify-center">
               {/* Abstract chart visualization */}
               <div className="w-full space-y-6">
                  {[80, 60, 90, 45].map((h, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-xs font-medium text-gray-500">
                          <span>Channel {i+1}</span>
                          <span>{h}%</span>
                       </div>
                       <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-primary"
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Data Into Action</h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              We build intelligent dashboards and analytics systems that help organizations understand customer behavior, identify opportunities, and make informed decisions in real-time.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
