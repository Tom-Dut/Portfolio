import { Link } from 'react-router-dom'; //Pour faire des boutons
import styles from './Accueil.module.css';

function Accueil() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Titre */}
      <h1 className={styles.titre}>Bonjour, je me nomme Dutkiewicz Tom</h1>
      
      {/* présentation */}
      <p className={styles.presentation}>
        Étudiant en 2ème année de <strong>BUT Informatique</strong>, je souhaite continuer mes études dans cette voie pour travailler dans les metiers de l'Informatique
      </p>
      
      <p className={styles.description}>
        Ce portfolio a été créé avec <strong>React</strong> pour présenter mon travail.
        Vous y trouverez :
      </p>

      {/* Une liste des sections */}
      <div className={styles.sectionsGrid}>
        <div className={styles.sectionItem}>
          <h3>🚀 Mes Projets</h3>
          <p>Découvrez les applications et sites web que j'ai développés.</p>
          <Link to="/projets" className={styles.bouton}>Voir mes projets</Link>
        </div>

        <div className={styles.sectionItem}>
          <h3>📄 Mon Parcours</h3>
          <p>Consultez mon CV, mes compétences et mes expériences.</p>
          <Link to="/cv" className={styles.bouton}>Voir mon CV</Link>
        </div>

      {/* Contact*/}
        <div className={styles.sectionItem}>
          <h3>📬 Me Contacter</h3>
          <p>Une opportunité ou une question ? Écrivez-moi !</p>
          <Link to="/contact" className={styles.bouton}>Me contacter</Link>
        </div>


      </div>

    </div>
  )
}

export default Accueil;