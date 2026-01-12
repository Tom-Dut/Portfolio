import styles from './Contact.module.css';
import { useLangue } from '../context/LangueContext';

function Contact() {

  const { t } = useLangue();

  const contacts = [
    {
      icon: "📧",
      titre: t.contact.emailPerso,
      texte: "tomdut3@gmail.com",
      lien: "mailto:tomdut3@gmail.com"
    },
    {
      icon: "🎓", 
      titre: t.contact.emailUni,
      texte: "tom_dutkiewicz@ens.univ-artois.fr",
      lien: "mailto:tom_dutkiewicz@ens.univ-artois.fr"
    },
    {
      icon: "💼", 
      titre: t.contact.linkedin,
      texte: "linkedin.com/in/tom-dutkiewicz",
      lien: "https://www.linkedin.com/in/tom-dutkiewicz/"
    },
    {
      icon: "💻", 
      titre: t.contact.github,
      texte: "github.com/Tom-Dut",
      lien: "https://github.com/Tom-Dut"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.grandTitre}>{t.contact.titre}</h1>
      
      <p className={styles.intro}>
        {t.contact.intro}
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