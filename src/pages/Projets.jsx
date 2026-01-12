import styles from './Projets.module.css';
import { mesProjets } from '../data/projets';
import { Link } from 'react-router-dom';
import { useLangue } from '../context/LangueContext';

function Projets() {

  const { t } = useLangue();
  

  return (
    <div className={styles.pageContainer}>
      
      <h1 className={styles.titre}>
        <span className={styles.spanBleu}>{t.projets.titre}</span>
      </h1>

      <div className={styles.gridProjets}>
        
        {/* on boucle sur la liste */}
        {mesProjets.map((projet) => {

          const cleTraduction = `projet_${projet.id}`;
          const infosTraduites = t.detailsProjets?.[cleTraduction];

          const titreAffiche = infosTraduites?.titre || projet.titre;
          const descAffiche = infosTraduites?.description || projet.description;

          return (

            <div key={projet.id} className={styles.card}>
              
              {/* L'image */}
              <div className={styles.imageContainer}>
                {projet.image ? (
                  <img src={projet.image} alt={projet.titre} className={styles.projectImg} />
                ) : (
                  <span style={{fontSize: '3rem'}}>🚀</span>
                )}
              </div>

              <div className={styles.content}>
                <h2 className={styles.cardTitle}>{titreAffiche}</h2>
                <p className={styles.cardDesc}>{descAffiche}</p>

                {/* Liste des technos utilisées */}
                <div className={styles.tags}>
                  {projet.technos.map((tech, index) => (
                    <span key={index} className={styles.tag}>#{tech}</span>
                  ))}
                </div>
              </div>

              <Link to={`/projet/${projet.id}`} className={styles.githubBtn}>
                {t.projets.savoir} &rarr;
              </Link>

            </div>
          );
        }
      ) 
    }

      </div>
    </div>
  )
}

export default Projets;