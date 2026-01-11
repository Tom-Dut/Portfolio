import styles from './Contact.module.css';

function Contact() {

  const contacts = [
    {
      icon: "📧",
      titre: "Email Personnel",
      texte: "tomdut3@gmail.com",
      lien: "mailto:tomdut3@gmail.com"
    },
    {
      icon: "🎓", 
      titre: "Email Universitaire",
      texte: "tom_dutkiewicz@ens.univ-artois.fr",
      lien: "mailto:tom_dutkiewicz@ens.univ-artois.fr"
    },
    {
      icon: "💼", 
      titre: "LinkedIn",
      texte: "linkedin.com/in/tom-dutkiewicz",
      lien: "https://www.linkedin.com/in/tom-dutkiewicz/"
    },
    {
      icon: "💻", 
      titre: "GitHub",
      texte: "github.com/Tom-Dut",
      lien: "https://github.com/Tom-Dut"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.grandTitre}>Me Contacter 📬</h1>
      
      <p className={styles.intro}>
        N'hésitez pas à me contacter pour une opportunité de stage, 
        d'alternance ou juste pour échanger !
      </p>

      <div className={styles.contactGrid}>
        {contacts.map((info, index) => (
          <a 
            key={index} 
            href={info.lien} 
            target="_blank" 
            rel="noreferrer" 
            className={styles.contactCard}
          >
            {/* L'icône à gauche */}
            <div className={styles.iconBox}>
              {info.icon}
            </div>

            {/* Le texte à droite */}
            <div className={styles.infoBox}>
              <span className={styles.titreCard}>{info.titre}</span>
              <span className={styles.texteVisible}>{info.texte}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact;