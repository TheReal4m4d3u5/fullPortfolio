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
            <div className="aboutTextHeader">Full-Stack Software & Electrical Engineer | Systems, Data, Graphics, and Embedded Engineering</div>
            <div className="aboutText">
              <p>
                I am a multidisciplinary engineer with over 10 years of experience building reliable, scalable systems across software and hardware domains. My work spans backend and frontend development, embedded systems, and low-level engineering, allowing me to design and implement complete end-to-end solutions—from user interfaces to distributed infrastructure and physical devices.
              </p>

              <p>
                I specialize in backend systems, API design, and data-intensive applications, with a strong emphasis on reliability, performance, and correctness. On the frontend, I build clean, responsive interfaces that connect seamlessly to complex systems. I bring a deep foundation in mathematics and statistics, applying analytical thinking to areas such as data modeling, optimization, and system design.
              </p>
              <p>
                Beyond traditional software development, I have hands-on experience with microcontrollers, FPGA development, circuit design, and hardware-software integration. I also work with 3D modeling and graphics, enabling me to bridge the gap between digital systems and real-world applications, including visualization and simulation.
              </p>
              <p>
                My engineering approach is systems-driven: I think in terms of architecture, constraints, and tradeoffs across the entire stack—from low-level hardware interactions to large-scale distributed systems. I focus on building solutions that are not only functional, but efficient, maintainable, and scalable.
              </p>
              <p>
                Currently, I am building ZeroLedger, a platform focused on modeling and analyzing CO₂ footprints through data-driven workflows, combining backend engineering, mathematical modeling, and system-level design.
              </p>
              <p>
                I am particularly interested in roles that sit at the intersection of software, hardware, and systems engineering—where deep technical understanding, data accuracy, and thoughtful design are critical.
              </p>
            </div>

          </div>
        </section>
      </div>


    </section>
  );
};

export default About;