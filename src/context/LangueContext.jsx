// src/context/LangueContext.jsx
import { createContext, useState, useContext } from 'react';
import { traduction } from '../data/traduction';

// 1. On crée le contexte
const LangueContext = createContext();

// 2. On crée le composant qui va englober ton site
export function LangueProvider({ children }) {
  const [language, setLanguage] = useState('fr'); // Français par défaut

  const toggleLangue = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  // On renvoie : la langue actuelle, la fonction pour changer, et les textes (t)
  return (
    <LangueContext.Provider value={{ language, toggleLangue, t: traduction[language] }}>
      {children}
    </LangueContext.Provider>
  );
}

// 3. Un petit raccourci pour utiliser le contexte facilement
export const useLangue = () => useContext(LangueContext);