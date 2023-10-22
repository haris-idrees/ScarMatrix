import React from 'react';
import './Whys.css';
import whyImage from './images/why.png';

function WhyUs() {
  return (
    <div className='container'>
      <div className='left'>
        <h1 className='heading_why'>Why Choose Us</h1>
        <div className='container_why'>
          <h3 className='head'>Customized Solutions</h3>
          <p className='put'>Our solutions are tailored to meet your specific business needs, ensuring you get exactly what you envision.</p>

          <h3 className='head'>Experienced Team</h3>
          <p className='put'>Our team comprises seasoned professionals with a diverse range of expertise in IT and digital marketing. </p>

          <h3 className='head'>Transparent Communication</h3>
          <p className='put'>Throughout the project, you'll have clear insights into progress and milestones.</p>

          <h3 className='head'>Results-Driven Approach</h3>
          <p className='put'>We measure our success by the impact our solutions have on your business growth and online visibility.</p>
        </div>
      </div>

      <div className='right'>
        <img src={whyImage} alt='image' />
      </div>
    </div>
  );
}

export default WhyUs;
