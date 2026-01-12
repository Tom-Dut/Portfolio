import styles from './Competence.module.css';
import { FaJava, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa'; 
import { SiJavascript, SiMysql, SiIntellijidea, SiPhpstorm, SiPycharm, SiLaravel } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { useLangue } from '../context/LangueContext';



function Competences() {

  const { t } = useLangue();

  const langages = [
    { nom: "Java", icon: <FaJava /> },
    { nom: "Python", icon: <FaPython /> },
    { nom: "PHP", icon: <FaPhp /> },
    { nom: "Laravel", icon: <SiLaravel /> },
    { nom: `JavaScript (${t.competences.personnel})`, icon: <SiJavascript /> },
    { nom: `React (${t.competences.personnel})`, icon: <FaReact /> },
    { nom: "HTML5", icon: <FaHtml5 /> },
    { nom: "CSS3", icon: <FaCss3Alt /> },
    { nom: "SQL", icon: <SiMysql /> },
  ];

  const outils = [
    { nom: "Git", icon: <FaGitAlt /> },
    { nom: "GitHub", icon: <FaGithub /> },
    { nom: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { nom: "PHPStorm", icon: <SiPhpstorm /> },
    { nom: "PyCharm", icon: <SiPycharm /> },
    { nom: "VS Code", icon: <VscVscode /> },  
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t.competences.titre}</h1>
      <p className={styles.intro}>
        {t.competences.intro}
      </p>

      {/* Section 1 : Langages */}
      <h2 className={styles.categoryTitle}>{t.competences.titreLangages}</h2>
      <div className={styles.grid}>
        {langages.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <span>{skill.nom}</span>
          </div>
        ))}
      </div>

      {/* Section 2 : Outils */}
      <h2 className={styles.categoryTitle}>{t.competences.titreOutils}</h2>
      <div className={styles.grid}>
        {outils.map((tool, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{tool.icon}</div>
            <span>{tool.nom}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competences;