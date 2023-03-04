import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo__link">
          Bookstore CMS
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              BOOKS
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/categories" className="nav__link">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>

      <div className="avatar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
      </div>
    </nav>
  );
}

export default Navbar;
