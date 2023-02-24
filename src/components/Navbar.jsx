import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo__link">
        Bookstore
        <span>
          CMS
        </span>
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
    </nav>
  );
}

export default Navbar;
