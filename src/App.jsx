import { Outlet, Link } from 'react-router-dom'
import './App.css' 

import { useLangue } from "./context/LangueContext";

import logoImg from './assets/logo.png';

function App() {

  const { language, changeLanguage, t } = useLangue();

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


        <div style={{ marginLeft: '20px', display: 'flex', gap: '10px' }}>
              
              {/* Bouton FR */}
              <button 
                onClick={() => changeLanguage('fr')} 
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  opacity: language === 'fr' ? 1 : 0.5, 
                  transition: '0.3s'
                }}
                title="Français"
              >
                🇫🇷
              </button>

              {/* Bouton EN */}
              <button 
                onClick={() => changeLanguage('en')} 
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  opacity: language === 'en' ? 1 : 0.5,
                  transition: '0.3s'
                }}
                title="English"
              >
                🇬🇧
              </button>

              {/* Bouton ES*/}
              <button 
                onClick={() => changeLanguage('es')} 
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  opacity: language === 'es' ? 1 : 0.5,
                  transition: '0.3s'
                }}
                title="Español"
              >
                🇪🇸
              </button>

            </div>

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