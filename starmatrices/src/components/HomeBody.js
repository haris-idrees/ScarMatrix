import React, { useState, useEffect } from 'react';
import './HomeBody.css';
import pic from './images/meeting.jpg';
import pic1 from './images/4.jpg';
import pic2 from './images/soft.png';

function HomeBody() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the index after 30 seconds
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000); // 30 seconds interval

        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, []);

    function prevImage() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Ensure positive index
    }

    function nextImage() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }

    return (
        <div className='homecontainer'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
                        <img src={pic} className="d-block w-100" alt="..." style={{ maxWidth: '100%', width: '100%' , height: '400px'}} />
                    </div>
                    <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
                        <img src={pic2} className="d-block w-100" alt="..." style={{ maxWidth: '100%', width: '100%' , height: '400px'}}/>
                        
                    </div>
                    <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
                        <img src={pic1} className="d-block w-100" alt="..." style={{ maxWidth: '100%', width: '100%' , height: '400px'}}/>
                        
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" onClick={prevImage}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" onClick={nextImage}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </div>
    );
}

export default HomeBody;
