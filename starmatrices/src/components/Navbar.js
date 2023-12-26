import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink, scroller } from 'react-scroll';

function Navbar() {

  const [menuOpen, setmenuOpen] = useState(false)

  const closeMenu = () => {
    setmenuOpen(false);
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
    <nav>
      <Link className='logo'>Scar<span>Matrics</span></Link>
      <div className='menu' onClick={() => {
        setmenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
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
    </nav>
  )
}

export default Navbar
