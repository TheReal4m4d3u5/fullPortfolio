import React from 'react';
import '../styles/tagStyles.css';

// FontAwesome Icons
import { FaReact, FaJs, FaDatabase, FaLock, FaGithub, FaNodeJs, FaJava, FaChrome } from 'react-icons/fa';

// Simple Icons
import {
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiRender,
  SiOpenapiinitiative,
  SiMongodb,
  SiGraphql,
  SiApollographql,
  SiSelenium,
  SiApachemaven,
  SiAppium,
  SiCucumber
} from 'react-icons/si';

// Material Design Icons
import { MdApi } from 'react-icons/md';

// Remix Icons
import { RiTestTubeLine } from 'react-icons/ri';

const iconMap = {
  'Node.js': <FaNodeJs />,
  'Express.js': <SiExpress />,
  'React': <FaReact />,
  'PostgreSQL': <SiPostgresql />,
  'Sequelize': <SiSequelize />,
  'RESTful API': <MdApi />,
  'JWT': <FaLock />,
  'Ticketmaster API': <SiOpenapiinitiative />,
  'OpenWeather API': <SiOpenapiinitiative />,
  'Render': <SiRender />,
  'JavaScript': <FaJs />,
  'Database': <FaDatabase />,
  'Authentication': <FaLock />,
  'GitHub': <FaGithub />,
  'MongoDB': <SiMongodb />,
  'GraphQL': <SiGraphql />,
  'Apollo Server': <SiApollographql />,
  'Selenium': <SiSelenium />,
  'Maven': <SiApachemaven />,
  'Java': <FaJava />,
  'Appium': <SiAppium />,
  'BDD': <RiTestTubeLine />,
  'Cucumber': <SiCucumber />,
  'Chromedriver': <FaChrome />,
};

const Tag = ({ name }) => {
  return (
    <div className="tag">
    <div className="tabIcon">{iconMap[name]}</div> <span className="tag-text">{name}</span>
    </div>
  );
};

export default Tag;