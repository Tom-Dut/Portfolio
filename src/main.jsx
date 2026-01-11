// Dans src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Accueil from './pages/Accueil.jsx'
import Projets from './pages/Projets.jsx'
import CV from './pages/CV.jsx'
import './index.css' 
import Contact from './pages/Contact.jsx'
import ProjetDetail from './pages/ProjetDetail.jsx';

// route
const router = createBrowserRouter([
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
        path: "/cv",      // Quand l'URL est /cv
        element: <CV />  // On affiche le composant CV
      },
      { path: "/contact", 
        element: <Contact /> },

      { path: "/projet/:id", element: <ProjetDetail /> }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)