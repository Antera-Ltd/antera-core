'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Developers',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.contact_sales': 'Contact sales',
    'nav.start_building': 'Start building',
    'hero.title_part1': 'Automate Work.',
    'hero.title_part2': 'Scale Faster.',
    'hero.description': 'We implement practical AI solutions that reduce repetitive work while keeping systems secure and governed.',
    'page.products.title': 'Products',
    'page.products.desc': 'Practical AI and automation tools for modern business.',
    'page.solutions.title': 'Solutions',
    'page.solutions.desc': 'Practical technology solutions tailored to your real business needs.',
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'Simple and powerful APIs to automate your communication and operations.',
    'page.developers.title': 'Developers',
    'page.developers.desc': 'Everything you need to integrate our tools into your business.',
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
    'company.offices_value': 'Dar es Salaam • Dodoma'
  },
  sw: {
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Wanaendelezaji',
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
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'API rahisi na zenye nguvu kurahisisha mawasiliano na kazi zako.',
    'page.developers.title': 'Wanaendelezaji',
    'page.developers.desc': 'Kila kitu unachohitaji kuunganisha zana zetu kwenye biashara yako.',
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
    'company.offices_value': 'Dar es Salaam • Dodoma'
  },
  pl: {
    'nav.products': 'Produkty',
    'nav.solutions': 'Rozwiązania',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Programiści',
    'nav.blog': 'Blog',
    'nav.customers': 'Klienci',
    'nav.company': 'Firma',
    'nav.contact_sales': 'Kontakt z handlowcem',
    'nav.start_building': 'Zacznij budować',
    'hero.title_part1': 'Automatyzuj Pracę.',
    'hero.title_part2': 'Skaluj Szybciej.',
    'hero.description': 'Wdrażamy praktyczne rozwiązania AI, które redukują powtarzalną pracę, zachowując bezpieczeństwo systemów.',
    'page.products.title': 'Produkty',
    'page.products.desc': 'Praktyczne narzędzia AI i automatyzacji dla nowoczesnego biznesu.',
    'page.solutions.title': 'Rozwiązania',
    'page.solutions.desc': 'Praktyczne rozwiązania technologiczne dostosowane do realnych potrzeb biznesowych.',
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'Proste i potężne interfejsy API do automatyzacji komunikacji i operacji.',
    'page.developers.title': 'Programiści',
    'page.developers.desc': 'Wszystko, czego potrzebujesz, aby zintegrować nasze narzędzia z Twoim biznesem.',
    'page.blog.title': 'Wnioski',
    'page.blog.desc': 'Najnowsze wiadomości i proste przewodniki po AI i automatyzacji.',
    'blog.latest_briefings': 'Najnowsze Artykuły',
    'blog.read_all': 'Przeczytaj wszystkie wiadomości',
    'blog.subscribe': 'Zapisz się do naszego newslettera',
    'blog.subscribe_button': 'Dołącz',
    'page.customers.title': 'Klienci',
    'page.customers.desc': 'Zobacz, jak pomagamy organizacjom automatyzować i rosnąć.',
    'page.company.title': 'Firma',
    'page.company.desc': 'Nasza misja wspierania afrykańskich organizacji poprzez inteligentną technologię.',
    'page.models.title': 'Inteligencja Danych',
    'page.models.desc': 'Zmień dane biznesowe w jasne plany dla mądrzejszych decyzji.',
    'company.founded': 'Założona',
    'company.founded_value': '2026',
    'company.headquarters': 'Siedziba Główna',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Biura',
    'company.offices_value': 'Dar es Salaam • Dodoma'
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