import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav_brand">
        <Link to="/" className="nav_logo">
          <span>Piyush</span>
        </Link>
      </div>

      {/* <ul className={`nav_list ${isOpen ? 'show-menu' : 'nav_list'}`}>
        <li className="nav_item">
          <NavLink to="/" className="nav_link" onClick={toggleMenu}>Home</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/about" className="nav_link" onClick={toggleMenu}>About</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/services" className="nav_link" onClick={closeMenu}>Services</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/project" className="nav_link" onClick={closeMenu}>Project</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/contact" className="nav_link" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default Index;
