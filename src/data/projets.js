import imgLenSynphony from '../assets/LenSynphony.png';
import imgLenSynphony2 from '../assets/lensymphony2.png';
import imgLenSynphony3 from '../assets/lensymphony3.png';
import imgBollywood from '../assets/bollywwod.png';
import bollywood2 from '../assets/bollywood2.png';
import bollywood3 from '../assets/bollywood3.png';
import imgPacman from '../assets/pacman.png';
import imgPacman1 from '../assets/PacmanMegaGomme.png';
import cocktail from '../assets/cocktail.png';
import cocktail2 from '../assets/cocktail2.png';
import cocktail3 from '../assets/cocktail3.png';
import bomberman from '../assets/bomberman.png';
import bomberman2 from '../assets/bomberman2.png';
import bomberman3 from '../assets/Bomberman3.png';
import portfolio from '../assets/portfolio.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';




export const mesProjets = [
  {
    id: 1,
    titre: "LenSynphony",
    description: "Site web codé en PHP simulant un site avec des partitions et des arrangements pouvant être supprimé , ajouté, modifié , observé. Il possède également un système de rôle.",
    technos: ["PHP", "Blade"],
    githubUrl: "https://github.com/Tom-Dut/LenSynphony",
    image: imgLenSynphony,    

    galerie:[
      imgLenSynphony2,
      imgLenSynphony3
    ]

  },
  {
    id: 2,
    titre: "Site Bollywood",
    description: "Site sur le thème Bollywood codé en PHP fait en 2 jours avec un groupe de travail aléatoire. Il permet d'écouter la musique, de les liker et de suivre d'autres utilisateurs. Il y a un systeme de recommandation. On peut créer , modifier , supprimer et afficher les films. ",
    technos: ["PHP", "Blade"],
    githubUrl: "https://github.com/Tom-Dut/Bolly",
    image: imgBollywood,

    galerie:[
      bollywood2,
      bollywood3
    ]

  },
  {
    id: 3,
    titre: "PacMan",
    description: "Jeu du PacMan codé en java. Les fantômes sont codés selon leurs personnalités et le jeu possède les différentes fonctionnalités de PacMan comme les MegaPacGommes ou les fruits.",
    technos: ["Java"],
    githubUrl: "https://github.com/Tom-Dut/pacman.git",
    image: imgPacman,

    galerie :[
      imgPacman1
    ]

  },
  {
    id: 4,
    titre: "QuizzCocktail",
    description: "Site fait en python et en flask. Le principe est de trouver les ingrédients d'un cocktail que le site nous propose. Après chaque réussite, le joueur peut s'enregistrer dans un tableau des scores.",
    technos: ["Python", "Flask"],
    githubUrl: "https://github.com/Tom-Dut/QuizzCocktail",
    image: cocktail,

    galerie :[
      cocktail2,
      cocktail3
    ]

  },

  {
    id: 5,
    titre: "Bomberman",
    description: "Jeu du Bomberman codé en java et en fxml permettant de jouer une partie de Bomberman. Il reprend le système des différentes bombes et des monstres présents pour nous tuer.",
    technos: ["Java", "FXML"],
    githubUrl: "https://github.com/Tom-Dut/Bomberman",
    image: bomberman,

    galerie :[
      bomberman2,
      bomberman3
    ]

  },

  {
    id: 6,
    titre: "Portfolio",
    description: "Mon portfolio comportant différents projets que j'ai effectué. On y retrouve également les moyens de me contacter et mon CV.",
    technos: ["JavaScript", "React"],
    githubUrl: "https://github.com/Tom-Dut/Portfolio",
    image: portfolio,

    galerie :[
      portfolio2,
      portfolio3
    ]

  },

];