import styles from './Projets.module.css';
import { mesProjets } from '../data/projets'; // On importe ta liste
import { Link } from 'react-router-dom';

function Projets() {
  return (
    <div className={styles.pageContainer}>
      
      <h1 className={styles.titre}>
        Mes <span className={styles.spanBleu}>Projets</span>
      </h1>

      <div className={styles.gridProjets}>
        
        {/* on boucle sur la liste */}
        {mesProjets.map((projet) => (
          
          <div key={projet.id} className={styles.card}>
            
            {/* L'image */}
            <div className={styles.imageContainer}>
              {projet.image ? (
                <img src={projet.image} alt={projet.titre} className={styles.projectImg} />
              ) : (
                <span style={{fontSize: '3rem'}}>🚀</span> // Emoji par défaut
              )}
            </div>

            <div className={styles.content}>
              <h2 className={styles.cardTitle}>{projet.titre}</h2>
              <p className={styles.cardDesc}>{projet.description}</p>
              
              {/* Liste des technos utilisées */}
              <div className={styles.tags}>
                {projet.technos.map((tech, index) => (
                  <span key={index} className={styles.tag}>#{tech}</span>
                ))}
              </div>
            </div>

            <Link to={`/projet/${projet.id}`} className={styles.githubBtn}>
              En savoir plus &rarr;
            </Link>

          </div>

        ))}

      </div>
    </div>
  )
}

export default Projets;