import { useParams, Link } from 'react-router-dom';
import { mesProjets } from '../data/projets'; 
import { useState } from 'react';
import styles from './ProjetDetail.module.css'; 
import { useLangue } from '../context/LangueContext';


function ProjetDetail() {
  //On récupère l'ID depuis l'URL
  const { id } = useParams();

  // On cherche le projet correspondant dans la liste
  const projet = mesProjets.find((p) => p.id === parseInt(id));

  const [imageZoom, setImageZoom] = useState(null);

  // Sécurité 
  if (!projet) {
    return <h2 style={{color: 'white', textAlign: 'center'}}>Projet introuvable !</h2>;
  }

  const { t } = useLangue();
  const cleTraduction = `projet_${projet.id}`; // Permet de récupérer la clé de traduction
  const infosTraduites = t.detailsProjets?.[cleTraduction];
  const titreAffichage = infosTraduites?.titre || projet.titre; // si pas de traduction, on prend le titre par défaut
  const descAffichage = infosTraduites?.description || projet.description; // si pas de traduction, on prend la description par défaut


  return (
    <div className={styles.pageContainer}>
      
      {/* Bouton Retour */}
      <Link to="/projets" className={styles.backBtn}>{t.projetsDetail.retour}</Link>

      <h1 className={styles.titre}>{titreAffichage}</h1>
      
      <div className={styles.contentGrid}>
        
        {/* Colonne Gauche : Image */}
        <div className={styles.imageBox}>
           {projet.image ? (
              <img 
                src={projet.image} 
                alt={titreAffichage} 
                className={styles.imgGrand} 
                onClick={() => setImageZoom(projet.image)} />
            ) : (
              <div className={styles.placeholder}>🚀</div>
            )}
        </div>

        {/* Colonne Droite : Infos */}
        <div className={styles.infoBox}>
          <h3>{t.projetsDetail.description}</h3>
          <p>{descAffichage}</p>

          <h3>{t.projetsDetail.techno}</h3>
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
            {t.projetsDetail.gitHUb}
          </a>
        </div>

      </div>



      {projet.galerie && (
        <div className={styles.galerieSection}>
          <h3>{t.projetsDetail.plusImage}</h3>
          <div className={styles.galerieGrid}>
            {projet.galerie.map((img, index) => (
              <img 
              key={index} 
              src={img} 
              alt={`Aperçu ${index}`} 
              className={styles.galerieImg} 
              onClick={() => setImageZoom(img)} />
            ))}
          </div>
        </div>
      )}

      {imageZoom && (
        <div className={styles.modalOverlay} onClick={() => setImageZoom(null)}>
          <div className={styles.modalContent}>
            <img 
              src={imageZoom} 
              alt="Zoom" 
              className={styles.modalImg} />
            <button 
            className={styles.closeBtn} 
            onClick={() => setImageZoom(null)}>
            ×</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ProjetDetail;