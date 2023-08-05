import React from 'react';
import "./header.scss"
import logo from '../../img/logo.png';
import { Link, useLocation} from 'react-router-dom'
import { useRoute } from '../../shared_/hooks/useRoute';
import { useState } from 'react';
import { ThemeContext } from '../../../ThemeProvider';
import { useContext } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as any;
  console.log("context");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="header__top">
        <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '70.5882px' }}/>
        <div className="theme-box">
          <p>{theme}</p>
          <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} />
        </div>
        </div>
        
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu__hamburger" onClick={toggleMenu}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </div>
          
          <ul className="menu__list">
            <li className="menu__item">
            <Link className={useRoute('/') ? 'active' : ''} to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/assortment') ? 'active' : ''} to="/assortment">
                Assortment
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/about') ? 'active' : ''} to="/about">
                About us
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/admin') ? 'active' : ''} to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        
        </nav>
        
      </div>
      
      <div className="header__bottom">
        <div className="header__background">
          <div className="header__text">
            Handmade Leather
            Accessories 
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

