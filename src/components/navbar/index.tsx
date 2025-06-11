import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
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
                <div className="nav_toggle" onClick={closeMenu}>
                    {isOpen ? <IoClose /> : <TbMenu2 /> }
                    
                </div>
    </nav>
  );
};

export default Index;
