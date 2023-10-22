import React, { useState } from 'react';
import '../components/Navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToAbout = () => {
    closeMenu(); // Close the menu when a link is clicked
    scroller.scrollTo('about-section', {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  const scrollToContact = () => {
    closeMenu(); // Close the menu when a link is clicked
    scroller.scrollTo('contact-section', {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  const scrollToHome = () => {
    closeMenu(); // Close the menu when a link is clicked
    scroller.scrollTo('home-section', {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container nav-fixed'>
          <Link to="/" className='navbar-logo' style={{ textDecoration: 'none', color: 'white' }}>
            Scar <span>Matrix</span>
          </Link>
          <div className='menu-icon' onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            <li className='nav-item'>
              <ScrollLink
                to='home-section'
                spy={true}
                smooth={true}
                duration={100}
                className='nav-link'
                onClick={scrollToHome}
              >
                Home
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='about-section'
                spy={true}
                smooth={true}
                duration={100}
                className='nav-link'
                onClick={scrollToAbout}
              >
                About Us
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='contact-section'
                spy={true}
                smooth={true}
                duration={100}
                className='nav-link'
                onClick={scrollToContact}
              >
                Contact
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <Link to='/career' className='nav-link'>
                Career
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
