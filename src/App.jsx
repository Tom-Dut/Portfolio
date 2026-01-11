// Dans : src/App.jsx
import { Outlet, Link } from 'react-router-dom'
import './App.css' // On s'assure que ce fichier est importé

import logoImg from './assets/logo.png';

function App() {
  return (
    <div className="app-container">
      {/* Ajout d'une classe 'navbar' */}
      <nav className="navbar">

        <Link to="/" className="logo-link">
          <img src={logoImg} alt="Logo Phénix" className="logo-img" /> 
        </Link>

        <div className="nav-links">
            <Link to="/projets">Projets</Link>
            <Link to="/cv">Mon CV</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Ajout d'une classe 'main-content' */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App