import React from "react";
import "./About.css";
import pic from './images/3.jpg';
import mission from './images/mission.jpg';

export default function About() {
    return (
        <div className="container">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={pic} alt="Image" className="about-img" />
                    </div>
                    <div className="about-text">
                        <h3 className="about-heading">About us</h3>
                        <p className="about-paragraph">
                        At ScarMatrix, we are driven by a singular mission: to empower businesses with cutting-edge technology solutions that drive growth and enhance their digital presence. With a team of seasoned experts, we specialize in providing a comprehensive suite of IT services including Full Stack Development, Mobile App Development, Website Design and Development, and SEO Optimization.
                        </p>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <img src={mission} alt="Image" className="about-img" />
                    </div>
                    <div className="about-text">
                        <h3 className="about-heading">Our Mission</h3>
                        <p className="about-paragraph">
                        Our goal is to build a vibrant platform for coding enthusiasts to compete, learn, and grow. We provide an engaging and interactive experience, fostering creativity, collaboration, and healthy competition. Through our platform, users can enhance their problem-solving skills, challenge themselves, and evolve into proficient coders. We are committed to supporting educators in teaching coding fundamentals, contributing to the development of the next generation of tech professionals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
