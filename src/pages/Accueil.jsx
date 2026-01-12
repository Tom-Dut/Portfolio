import { Link } from 'react-router-dom'; //Pour faire des boutons
import styles from './Accueil.module.css';
import { useLangue } from '../context/LangueContext';

function Accueil() {

  const { t } = useLangue();

  return (
    <div className={styles.pageContainer}>
      
      {/* Titre */}
      <h1 className={styles.titre}>{t.accueil.titre}</h1>

      {/* présentation */}
      <p className={styles.presentation}>
        {t.accueil.intro}
      </p>
      
      <p className={styles.description}>
        {t.accueil.react}
      </p>
    

      {/* Sections */}
      <div className={styles.sectionsGrid}>
        <div className={styles.sectionItem}>
          <h3>{t.accueil.projet}</h3>
          <p>{t.accueil.accrocheProjet}</p>
          <Link to="/projets" className={styles.bouton}>{t.accueil.clickProjet}</Link>
        </div>

        <div className={styles.sectionItem}>
          <h3>{t.accueil.parcour}</h3>
          <p>{t.accueil.accrocheParcours}</p>
          <Link to="/cv" className={styles.bouton}>{t.accueil.clickParcours}</Link>
        </div>

      {/* Contact*/}
        <div className={styles.sectionItem}>
          <h3>{t.accueil.contact}</h3>
          <p>{t.accueil.accrocheContact}</p>
          <Link to="/contact" className={styles.bouton}>{t.accueil.clickContact}</Link>
        </div>


      </div>

    </div>
  )
}

export default Accueil;