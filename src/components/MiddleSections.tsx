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
    <section className="bg-white py-32 border-y border-[#1F1F1F]/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1F1F1F]">
                Unified Customer <br /><span className="font-serif italic font-normal text-[#FA520F]">Communication</span>
              </h2>
              <p className="text-[#1F1F1F]/60 text-xl font-light leading-relaxed">
                Bring all customer engagement channels together through a single platform. Capture every interaction across SMS, USSD, and social media.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {channels.map((channel, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#fffaeb] border border-[#1F1F1F]/5">
                    <channel.icon className="w-5 h-5 text-[#FA520F]" />
                    <span className="text-sm font-bold text-[#1F1F1F]/70">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="relative aspect-square bg-[#fffaeb] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 mistral-grid opacity-20" />
             <div className="relative z-10 w-4/5 h-4/5 border border-[#FA520F]/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-[#FA520F]/40 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-[#FA520F] flex items-center justify-center">
                      <MessageSquare className="w-12 h-12 text-white" />
                   </div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute top-10 right-10 w-20 h-20 border border-[#FA520F]/20 rounded-full" />
             <div className="absolute bottom-20 left-10 w-32 h-32 border border-[#FA520F]/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-[#fffaeb] py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <FadeIn direction="none">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-[#1F1F1F]">Applications Built Around Your Business</h2>
            <p className="text-[#1F1F1F]/60 text-lg font-light leading-relaxed">
              We design and develop web and mobile applications customized for your organization's unique workflows, transactions, and information dissemination needs.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-white p-12 border border-[#1F1F1F]/5 h-full flex flex-col justify-between">
              <div>
                <Smartphone className="w-12 h-12 text-[#FA520F] mb-8" />
                <h3 className="text-3xl font-bold mb-6 text-[#1F1F1F]">Mobile Ecosystems</h3>
                <p className="text-[#1F1F1F]/50 text-lg font-light mb-10">
                  Custom Android and iOS applications built for high-scale customer engagement and field operations.
                </p>
              </div>
              <div className="aspect-video bg-[#fffaeb] border border-[#1F1F1F]/5 flex items-end justify-center pt-8 px-8 overflow-hidden">
                 <div className="w-full h-full bg-white shadow-2xl rounded-t-3xl border-t border-x border-[#1F1F1F]/10 p-4">
                    <div className="w-full h-4 bg-[#fffaeb] mb-4" />
                    <div className="grid grid-cols-2 gap-2 mb-4">
                       <div className="h-20 bg-[#fffaeb]" />
                       <div className="h-20 bg-[#fffaeb]" />
                    </div>
                    <div className="h-32 bg-[#fffaeb]" />
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-white p-12 border border-[#1F1F1F]/5 h-full flex flex-col justify-between">
              <div>
                <Layout className="w-12 h-12 text-[#FA520F] mb-8" />
                <h3 className="text-3xl font-bold mb-6 text-[#1F1F1F]">Enterprise Dashboards</h3>
                <p className="text-[#1F1F1F]/50 text-lg font-light mb-10">
                  Scalable web systems and internal platforms to manage complex organizational workflows in real-time.
                </p>
              </div>
              <div className="aspect-video bg-[#fffaeb] border border-[#1F1F1F]/5 p-6 overflow-hidden">
                 <div className="w-full h-full bg-white shadow-2xl border border-[#1F1F1F]/10 flex">
                    <div className="w-16 h-full border-r border-[#1F1F1F]/5 bg-[#fffaeb]" />
                    <div className="flex-1 p-4">
                       <div className="h-4 w-1/3 bg-[#fffaeb] mb-6" />
                       <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="h-16 bg-[#fffaeb]" />
                          <div className="h-16 bg-[#fffaeb]" />
                          <div className="h-16 bg-[#fffaeb]" />
                       </div>
                       <div className="h-32 bg-[#fffaeb]" />
                    </div>
                 </div>
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
    <section className="bg-white py-32 border-y border-[#1F1F1F]/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
             {features.map((f, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                 <div className="p-8 bg-[#fffaeb] border border-[#1F1F1F]/5 hover:border-[#FA520F]/30 transition-all group">
                    <f.icon className="w-8 h-8 text-[#1F1F1F]/20 group-hover:text-[#FA520F] mb-6 transition-colors" />
                    <h4 className="font-bold text-[#1F1F1F] group-hover:text-[#FA520F] transition-colors">{f.title}</h4>
                 </div>
               </FadeIn>
             ))}
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1F1F1F]">
              Turn Data <br /><span className="font-serif italic font-normal text-[#FA520F]">Into Action</span>
            </h2>
            <p className="text-[#1F1F1F]/60 text-xl font-light leading-relaxed">
              We build intelligent dashboards and analytics systems that help organizations understand customer behavior, identify opportunities, and make informed decisions in real-time.
            </p>
            <button className="text-[#FA520F] font-bold flex items-center gap-2 group">
              Explore Intelligence Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
