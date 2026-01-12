import { useState } from 'react';
import styles from './CV.module.css';

import cvFrImg from '../assets/cv-fr.png';
import cvFrPdf from '../assets/cv-fr.pdf';
import cvEnImg from '../assets/cv-en.png';
import cvEnPdf from '../assets/cv-en.pdf';
import { useLangue } from '../context/LangueContext';


function CV() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('fr'); // Par défaut en français


  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  // On choisit le bon fichier selon la langue
  const currentImage = lang === 'fr' ? cvFrImg : cvEnImg;
  const currentPdf = lang === 'fr' ? cvFrPdf : cvEnPdf;
  const currentTitle = lang === 'fr' ? "Version Française" : "English Version";

  const { t } = useLangue();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.titre}>{t.cv.titre}</h1>

      {/* Petit texte explicatif */}
      <p style={{color: '#ccc', marginBottom: '1rem'}}>
        {t.cv.explication}
      </p>

      {/* LE CARROUSEL  */}
      <div className={styles.langIndicator}>{currentTitle}</div>

      <div className={styles.carouselContainer}>
        
        {/* Flèche Gauche */}
        <button className={styles.arrowButton} onClick={toggleLang}>
          &lt; {/* Symbole < */}
        </button>

        {/* L'image centrale */}
        <div className={styles.apercuContainer} onClick={() => setIsOpen(true)}>
          <img src={currentImage} alt="CV Aperçu" className={styles.cvImageMini} />
        </div>

        {/* Flèche Droite */}
        <button className={styles.arrowButton} onClick={toggleLang}>
          &gt; {/* Symbole > */}
        </button>

      </div>

      <br />

      {/* BOUTON TÉLÉCHARGER  */}
      <a 
        href={currentPdf} 
        download={lang === 'fr' ? "CV_Tom_FR.pdf" : "CV_Tom_EN.pdf"} 
        className={styles.btnDownload}
      >
        📥 {t.cv.telecharger} ({lang === 'fr' ? 'FR' : 'EN'})
      </a>

      {/*  (ZOOM) */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>&times;</button>
          <img 
            src={currentImage} 
            alt="CV Grand Format" 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

    </div>
  )
}

export default CV;