import { Outlet, Link } from 'react-router-dom'
import './App.css' 

import { useLangue } from "./context/LangueContext";

import logoImg from './assets/logo.png';

function App() {

  const { language, toggleLangue, t } = useLangue();

  return (
    <div className="app-container">
      {/* Ajout d'une classe 'navbar' */}
      <nav className="navbar">

        <Link to="/" className="logo-link">
          <img src={logoImg} alt="Logo Phénix" className="logo-img" /> 
        </Link>

        <div className="nav-links">
            <Link to="/projets">{t.navbar.projets}</Link>
            <Link to="/competence">{t.navbar.competences}</Link>
            <Link to="/cv">{t.navbar.cv}</Link>
            <Link to="/contact">{t.navbar.contact}</Link>


        <button 
          onClick={toggleLangue} 
          style={{
            marginLeft: '20px', 
            padding: '5px 10px', 
            cursor: 'pointer',
            fontSize: '1.2rem',
            background: 'transparent',
            border: '1px solid white',
            color: 'white',
            borderRadius: '5px'
          }}
        >
          {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </button>

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