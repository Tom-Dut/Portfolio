import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.titre}>Me Contacter</h1>
      
      <p className={styles.intro}>
        N'hésitez pas à me contacter pour une opportunité de stage, 
        d'alternance ou juste pour échanger !
      </p>

      <div className={styles.contactGrid}>
        
        {/* Mail */}
        <a href="mailto:tomdut3@gmail.com" className={styles.contactCard}>
          📧 Envoyer un mail sur mon adresse personnelle 
        </a>

        {/* Mail Universitaire*/}
        <a href="mailto:tom_dutkiewicz@ens.univ-artois.fr" className={styles.contactCard}>
          📧 Envoyer un mail sur mon adresse universitaire
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/tom-dutkiewicz/" 
          target="_blank" // target permet d'ouvrir dans un nouvel onglet
          rel="noreferrer" // Pour des raisons de sécurité
          className={styles.contactCard}
        >
          💼 Mon LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/existePasEncore" 
          target="_blank" 
          rel="noreferrer" 
          className={styles.contactCard}
        >
          💻 Mon GitHub
        </a>

      </div>
    </div>
  )
}

export default Contact;