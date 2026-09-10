'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.data_analytics': 'Data Analytics',
    'nav.models': 'Models',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.contact_sales': 'Contact sales',
    'nav.start_building': 'Start building',
    'hero.title_part1': 'Grow Your Business.',
    'hero.title_part2': 'With Smart Technology.',
    'hero.description': 'We help organizations build tailored Systems, Webapps, Mobile Apps, Chatbots, and AI systems to solve the world’s hardest problems.',
    'page.products.title': 'Products',
    'page.products.desc': 'Practical AI and automation tools for modern business.',
    'page.solutions.title': 'Solutions',
    'page.solutions.desc': 'Practical technology solutions tailored to your real business needs.',
    'page.blog.title': 'Insights',
    'page.blog.desc': 'Latest news and simple guides on AI and automation.',
    'blog.latest_briefings': 'Latest Articles',
    'blog.read_all': 'Read all news',
    'blog.subscribe': 'Subscribe to our newsletter',
    'blog.subscribe_button': 'Join',
    'page.customers.title': 'Customers',
    'page.customers.desc': 'See how we help organizations automate and grow.',
    'page.company.title': 'Company',
    'page.company.desc': 'Our mission to enable African organizations through intelligent technology.',
    'page.models.title': 'Data & Insights',
    'page.models.desc': 'Turn your business data into clear plans for smarter decisions.',
    'company.founded': 'Founded',
    'company.founded_value': '2026',
    'company.headquarters': 'Headquarters',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Offices',
    'company.offices_value': 'Dar es Salaam • Dodoma',
    'dropdown.featured': 'Featured',
    'dropdown.categories': 'Categories',
    'dropdown.products.featured_title': 'Featured Products',
    'dropdown.products.title1': 'Bonga APIs',
    'dropdown.products.desc1': 'High-throughput APIs for SMS and USSD.',
    'dropdown.products.title2': 'Frontier Models',
    'dropdown.products.desc2': 'State-of-the-art ML models built for local languages.',
    'dropdown.products.read_all': 'View all products',
    'dropdown.products.cat_title': 'Product Suite',
    'dropdown.products.cat1': 'Custom SDKs',
    'dropdown.products.cat2': 'Applied AI',
    'dropdown.products.cat3': 'Cloud Orchestration',
    'dropdown.products.cat4': 'Infrastructure Audit',
    'dropdown.solutions.featured_title': 'Featured Solutions',
    'dropdown.solutions.title1': 'Practical AI & Automation',
    'dropdown.solutions.desc1': 'Reduce repetitive work with tailored AI copilots.',
    'dropdown.solutions.title2': 'Modern Infrastructure',
    'dropdown.solutions.desc2': 'DevOps and cloud migration for maximum uptime.',
    'dropdown.solutions.read_all': 'Explore solutions',
    'dropdown.solutions.cat_title': 'Industries & Needs',
    'dropdown.solutions.cat1': 'Digital Platforms',
    'dropdown.solutions.cat2': 'Security & Risk',
    'dropdown.solutions.cat3': 'Data & Analytics',
    'dropdown.solutions.cat4': 'Managed IT Support',
    'dropdown.company.featured_title': 'About Antera',
    'dropdown.company.title1': 'Our Mission',
    'dropdown.company.desc1': 'Enabling African organizations with intelligent technology.',
    'dropdown.company.title2': 'Our Expertise',
    'dropdown.company.desc2': 'Expert engineering across cloud, AI, and security.',
    'dropdown.company.read_all': 'About us',
    'dropdown.company.cat_title': 'Explore Company',
    'dropdown.company.cat1': 'How We Work',
    'dropdown.company.cat2': 'Values',
    'dropdown.company.cat3': 'Join Us'
  },
  sw: {
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.data_analytics': 'Uchambuzi wa Data',
    'nav.models': 'Mifumo',
    'nav.blog': 'Blogu',
    'nav.customers': 'Wateja',
    'nav.company': 'Kampuni',
    'nav.contact_sales': 'Wasiliana na mauzo',
    'nav.start_building': 'Anza kujenga',
    'hero.title_part1': 'Rahisisha Kazi.',
    'hero.title_part2': 'Kua Haraka.',
    'hero.description': 'Tunatumia mifumo ya kisasa ya AI kurahisisha kazi zinazojirudia na kukuza biashara yako kwa usalama.',
    'page.products.title': 'Bidhaa',
    'page.products.desc': 'Zana rahisi za AI na mifumo ya kisasa kwa biashara.',
    'page.solutions.title': 'Suluhisho',
    'page.solutions.desc': 'Mifumo ya teknolojia inayolenga mahitaji halisi ya biashara yako.',
    'page.blog.title': 'Makala',
    'page.blog.desc': 'Habari za hivi karibuni na miongozo rahisi kuhusu AI na teknolojia.',
    'blog.latest_briefings': 'Makala ya Karibuni',
    'blog.read_all': 'Soma habari zote',
    'blog.subscribe': 'Jiunge na jarida letu',
    'blog.subscribe_button': 'Jiunge',
    'page.customers.title': 'Wateja',
    'page.customers.desc': 'Ona jinsi tunavyosaidia mashirika kurahisisha kazi na kukua.',
    'page.company.title': 'Kampuni',
    'page.company.desc': 'Lengo letu ni kusaidia mashirika ya Afrika kupitia teknolojia ya kisasa.',
    'page.models.title': 'Akili ya Data',
    'page.models.desc': 'Badilisha data za biashara yako kuwa mipango madhubuti ya maamuzi bora.',
    'company.founded': 'Ilianzishwa',
    'company.founded_value': '2026',
    'company.headquarters': 'Makao Makuu',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Ofisi',
    'company.offices_value': 'Dar es Salaam • Dodoma',
    'dropdown.featured': 'Imeangaziwa',
    'dropdown.categories': 'Vipengele',
    'dropdown.products.featured_title': 'Bidhaa Zilizochaguliwa',
    'dropdown.products.title1': 'Bonga APIs',
    'dropdown.products.desc1': 'API zenye uwezo mkubwa kwa SMS na USSD',
    'dropdown.products.title2': 'Mifumo ya Frontier',
    'dropdown.products.desc2': 'Mifumo ya kisasa ya ML iliyoundwa kwa lugha za asili.',
    'dropdown.products.read_all': 'Tazama bidhaa zote',
    'dropdown.products.cat_title': 'Mfululizo wa Bidhaa',
    'dropdown.products.cat1': 'SDK Maalum',
    'dropdown.products.cat2': 'AI Inayotumika',
    'dropdown.products.cat3': 'Uratibu wa Wingu',
    'dropdown.products.cat4': 'Ukaguzi wa Miundombinu',
    'dropdown.solutions.featured_title': 'Suluhisho Zilizochaguliwa',
    'dropdown.solutions.title1': 'AI na Kazi Otomatiki',
    'dropdown.solutions.desc1': 'Punguza kazi zinazojirudia kwa kutumia wasaidizi wa AI.',
    'dropdown.solutions.title2': 'Miundombinu ya Kisasa',
    'dropdown.solutions.desc2': 'Uhamiaji wa wingu na DevOps kwa utendaji wa juu.',
    'dropdown.solutions.read_all': 'Gundua suluhisho',
    'dropdown.solutions.cat_title': 'Sekta na Mahitaji',
    'dropdown.solutions.cat1': 'Mifumo ya Kidijitali',
    'dropdown.solutions.cat2': 'Usalama na Hatari',
    'dropdown.solutions.cat3': 'Data na Uchambuzi',
    'dropdown.solutions.cat4': 'Msaada wa IT',
    'dropdown.company.featured_title': 'Kuhusu Antera',
    'dropdown.company.title1': 'Lengo Letu',
    'dropdown.company.desc1': 'Kusaidia mashirika ya Afrika kupitia teknolojia ya kisasa.',
    'dropdown.company.title2': 'Ujuzi Wetu',
    'dropdown.company.desc2': 'Uhandisi wa kitaalamu katika wingu, AI na usalama.',
    'dropdown.company.read_all': 'Kuhusu sisi',
    'dropdown.company.cat_title': 'Chunguza Kampuni',
    'dropdown.company.cat1': 'Jinsi Tunavyofanya Kazi',
    'dropdown.company.cat2': 'Maadili Yetu',
    'dropdown.company.cat3': 'Jiunge Nasi'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};