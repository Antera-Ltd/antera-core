'use client';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t-2 border-black bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
            Stay Connected to the <span className="text-[#FA520F]">Future</span>
          </h2>
          <p className="text-lg text-neutral-600 font-mono max-w-md">
            Our Blogs cover the intersection of Technology, AI, automation, and Tanzania and global digital infrastructure.
          </p>
        </div>
        <NewsletterSignup />
      </div>
    </section>
  );
}
