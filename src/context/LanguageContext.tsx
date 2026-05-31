import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'SW' | 'PL';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Developers',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.start_building': 'Start building',
    'nav.contact_sales': 'Contact sales',
    'nav.latest_posts': 'Latest Posts',
    'nav.categories': 'Categories',
    'nav.read_all': 'Read all news',

    // Hero
    'hero.badge': 'Neural Technologies v2.0',
    'hero.title_part1': 'Advanced AI Architecture',
    'hero.title_part2': 'for Enterprise Intelligence',
    'hero.description': 'Antera designs and deploys sophisticated neural networks and automated infrastructure tailored for high-stakes operational scale. Transforming data into a strategic asset.',
    'hero.cta_start': 'Start Building',
    'hero.cta_demo': 'Request Demo',

    // Footer
    'footer.description': 'Advanced Neural Technologies and Engineering Research Agency. Custom AI architecture designed for absolute operational scale.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.download': 'DOWNLOAD ANTERA',
    'footer.app_store': 'APP STORE',
    'footer.google_play': 'GOOGLE PLAY',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.lang': 'LANG',

    // Page Placeholders
    'page.products.title': 'Products',
    'page.products.desc': 'Explore our cutting-edge AI and Data solutions.',
    'page.solutions.title': 'Solutions',
    'page.solutions.desc': 'Tailored digital infrastructure for the modern enterprise.',
    'page.sekela.title': 'Sekela APIS',
    'page.sekela.desc': 'Connect your business with our robust API network.',
    'page.developers.title': 'Developers',
    'page.developers.desc': 'Documentation and tools for engineering excellence.',
    'page.blog.title': 'Blog',
    'page.blog.desc': 'Insights from the forefront of Neural Technologies.',
    'page.customers.title': 'Customers',
    'page.customers.desc': 'Success stories from our global partners.',
    'page.company.title': 'Company',
    'page.company.desc': 'About Advanced Neural Technologies & Engineering Research Agency.',

    // Services
    'services.ai': 'AI Solutions',
    'services.app_dev': 'App Development',
    'services.data_science': 'Data Science',
    'services.automation': 'Business Automation',
    'services.web_dev': 'Web Development',
    'services.about': 'About Us',
  },
  SW: {
    // Navbar
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Wasanidi',
    'nav.blog': 'Blogu',
    'nav.customers': 'Wateja',
    'nav.company': 'Kampuni',
    'nav.start_building': 'Anza Kujenga',
    'nav.contact_sales': 'Wasiliana Nasi',
    'nav.latest_posts': 'Makala ya Karibuni',
    'nav.categories': 'Kategoria',
    'nav.read_all': 'Soma habari zote',

    // Hero
    'hero.badge': 'Teknolojia ya Mishipa v2.0',
    'hero.title_part1': 'Usanifu wa AI wa Hali ya Juu',
    'hero.title_part2': 'kwa Ujasusi wa Biashara',
    'hero.description': 'Antera inatengeneza na kusambaza mitandao ya kisasa ya mishipa na miundombinu ya kiotomatiki iliyoundwa kwa ajili ya kiwango cha juu cha uendeshaji. Kubadilisha data kuwa rasilimali ya kimkakati.',
    'hero.cta_start': 'Anza Kujenga',
    'hero.cta_demo': 'Omba Onyesho',

    // Footer
    'footer.description': 'Wakala wa Utafiti wa Teknolojia ya Mishipa na Uhandisi wa Hali ya Juu. Usanifu wa AI maalum ulioundwa kwa kiwango kamili cha uendeshaji.',
    'footer.services': 'Huduma',
    'footer.company': 'Kampuni',
    'footer.contact': 'Mawasiliano',
    'footer.download': 'PAKUA ANTERA',
    'footer.app_store': 'APP STORE',
    'footer.google_play': 'GOOGLE PLAY',
    'footer.privacy': 'Faragha',
    'footer.terms': 'Masharti',
    'footer.lang': 'LUGHA',

    // Page Placeholders
    'page.products.title': 'Bidhaa',
    'page.products.desc': 'Gundua suluhisho zetu za kisasa za AI na Data.',
    'page.solutions.title': 'Suluhisho',
    'page.solutions.desc': 'Miundombinu ya kidijitali iliyopangwa kwa ajili ya biashara ya kisasa.',
    'page.sekela.title': 'Sekela APIS',
    'page.sekela.desc': 'Unganisha biashara yako na mtandao wetu thabiti wa API.',
    'page.developers.title': 'Wasanidi',
    'page.developers.desc': 'Nyaraka na zana kwa ubora wa kihandisi.',
    'page.blog.title': 'Blogu',
    'page.blog.desc': 'Maarifa kutoka mstari wa mbele wa Teknolojia ya Mishipa.',
    'page.customers.title': 'Wateja',
    'page.customers.desc': 'Hadithi za mafanikio kutoka kwa washirika wetu wa kimataifa.',
    'page.company.title': 'Kampuni',
    'page.company.desc': 'Kuhusu Wakala wa Utafiti wa Teknolojia ya Mishipa na Uhandisi wa Hali ya Juu.',

    // Services
    'services.ai': 'Suluhisho za AI',
    'services.app_dev': 'Uundaji wa Programu',
    'services.data_science': 'Sayansi ya Data',
    'services.automation': 'Uendeshaji wa Biashara',
    'services.web_dev': 'Uundaji wa Tovuti',
    'services.about': 'Kuhusu Sisi',
  },
  PL: {
    // Navbar
    'nav.products': 'Produkty',
    'nav.solutions': 'Rozwiązania',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Programiści',
    'nav.blog': 'Blog',
    'nav.customers': 'Klienci',
    'nav.company': 'Firma',
    'nav.start_building': 'Zacznij budować',
    'nav.contact_sales': 'Kontakt z działem sprzedaży',
    'nav.latest_posts': 'Najnowsze posty',
    'nav.categories': 'Kategorie',
    'nav.read_all': 'Wszystkie wiadomości',

    // Hero
    'hero.badge': 'Technologie Neuronowe v2.0',
    'hero.title_part1': 'Zaawansowana Architektura AI',
    'hero.title_part2': 'dla Biznesu',
    'hero.description': 'Antera projektuje i wdraża wyrafinowane sieci neuronowe oraz zautomatyzowaną infrastrukturę dostosowaną do wysokiej skali operacyjnej.',
    'hero.cta_start': 'Zacznij Budować',
    'hero.cta_demo': 'Poproś o Demo',

    // Footer
    'footer.description': 'Agencja Badań nad Zaawansowanymi Technologiami Neuronowymi i Inżynierią. Niestandardowa architektura AI zaprojektowana dla absolutnej skali operacyjnej.',
    'footer.services': 'Usługi',
    'footer.company': 'Firma',
    'footer.contact': 'Kontakt',
    'footer.download': 'POBIERZ ANTERA',
    'footer.app_store': 'APP STORE',
    'footer.google_play': 'GOOGLE PLAY',
    'footer.privacy': 'Prywatność',
    'footer.terms': 'Regulamin',
    'footer.lang': 'JĘZYK',

    // Page Placeholders
    'page.products.title': 'Produkty',
    'page.products.desc': 'Poznaj nasze najnowocześniejsze rozwiązania AI i danych.',
    'page.solutions.title': 'Rozwiązania',
    'page.solutions.desc': 'Dostosowana infrastruktura cyfrowa dla nowoczesnego przedsiębiorstwa.',
    'page.sekela.title': 'Sekela APIS',
    'page.sekela.desc': 'Połącz swoją firmę z naszą solidną siecią API.',
    'page.developers.title': 'Programiści',
    'page.developers.desc': 'Dokumentacja i narzędzia dla doskonałości inżynierskiej.',
    'page.blog.title': 'Blog',
    'page.blog.desc': 'Spostrzeżenia z czołówki technologii neuronowych.',
    'page.customers.title': 'Klienci',
    'page.customers.desc': 'Historie sukcesu naszych globalnych partnerów.',
    'page.company.title': 'Firma',
    'page.company.desc': 'O Agencji Badań nad Zaawansowanymi Technologiami Neuronowymi i Inżynierią.',

    // Services
    'services.ai': 'Rozwiązania AI',
    'services.app_dev': 'Tworzenie aplikacji',
    'services.data_science': 'Data Science',
    'services.automation': 'Automatyzacja Biznesu',
    'services.web_dev': 'Tworzenie stron internetowych',
    'services.about': 'O nas',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

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
