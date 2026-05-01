import React from 'react';
import profilePhoto from '../assets/myPhoto.jpg'; // Ensure this path matches where your image is stored

import '../styles/aboutStyles.css';


const About = () => {
  return (


    <section id="aboutHome">


      <div className="about">
        <section className="photoSection">
          <img src={profilePhoto} alt="Profile" className="profilePhoto mb-4" />
        </section>

        <section className="aboutTextSection">
          <div className="aboutTextWraper">
            <div className="aboutTextHeader">Backend & Systems Engineer | APIs, Data, Reliability</div>
            <div className="aboutText">
              <p>
                Software Engineer focused on building reliable backend systems and scalable data workflows, with over 10 years of experience delivering high-quality solutions in production environments.
              </p>

              <p>
                My work centers on API design, data validation, system reliability, and performance optimization across large-scale applications. I bring a strong foundation in mathematics and statistics, applying analytical thinking to ensure data integrity and correctness in complex systems.
              </p>
              <p>
                In addition to backend development, I have experience working close to hardware and embedded systems, giving me a systems-level perspective that spans from low-level interactions to distributed application design.
              </p>
              <p>
                Currently, I am building ZeroLedger, a platform focused on modeling and analyzing CO₂ footprint through data-driven workflows, combining backend engineering with applied mathematical modeling.
              </p>
              <p>
                I am particularly interested in backend, platform, and distributed systems roles where reliability, data accuracy, and system design are critical.
              </p>

            </div>

          </div>
        </section>
      </div>


    </section>
  );
};

export default About;