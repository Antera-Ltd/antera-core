
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'SW' | 'PL';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.sekela_apis': 'Sekela APIS',
    'nav.developers': 'Developers',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.start_building': 'Start building',
    'nav.contact_sales': 'Contact sales',
    'hero.title': 'Frontier AI. In your hands.',
    'hero.subtitle': 'ANTERA helps organizations build, automate, and scale through AI-powered solutions, custom infrastructure tuning, and deep technical engineering.',
    'footer.description': 'Advanced Neural Technologies and Engineering Research Agency. Custom AI architecture designed for absolute operational scale.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'cta.title': 'Build, customize, and deploy tailored AI solutions with complete control.',
  },
  SW: {
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.sekela_apis': 'Sekela APIS',
    'nav.developers': 'Watengenezaji',
    'nav.blog': 'Blogu',
    'nav.customers': 'Wateja',
    'nav.company': 'Kampuni',
    'nav.start_building': 'Anza kujenga',
    'nav.contact_sales': 'Wasiliana na mauzo',
    'hero.title': 'AI ya Kisasa. Mikononi mwako.',
    'hero.subtitle': 'ANTERA husaidia mashirika kujenga, kujiendesha, na kupanuka kupitia suluhisho zinazoendeshwa na AI, marekebisho ya miundombinu maalum, na uhandisi wa kina wa kiufundi.',
    'footer.description': 'Shirika la Utafiti wa Teknolojia ya Juu ya Neural na Uhandisi. Usanifu wa AI maalum ulioundwa kwa kiwango kamili cha utendaji.',
    'footer.services': 'Huduma',
    'footer.company': 'Kampuni',
    'footer.contact': 'Mawasiliano',
    'cta.title': 'Jenga, rekebisha, na weka suluhisho za AI zilizobinafsishwa kwa udhibiti kamili.',
  },
  PL: {
    'nav.products': 'Produkty',
    'nav.solutions': 'Rozwiązania',
    'nav.sekela_apis': 'Sekela APIS',
    'nav.developers': 'Programiści',
    'nav.blog': 'Blog',
    'nav.customers': 'Klienci',
    'nav.company': 'Firma',
    'nav.start_building': 'Zacznij budować',
    'nav.contact_sales': 'Kontakt ze sprzedażą',
    'hero.title': 'Frontier AI. W Twoich rękach.',
    'hero.subtitle': 'ANTERA pomaga organizacjom budować, automatyzować i skalować się dzięki rozwiązaniom opartym na sztucznej inteligencji, niestandardowemu dostrajaniu infrastruktury i głębokiej inżynierii technicznej.',
    'footer.description': 'Agencja Zaawansowanych Technologii Neuronowych i Badań Inżynieryjnych. Niestandardowa architektura AI zaprojektowana z myślą o absolutnej skali operacyjnej.',
    'footer.services': 'Usługi',
    'footer.company': 'Firma',
    'footer.contact': 'Kontakt',
    'cta.title': 'Buduj, dostosowuj i wdrażaj szyte na miarę rozwiązania AI z pełną kontrolą.',
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
