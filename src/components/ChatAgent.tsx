'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, ChevronDown, Wifi, Battery, Signal, Cpu, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAnteraResponse } from '@/lib/gemini';
import Image from 'next/image';

type Msg = { role: 'user' | 'model'; text: string; time: string };

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* ── Typing dots ── */
const TypingDots = () => (
  <div className="flex items-center gap-[5px] px-1 py-0.5">
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        className="w-[6px] h-[6px] rounded-full"
        style={{ background: '#FA520F' }}
        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

/* ── Avatar ── */
const Avatar = ({ size = 36 }: { size?: number }) => (
  <div className="relative shrink-0" style={{ width: size, height: size }}>
    <motion.div
      className="absolute inset-0 rounded-full border border-[#FA520F]/30"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
    />
    <div
      className="absolute inset-[1px] rounded-full flex items-center justify-center overflow-hidden bg-black"
    >
      <Image
        src="/antera-logo.jpeg"
        alt="Antera AI"
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  </div>
);

/* ── Message bubble ── */
const Bubble = ({ msg, isLast }: { msg: Msg; isLast: boolean }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
      className={cn('flex items-end gap-2.5', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && <Avatar size={28} />}
      <div className={cn('flex flex-col gap-1', isUser ? 'items-end' : 'items-start', 'max-w-[85%]')}>
        <div
          className={cn(
            'px-4 py-2.5 text-[13.5px] leading-[1.55] shadow-sm',
            isUser
              ? 'bg-[#FA520F] text-white rounded-[18px_18px_4px_18px]'
              : 'bg-white/80 border border-black/5 text-[#1F1F1F] rounded-[18px_18px_18px_4px]'
          )}
        >
          <div className="whitespace-pre-wrap break-words font-inter">{msg.text}</div>
        </div>
        <div className="flex items-center gap-1.5 px-1">
          <span className="text-[10px] font-mono text-black/30 uppercase tracking-tighter">{msg.time}</span>
          {isUser && isLast && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] text-[#FA520F]"
            >●●</motion.span>
          )}
        </div>
      </div>
      {isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-black text-white border border-white/10"
        >
          <span className="text-[10px] font-mono">USR</span>
        </div>
      )}
    </motion.div>
  );
};

const quickPrompts = [
  { icon: <Cpu className="w-4 h-4" />, label: 'AI Solutions' },
  { icon: <MessageSquare className="w-4 h-4" />, label: 'Web & App Dev' },
  { icon: <Cpu className="w-4 h-4" />, label: 'Custom Infrastructure' },
  { icon: <MessageSquare className="w-4 h-4" />, label: 'How we operate' },
];

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
        const timer = setTimeout(() => inputRef.current?.focus(), 500);
        return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isLoading) return;
    setInput('');

    const userMsg: Msg = { role: 'user', text: msg, time: getTime() };
    const currentMessages = [...messages, userMsg];
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const apiHistoryPayload = currentMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const replyText = await getAnteraResponse(apiHistoryPayload);

      setMessages(prev => [...prev, { role: 'model', text: replyText, time: getTime() }]);
    } catch (err) {
      console.error("Antera AI Error:", err);
      setMessages(prev => [...prev, { role: 'model', text: 'Antera AI is currently recalibrating. Please try again in a moment.', time: getTime() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ── FAB ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden bg-black group"
          >
            <motion.div
              className="absolute inset-0 bg-[#FA520F]"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
               <Image
                src="/antera-logo.jpeg"
                alt="Antera AI"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FA520F] rounded-full border-2 border-black" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="chat-window fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto z-50 flex flex-col overflow-hidden mx-auto"
              style={{
                width: '100%',
                height: '85vh',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: '0 -20px 50px -12px rgba(0,0,0,0.25)',
              }}
            >
              {/* Desktop UI overrides */}
              <style jsx global>{`
                @media (min-width: 768px) {
                  .chat-window {
                    width: 420px !important;
                    height: min(720px, calc(100vh - 8rem)) !important;
                    border-radius: 28px !important;
                    border: 1px solid rgba(0,0,0,0.1) !important;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4) !important;
                  }
                }
              `}</style>

              {/* ── Background Patterns ── */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}
              />

              {/* Header / Top Bar */}
              <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white/40">
                <div className="flex items-center gap-3">
                  <Avatar size={32} />
                  <div>
                    <h3 className="font-bold text-[15px] tracking-tight text-black">Antera AI</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] animate-pulse" />
                      <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Active Core</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <ChevronDown size={18} className="text-black" />
                </motion.button>
              </div>

              {/* ── Messages ── */}
              <div
                ref={scrollRef}
                className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-5 scroll-smooth"
                style={{ scrollbarWidth: 'none' }}
              >
                {/* Welcome state */}
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center pt-8 space-y-6"
                  >
                    <div className="relative">
                        <Avatar size={80} />
                        <motion.div
                            className="absolute -inset-4 border border-[#FA520F]/20 rounded-full"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </div>

                    <div className="text-center space-y-2">
                      <p className="font-instrument text-2xl font-medium text-black">How can we build today?</p>
                      <p className="text-[13px] text-black/40 max-w-[260px] mx-auto leading-relaxed">
                        Interface with ANTERA's intelligence core for architecture, automation, and technical inquiries.
                      </p>
                    </div>

                    {/* Quick prompts grid */}
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm pt-4">
                      {quickPrompts.map((q, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,1)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSend(q.label)}
                          className="flex flex-col gap-2 p-4 text-left transition-all bg-white/50 border border-black/5 rounded-2xl shadow-sm"
                        >
                          <div className="text-[#FA520F]">{q.icon}</div>
                          <span className="text-[12px] font-medium leading-tight text-black/70">{q.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, idx) => (
                  <Bubble key={idx} msg={msg} isLast={idx === messages.length - 1} />
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-3"
                  >
                    <Avatar size={28} />
                    <div className="bg-white/80 border border-black/5 px-4 py-3 rounded-[18px_18px_18px_4px]">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* ── Input area ── */}
              <div
                className="relative z-10 px-4 py-4 md:px-6 md:pb-8 bg-white border-t border-black/5"
              >
                <div
                  className="flex items-center gap-2 p-1.5 bg-black/[0.03] rounded-[24px] border border-black/5 focus-within:border-[#FA520F]/30 focus-within:bg-white transition-all duration-300"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    placeholder="Inquire Antera AI..."
                    className="flex-1 bg-transparent px-4 py-2 text-[14px] outline-none text-black placeholder:text-black/30"
                  />

                  <AnimatePresence mode="wait">
                    {input.trim() ? (
                      <motion.button
                        key="send"
                        initial={{ scale: 0, x: 10 }}
                        animate={{ scale: 1, x: 0 }}
                        exit={{ scale: 0, x: 10 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSend()}
                        disabled={isLoading}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white shadow-lg"
                      >
                        <Send size={16} />
                      </motion.button>
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center opacity-20">
                        <Cpu size={18} className="text-black" />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAgent;
