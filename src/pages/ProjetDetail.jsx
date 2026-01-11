import { useParams, Link } from 'react-router-dom';
import { mesProjets } from '../data/projets'; // On récupère données
import { useState } from 'react';
import styles from './ProjetDetail.module.css'; 

function ProjetDetail() {
  //On récupère l'ID depuis l'URL (ex: "1")
  const { id } = useParams();

  // On cherche le projet correspondant dans ta liste
  const projet = mesProjets.find((p) => p.id === parseInt(id));

  const [imageZoom, setImageZoom] = useState(null);

  // Sécurité 
  if (!projet) {
    return <h2 style={{color: 'white', textAlign: 'center'}}>Projet introuvable !</h2>;
  }

  return (
    <div className={styles.pageContainer}>
      
      {/* Bouton Retour */}
      <Link to="/projets" className={styles.backBtn}>← Retour aux projets</Link>

      <h1 className={styles.titre}>{projet.titre}</h1>
      
      <div className={styles.contentGrid}>
        
        {/* Colonne Gauche : Image */}
        <div className={styles.imageBox}>
           {projet.image ? (
              <img src={projet.image} alt={projet.titre} className={styles.imgGrand} onClick={() => setImageZoom(projet.image)} />
            ) : (
              <div className={styles.placeholder}>🚀</div>
            )}
        </div>

        {/* Colonne Droite : Infos */}
        <div className={styles.infoBox}>
          <h3>Description</h3>
          <p>{projet.description}</p>
          
          <h3>Technologies</h3>
          <div className={styles.tags}>
            {projet.technos.map((tech, i) => (
              <span key={i} className={styles.tag}>{tech}</span>
            ))}
          </div>

          <a 
            href={projet.githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className={styles.githubBtn}
          >
            Voir le code sur GitHub 🔗
          </a>
        </div>

      </div>



      {projet.galerie && (
        <div className={styles.galerieSection}>
          <h3>📸 Plus d'images</h3>
          <div className={styles.galerieGrid}>
            {projet.galerie.map((img, index) => (
              <img key={index} src={img} alt={`Aperçu ${index}`} className={styles.galerieImg} onClick={() => setImageZoom(img)} />
            ))}
          </div>
        </div>
      )}

      {imageZoom && (
        <div className={styles.modalOverlay} onClick={() => setImageZoom(null)}>
          <div className={styles.modalContent}>
            <img src={imageZoom} alt="Zoom" className={styles.modalImg} />
            <button className={styles.closeBtn} onClick={() => setImageZoom(null)}>×</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ProjetDetail;