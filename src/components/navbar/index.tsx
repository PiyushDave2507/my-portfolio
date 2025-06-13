import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { navLinks } from '../../utils/components';
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);


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

      <ul className={`nav_list ${isOpen ? 'show-menu' : 'nav_list'}`}>

                    {
                        navLinks.map((index) => (
                            <li className="nav_item">
                                <NavLink to={index.path} className='nav_link' onClick={closeMenu}>
                                    {index.name}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
    </nav>
  );
};

export default Index;
