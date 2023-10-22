import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Products from './Products';
import HomeBody from './HomeBody';
import Hello from './test';
import WhyUs from './WhyUs';
import Contact from './Contact';
import { Element } from 'react-scroll';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Element name='home-section' className='element'>
        <HomeBody></HomeBody>
      </Element>
      <Element name='about-section' className='element'>
        <About></About>
      </Element>
      <br></br><br></br>
      <Services></Services>
      <Hello></Hello>
      <Products></Products>
      <WhyUs></WhyUs>
      <br></br>
      <br></br>
      <Element name='contact-section' className='element'>
        <Contact></Contact>
      </Element>
      <Footer></Footer>
    </div>
  );
}

export default Home;
