import React from 'react';
import './Services.css';
import pic from './images/web.png';
import pic2 from './images/seo.png';
import dev from './images/mobo.png';
import full from './images/scra.png';
import and from './images/android.png';

function Services() {
  return (
    <>
      <h1 className='heading_serv'>Services</h1>
      <div className='services'>
        <div className="circular-card bounce">
          <div className="circle">
            <div className="content">
              <img className='photo' src={pic} alt="Product 1" />
              <br></br>
              <h2 className='temp'>Web Development</h2>
              <p className='para'>"Our web development team crafts custom solutions that ensure your website not only looks stunning but also performs flawlessly on all devices.</p>
            </div>
          </div>
        </div>

        <div className="circular-card bounce"> {/* Add bounce class here */}
          <div className="circle">
            <div className="content">
              <img className='photo' src={pic2} alt="Product 1" />
              <br></br>
              <h2 className='temp'>SEO</h2>
              <p className='para'>Supercharge your online visibility with our SEO services. Our experienced team employs cutting-edge strategies to boost your website's rankings and maximize your online presence.</p>
            </div>
          </div>
        </div>

        <div className="circular-card bounce"> {/* Add bounce class here */}
          <div className="circle">
            <div className="content">
              <img className='photo' src={and} alt="Product 1" />
              <br></br>
              <h2 className='temp'>Mobile applications</h2>
              <p className='para'>We create top-notch mobile apps for iOS, Android, and cross-platform solutions, ensuring seamless user experiences to keep your business connected with your audience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services'>
        <div className="circular-card bounce">
          <div className="circle">
            <div className="content">
              <img src={full} alt="Product 1" />
              <br></br>
              <h2 className='temp'>Data Analysis and Web Scraping</h2>
              <p className='para'>Our data analysis and web scraping services offer valuable insights and data-driven solutions for informed decision-making. From market research to competitor analysis, we've got you covered.</p>
            </div>
          </div>
        </div>

        <div className="circular-card bounce">
          <div className="circle">
            <div className="content">
              <img src={full} alt="Product 1" />
              <br></br>
              <h2 className='temp'>Data Analysis and Web Scraping</h2>
              <p className='para'>"Our data analysis and web scraping services offer valuable insights and data-driven solutions for informed decision-making. From market research to competitor analysis, we've got you covered."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
