import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  Mail,
  Smartphone,
  Globe,
  Layout,
  Database,
  Activity,
  Search,
  Zap,
  Shield,
  BarChart3,
  Bot,
  ArrowRight
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations';

export const CommunicationSection = () => {
  const channels = [
    { name: 'SMS Communication', icon: MessageSquare },
    { name: 'USSD Solutions', icon: Phone },
    { name: 'Social Media Integration', icon: Globe },
    { name: 'Robo Calls', icon: Zap },
    { name: 'Email Campaigns', icon: Mail },
    { name: 'Customer Messaging', icon: Bot },
  ];

  return (
    <section className="bg-[#09090B] py-32 border-y border-white/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                Unified Customer <br /><span className="font-serif italic font-normal text-primary">Communication</span>
              </h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                Bring all customer engagement channels together through a single platform. Capture every interaction across SMS, USSD, and social media.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {channels.map((channel, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#111827] border border-white/5 rounded-lg">
                    <channel.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-white/70">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="relative aspect-square bg-[#111827] flex items-center justify-center overflow-hidden rounded-2xl border border-white/5">
             <div className="absolute inset-0 mistral-grid opacity-20" />
             <div className="relative z-10 w-4/5 h-4/5 border border-primary/20 flex items-center justify-center rounded-full">
                <div className="w-3/4 h-3/4 border border-primary/40 flex items-center justify-center rounded-full">
                   <div className="w-1/2 h-1/2 bg-primary flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                      <MessageSquare className="w-12 h-12 text-white" />
                   </div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-10 right-10 w-20 h-20 border border-primary/20 rounded-full" />
             <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-[#09090B] py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <FadeIn direction="none">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">Applications Built Around Your Business</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We design and develop web and mobile applications customized for your organization's unique workflows, transactions, and information dissemination needs.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-[#111827] p-12 border border-white/5 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <Smartphone className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6 text-white">Mobile Ecosystems</h3>
                <p className="text-gray-400 text-lg font-light mb-10">
                  Custom Android and iOS applications built for high-scale customer engagement and field operations.
                </p>
              </div>
              <div className="aspect-video bg-[#09090B] border border-white/5 flex items-end justify-center overflow-hidden rounded-xl">
                 <img
                    src="/src/assets/shot1.jpg"
                    alt="Mobile App Interface"
                    className="w-full h-full object-cover object-top shadow-2xl rounded-t-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800";
                    }}
                 />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-[#111827] p-12 border border-white/5 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <Layout className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6 text-white">Enterprise Dashboards</h3>
                <p className="text-gray-400 text-lg font-light mb-10">
                  Scalable web systems and internal platforms to manage complex organizational workflows in real-time.
                </p>
              </div>
              <div className="aspect-video bg-[#09090B] border border-white/5 overflow-hidden rounded-xl">
                 <img
                    src="/src/assets/shot2.jpg"
                    alt="Enterprise Dashboard"
                    className="w-full h-full object-cover shadow-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800";
                    }}
                 />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const features = [
    { title: 'Business Intelligence', icon: BarChart3 },
    { title: 'Predictive Analytics', icon: Zap },
    { title: 'Real-Time Dashboards', icon: Activity },
    { title: 'Customer Insights', icon: Search },
    { title: 'Performance Monitoring', icon: Activity },
    { title: 'Decision Support Systems', icon: Shield },
  ];

  return (
    <section className="bg-[#09090B] py-32 border-y border-white/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
             {features.map((f, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                 <div className="p-8 bg-[#111827] border border-white/5 hover:border-primary/30 transition-all group rounded-xl">
                    <f.icon className="w-8 h-8 text-white/20 group-hover:text-primary mb-6 transition-colors" />
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">{f.title}</h4>
                 </div>
               </FadeIn>
             ))}
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Turn Data <br /><span className="font-serif italic font-normal text-primary">Into Action</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              We build intelligent dashboards and analytics systems that help organizations understand customer behavior, identify opportunities, and make informed decisions in real-time.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 group">
              Explore Intelligence Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
