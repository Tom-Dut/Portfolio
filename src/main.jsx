// Dans src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Accueil from './pages/Accueil.jsx'
import Projets from './pages/Projets.jsx'
import Competence from './pages/Competence.jsx'
import CV from './pages/CV.jsx'
import './index.css' 
import Contact from './pages/Contact.jsx'
import ProjetDetail from './pages/ProjetDetail.jsx';

import { LangueProvider } from './context/LangueContext.jsx'; 

import { createHashRouter, RouterProvider } from 'react-router-dom'

// router
const router = createHashRouter([
  {
    path: "/",         // L'URL de base
    element: <App />,  // Le composant "cadre" qui contient tout
    children: [
      {
        path: "/",     // L'URL exacte
        element: <Accueil /> // Le composant à afficher
      },
      {
        path: "/projets", // Quand l'URL est /projets
        element: <Projets /> // On affiche le composant Projets
      },

      {
        path: "/competence", // Quand l'URL est /competence
        element: <Competence /> // On affiche le composant Compétence
      },


      {
        path: "/cv",      // Quand l'URL est /cv
        element: <CV />  // On affiche le composant CV
      },
      { path: "/contact", 
        element: <Contact /> },

      { path: "/projet/:id", element: <ProjetDetail /> }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangueProvider>
      <RouterProvider router={router} />
    </LangueProvider>
  </React.StrictMode>,
)