import React from "react";
import "./About.css";
import pic from './images/3.jpg';
import mission from './images/mission.jpg';

export default function About() {
    return (
        <div className="container">
            <section className="about-container">
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
                    <div className="about-text">
                        <h3 className="about-heading">Our Mission</h3>
                        <p className="about-paragraph">
                            Our mission is to create an open platform for programming
                            enthusiasts to compete in coding competitions. We strive to provide
                            our users with a well-designed, interactive, and fun experience that
                            taps into their creativity and helps them learn. Through our
                            platform, we hope to foster an environment of collaboration and
                            competition, one where programmers can engage in problem-solving,
                            challenge their skills, and become better coders in the process. In
                            addition, we aim to support educators in their quest to teach
                            students the fundamentals of coding and help create a new generation
                            of tech professionals.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={mission} alt="Image" className="about-img" />
                    </div>
                </div>
            </section>
        </div>
    );
}
