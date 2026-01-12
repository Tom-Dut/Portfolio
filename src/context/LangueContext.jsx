import { createContext, useState, useContext } from 'react';
import { traduction } from '../data/traduction';

// On crée le contexte
const LangueContext = createContext();

// composant qui va englober le site
export function LangueProvider({ children }) {
  const [language, setLanguage] = useState('fr'); // Français par défaut

  const changeLanguage = (newLang) => {
    // On verifie que la langue existe
    if (traduction[newLang]) {
      setLanguage(newLang);
    }
  };

  // On renvoie : la langue actuelle, la fonction pour changer, et les textes (t)
  return (
    <LangueContext.Provider value={{ language, changeLanguage, t: traduction[language] }}>
      {children}
    </LangueContext.Provider>
  );
}

// raccourci pour utiliser le contexte facilement
export const useLangue = () => useContext(LangueContext);