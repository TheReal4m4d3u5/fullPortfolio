import React from "react";
import "../styles/resumeStyles.css";
import Tag from "../components/Tag";

const coreTechnologies = ["Java", "JavaScript", "Python", "C#", "SQL"];

const databases = ["PostgreSQL", "MongoDB", "MySQL", "Oracle"];

const backendApis = ["REST APIs", "Node.js", "Express", "ASP.NET", "GraphQL"];

const testingAutomation = [
  "Selenium",
  "Cucumber",
  "Appium",
  "TestNG",
  "JUnit",
  "REST Assured",
  "Cypress",
  "Jest",
];

const devOps = [
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "CircleCI",
  "Bamboo",
  "Maven",
  "Terraform",
];

const tools = ["Git"];

const Systems = ["Distributed systems", "data workflows", "system reliability"];

const cloudSystems = ["AWS", "Azure", "Terraform"];

const methodologies = ["Agile", "BDD", "TDD", "SDLC"];

const containers = ["Docker", "Kubernetes"];

const Resume = () => {
  return (
    <div className="resume-page">
      <section className="mainResumeContent">
        {/* Download */}
        <div className="resumeLinks">
          <a href="/Avery Jacobson.pdf" download className="link-button">
            Download Resume
          </a>
        </div>

        {/* Summary */}
        <section className="professional-section">
          <h3 className="resumeHeaders">Professional Summary</h3>
          <p>
            Software Engineer with 10+ years of experience building scalable
            backend systems and production APIs in high-reliability
            environments.
          </p>

          <p>
            Experienced in distributed systems, CI/CD pipelines, and cloud
            infrastructure, with hands-on experience building and deploying
            applications using Docker, Kubernetes, and Terraform Proven ability
            to improve system reliability, automate deployments, and optimize
            performance in production environments.
          </p>

          <p>
            Currently expanding expertise in DevOps and platform engineering,
            with a focus on building resilient and observable systems.
          </p>
        </section>

        {/* Skills */}
        <section className="professional-section">
          <h3 className="resumeHeaders">Languages</h3>
          <div className="skills">
            {coreTechnologies.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Backend & APIs</h3>
          <div className="skills">
            {backendApis.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Cloud & Systems</h3>
          <div className="skills">
            {cloudSystems.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">DevOps & CI/CD</h3>
          <div className="skills">
            {devOps.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Containers & Orchestration</h3>
          <div className="skills">
            {containers.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Databases</h3>
          <div className="skills">
            {databases.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Testing & Automation</h3>
          <div className="skills">
            {testingAutomation.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Methodologies</h3>
          <div className="skills">
            {methodologies.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>

          <h3 className="resumeHeaders">Tools</h3>
          <div className="skills">
            {tools.map((skill) => (
              <Tag key={skill} name={skill} />
            ))}
          </div>


        </section>

        {/* Experience */}
        <section className="professional-section">
          <h3 className="resumeHeaders">Professional Experience</h3>

          <div className="job">
            <h4>Founder, CTO</h4>
            <p>ZeroLedger – Minneapolis, MN | 2025 – Present</p>
            <ul>
              <li>
                Founded and operate an LLC delivering web and automation
                solutions.
              </li>
              <li>
                Designed and deployed full-stack platforms supporting API-driven
                workflows.
              </li>
              <li>
                Built backend services for data processing, validation, and
                system reliability.
              </li>
              <li>
                Implemented CI/CD pipelines improving delivery speed and
                stability.
              </li>
              <li>
                Led system architecture, product roadmap, and automation
                strategy.
              </li>
            </ul>
          </div>

          <div className="job">
            <h4>Senior Software Engineer</h4>
            <p>Wells Fargo – Minneapolis, MN | 2020 – 2024</p>
            <ul>
              <li>
                Led automation strategy across financial systems improving
                release confidence.
              </li>
              <li>
                Built scalable automation frameworks for web and mobile
                platforms.
              </li>
              <li>
                Developed tools for API validation, test data management, and
                CI/CD integration.
              </li>
              <li>
                Integrated automated testing into pipelines enabling continuous
                delivery.
              </li>
              <li>
                Validated financial data integrity through database and API
                testing.
              </li>
              <li>
                Collaborated across engineering and product teams to improve
                system quality.
              </li>
            </ul>
          </div>

          <div className="job">
            <h4>Senior Software Technician</h4>
            <p>Stratasys – Eden Prairie, MN | 2017 – 2019</p>
            <ul>
              <li>
                Improved automation workflows by integrating development and QA
                tools.
              </li>
              <li>Developed automated test cases for industrial systems.</li>
              <li>Performed API testing and validation.</li>
              <li>Trained interns and new hires on automation systems.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Software Technician</h4>
            <p>Rockwell Collins – Cedar Rapids, IA | 2017</p>
            <ul>
              <li>
                Contributed to development and testing of flight-critical
                systems.
              </li>
              <li>Enhanced internal tools using automation scripts.</li>
              <li>Configured automated test pipelines.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="professional-section">
          <h3 className="resumeHeaders">Education</h3>

          <ul>
            <li>
              <strong>B.S. Computer Science</strong> (Minor: Industrial and
              Applied Mathematics)
              <br />
              Metropolitan State University — Expected 2027
            </li>

            <li>
              Professional Certificate in Full Stack Web Development
              <br />
              University of Minnesota
            </li>

            <li>
              A.A.S. in Engineering & Computer Science
              <br />
              Normandale Community College
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="contact-section">
          <h3 className="resumeHeaders">Contact</h3>
          <ul>
            <li>Email: averyajacobson@gmail.com</li>
            <li>Phone: 952-594-9290</li>
            <li>Location: Minneapolis, MN / Remote</li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Resume;
