import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";
import "../styles/portfolioStyles.css";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
import image4 from "../../src/assets/image4.png";
import image5 from "../../src/assets/image5.png";
import image6 from "../../src/assets/image6.png";
import image7 from "../../src/assets/movieSearch.png";
import image8 from "../../src/assets/candidateSearch.png";
import image9 from "../../src/assets/image9.png";
import image10 from "../../src/assets/image10.png";
import image11 from "../../src/assets/carProgram.png";
import image12 from "../../src/assets/battleship.png";
import image13 from "../../src/assets/csci1203A6.png";
import image14 from "../../src/assets/csci1113A5.png";
import image15 from "../../src/assets/csci1111A7.png";
import image16 from "../../src/assets/csci1111A5.png";
import image17 from "../../src/assets/csci1113A6.png";
import grocerySytsem from "../../src/assets/grocerySystem.png";
import bookSearch from "../../src/assets/bookSearch.png";
import cirlceCI from "../../src/assets/cirlceCI.png";
import coinToss from "../../src/assets/coinToss.png";
import hangman from "../../src/assets/hangman.png";
import blog from "../../src/assets/blog.png";
import gitActions from "../../src/assets/gitActions.png";
import selenium from "../../src/assets/selenium.png";
import tDD1 from "../../src/assets/tDD1.png";
import reactTDD from "../../src/assets/reactTDD.png";
import employease from "../../src/assets/employease.png";
import monteCarloSimulation from "../../src/assets/monteCarloSimulation.png";

import socialMediaVideo from "../../src/assets/socialMediaAPI.mp4";
import vehicleVideo from "../../src/assets/module8.mp4";
import employeeDB from "../../src/assets/employeeDB.mp4";

const pernProjects = [
  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: image9,
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },
  {
    title: "Kanban Board",
    description:
      "A full-stack Kanban board application with JWT-based authentication and PostgreSQL database management.",
    image: image10,
    gitLink: "https://github.com/TheReal4m4d3u5/kanbanBoard",
    deployed: "https://kanbanboard-552l.onrender.com",
    tags: ["Node.js", "Express.js", "React", "JWT", "PostgreSQL", "Render"],
  },
];

const backendSystemsProjects = [
  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: image9,
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },

  {
    title: "Grocery Inventory Backend System",
    description:
      "A Java backend system for grocery store workflow modeling, including inventory tracking, cart operations, checkout processing, and purchase history.\n\nBuilt with object-oriented design principles and layered architecture to create a modular, extensible system.\n\n• Inventory tracking\n• Cart and checkout workflows\n• Purchase history\n• OOP-driven design",
    image: grocerySytsem,
    gitLink: "https://github.com/TheReal4m4d3u5/GroceryManagementSystem_ICS372",
    tags: ["Java", "OOP", "Backend Systems", "Software Design"],
  },

  {
    title: "Kanban Board",
    description:
      "A full-stack Kanban board application with JWT-based authentication and PostgreSQL database management.",
    image: image10,
    gitLink: "https://github.com/TheReal4m4d3u5/kanbanBoard",
    deployed: "https://kanbanboard-552l.onrender.com",
    tags: ["Node.js", "Express.js", "React", "JWT", "PostgreSQL", "Render"],
  },

  {
    video: socialMediaVideo,
    title: "Social Media API",
    description:
      "A Social Network API with RESTful endpoints for managing users, thoughts, and reactions.",
    videoText: "Click to watch video",
    gitLink: "https://github.com/TheReal4m4d3u5/socialNetworkAPI",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful API"],
  },

  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Employee DB",
    description:
      "Built a backend-style system for managing room availability, reservations, and booking workflows.\n• Modeled reservation state and availability constraints across multiple rooms\n• Implemented booking logic with validation to prevent conflicts and overbooking\n• Designed structured data handling for reservations and room inventory\n• Simulates real-world reservation workflows and system state transitions  ",
    gitLink: "https://github.com/TheReal4m4d3u5/EmployeeDB",
    tags: ["Node.js", "Inquirer", "PostgreSQL", "Command-Line Application"],
  },

  {
    title: "Hotel Reservation System",
    description:
      "A command-line application for managing hotel room bookings and availability.",
    image: coinToss,
    gitLink: "https://github.com/TheReal4m4d3u5/hotelReservationSystem",
    tags: ["Python", "Command-Line Application"],
  },
];

const mathModelingProjects = [
  {
    title: "MatDrive",
    description: `A mathematical simulation engine modeling vehicle movement across a graph-based city.

Implements linear algebra transformations, parametric motion, and stochastic decision processes to simulate path selection and orientation.

Applies mathematical modeling within a structured system to produce realistic, state-driven movement.

• Graph-based navigation
• Linear algebra transformations
• Parametric motion modeling
• Stochastic decision-making`,

    image: image11,
    gitLink: "https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car",
    tags: [
      "MATLAB",
      "Linear Algebra",
      "Graph Theory",
      "Simulation",
      "Systems Design",
    ],
  },

  {
    title: "Event Probability Simulator",
    description:
      "Simulates random events and analyzes the distribution of results to determine if they appear uniformly random.",
    image: image16,
    gitLink: "https://github.com/TheReal4m4d3u5/csci_1111_assignment_5",
    tags: ["C", "Randomness", "Command-Line Application"],
  },
];

const mongoProjects = [
  {
    title: "EmployEase",
    description:
      "EmployEase is a job search and application tracker that integrates with The Muse API, allowing users to search for job opportunities and manage their applications in a streamlined manner. Built using the MERN stack, it offers personalized tracking and secure authentication for job seekers.",
    image: employease,
    gitLink: "https://github.com/TheReal4m4d3u5/EmployEase",
    deployed: "https://employease-hubi.onrender.com/",
    tags: [
      "React",
      "Node.js.js",
      "Express.js",
      "Node.js",
      "MongoDB Atlas",
      "Mongoose",
      "GraphQL",
      "The Muse API",
      "JWT",
      "Render",
      "GitHub Action",
      "Apollo Client",
      "MERN Stack",
    ],
  },
  {
    title: "Book Search Engine",
    description:
      "A full-stack application to search and save books using the Google Books API.",
    image: bookSearch,
    gitLink: "https://github.com/TheReal4m4d3u5/bookSearchEngine",
    deployed: "https://booksearchengine-5ikq.onrender.com",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "JWT",
      "MERN Stack",
    ],
  },
  {
    video: socialMediaVideo,
    title: "Social Media API",
    description:
      "A Social Network API with RESTful endpoints for managing users, thoughts, and reactions.",
    videoText: "Click to watch video",
    gitLink: "https://github.com/TheReal4m4d3u5/socialNetworkAPI",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful API"],
  },
  {
    title: "Tech Matchup App",
    description:
      "A full-stack web application that allows users to create matchups and vote for their favorite technologies.",
    image: bookSearch,
    gitLink: "https://github.com/TheReal4m4d3u5/bookSearchEngine",
    deployed: "https://booksearchengine-5ikq.onrender.com",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "MERN Stack",
    ],
  },
  {
    video: socialMediaVideo,
    title: "Student Statistics",
    description: "A back-end application to calculate student statistics.",
    videoText: "Click to watch video",
    gitLink: "https://github.com/TheReal4m4d3u5/studentStatisticsBack-End",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
];

const bddProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Maven",
      "Java",
      "Appium",
      "BDD",
      "Cucumber",
      "Chromedriver",
    ],
  },
];

const apiProjects = [
  {
    video: socialMediaVideo,
    title: "Social Media API",
    description:
      "Designed and implemented a RESTful backend system for managing users, posts, and reactions.\n\n• Built modular API architecture with Express and MongoDB\n• Implemented CRUD operations with structured data validation\n• Modeled relationships between users, posts, and reactions\n• Designed scalable API patterns for real-world social platforms",
    gitLink: "https://github.com/TheReal4m4d3u5/socialNetworkAPI",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful API"],
  },

  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: image9,
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },
];

const dataPipelineProjects = [
  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: image9,
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },

  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Employee DB",
    description:
      "A command-line application that allows business owners to manage and organize employee data efficiently.",
    gitLink: "https://github.com/TheReal4m4d3u5/EmployeeDB",
    tags: ["Node.js", "Inquirer", "PostgreSQL", "Command-Line Application"],
  },
];

const optimizationProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Maven",
      "Java",
      "Appium",
      "BDD",
      "Cucumber",
      "Chromedriver",
    ],
  },
];

const simulationProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Maven",
      "Java",
      "Appium",
      "BDD",
      "Cucumber",
      "Chromedriver",
    ],
  },
];

const forcastingProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Maven",
      "Java",
      "Appium",
      "BDD",
      "Cucumber",
      "Chromedriver",
    ],
  },
];

const seleniumProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Maven",
      "Java",
      "Appium",
      "BDD",
      "Cucumber",
      "Chromedriver",
    ],
  },
];

const ciCDProjects = [
  {
    title: "Production-Ready Social Media API (CI/CD Enabled)",
    description: `Developed a production-ready RESTful backend system with an end-to-end CI/CD pipeline, enabling automated testing, containerization, and deployment to modern cloud infrastructure.`,
    image: cirlceCI,
    gitLink: "https://github.com/TheReal4m4d3u5/cicd-demo",
    staging: "https://githubactionsci-cdsetup-staging.onrender.com",
    deployed: "https://github-actions-ci-cd-setup-9j9z.onrender.com",
    tags: [
      "CI/CD",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Production Deployment",
    ],
  },
  {
    title: "CI-CD Setup",
    description: `Full stack CI/CD deployment with git protections and staging and production environments.`,
    image: cirlceCI,
    gitLink:
      "https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main",
    staging: "https://githubactionsci-cdsetup-staging.onrender.com",
    deployed: "https://github-actions-ci-cd-setup-9j9z.onrender.com",
    tags: [
      "CI/CD",
      "CircleCI",
      "Staging",
      "Production Deployment",
      "Git Protections",
    ],
  },
  {
    title: "GitHub Actions CI-CD Setup",
    description: `Full stack deployment pipeline.`,
    image: gitActions,
    gitLink:
      "https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main",
    staging: "https://githubactionsci-cdsetup-staging.onrender.com",
    deployed: "https://github-actions-ci-cd-setup-9j9z.onrender.com",
    tags: [
      "CI/CD",
      "GitHub Actions",
      "Git Protections",
      "Staging Deployment",
      "Production Deployment",
    ],
  },
];

const pythonProjects = [
  {
    title: "Probabilistic Market Engine",
    description:
      "A statistical analysis and Monte Carlo simulation engine that models stock price behavior using historical data. Computes volatility, return distributions, and probabilistic forecasts to estimate future price ranges and risk.",
    image: monteCarloSimulation,
    gitLink: "https://github.com/TheReal4m4d3u5/MarketSim-Lite",
    tags: ["Python", "Statistics", "Simulation", "Forecasting"],
  },

  {
    title: "Shopping Cart Polymorphism",
    description:
      "A polymorphic shopping cart where different item types calculate prices uniquely.",
    image: coinToss,
    gitLink: "https://github.com/TheReal4m4d3u5/shoppingCartPolymorphism",
    tags: ["Python", "Polymorphism"],
  },
  {
    title: "Customer Room Reservations",
    description:
      "A system for hotel management to book rooms, check availability, and manage reservations.",
    image: coinToss,
    gitLink: "https://github.com/TheReal4m4d3u5/customerRoomReservations",
    tags: ["Python", "CSV", "JSON"],
  },
  {
    title: "Bank Account",
    description:
      "A command-line banking application for managing savings account deposits and withdrawals.",
    image: coinToss,
    gitLink: "https://github.com/TheReal4m4d3u5/bankAccount",
    tags: ["Python", "Command-Line Application"],
  },

  {
    title: "Hotel Reservation System",
    description:
      "A command-line application for managing hotel room bookings and availability.",
    image: coinToss,
    gitLink: "https://github.com/TheReal4m4d3u5/hotelReservationSystem",
    tags: ["Python", "Command-Line Application"],
  },
];

const tDDProjects = [
  {
    title: "Tech Quiz Test Suite",
    description:
      "A quiz application with comprehensive component and end-to-end testing.",
    image: tDD1,
    gitLink: "https://github.com/TheReal4m4d3u5/techQuizTestSuite",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Cypress",
      "MERN Stack",
    ],
  },

  {
    title: "Ensure React Components Render Properly",
    description:
      "A project that implements tests to ensure React components render correctly and match snapshots.",
    image: tDD1,
    gitLink:
      "https://github.com/TheReal4m4d3u5/ensureReactComponentsRenderProperly",
    tags: ["React", "Vitest", "React Testing Library", "Happy DOM", "Testing"],
  },
  {
    title: "Reactify Essentials TDD",
    description:
      "A React-based application with reusable components and a robust testing setup.",
    image: reactTDD,
    gitLink: "https://github.com/TheReal4m4d3u5/reactifyEssentialsTest",
    tags: [
      "React",
      "TypeScript",
      "Vitest",
      "React Testing Library",
      "Happy DOM",
      "TDD",
    ],
  },

  {
    title: "TDD Test Cases",
    description:
      "A project focusing on foundational skills in TDD and testing frameworks.",
    image: tDD1,
    gitLink: "https://github.com/TheReal4m4d3u5/tDDTestCases",
    tags: ["TDD", "Testing Frameworks", "JavaScript"],
  },
];

const matLabProjects = [
  {
    title: "MatDrive",
    description: `A mathematical simulation engine modeling vehicle movement across a graph-based city.

Implements linear algebra transformations, parametric motion, and stochastic decision processes to simulate path selection and orientation.

Applies mathematical modeling within a structured system to produce realistic, state-driven movement.

• Graph-based navigation
• Linear algebra transformations
• Parametric motion modeling
• Stochastic decision-making`,

    image: image11,
    gitLink: "https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car",
    tags: [
      "MATLAB",
      "Linear Algebra",
      "Graph Theory",
      "Simulation",
      "Systems Design",
    ],
  },
];

const sqlProjects = [
  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Employee DB",
    description:
      "A command-line application that allows business owners to manage and organize employee data efficiently.",
    gitLink: "https://github.com/TheReal4m4d3u5/EmployeeDB",
    tags: ["Node.js", "Inquirer", "PostgreSQL", "Command-Line Application"],
  },

  {
    title: "Kanban Board",
    description:
      "A full-stack Kanban board application with JWT-based authentication and PostgreSQL database management.",
    image: image10,
    gitLink: "https://github.com/TheReal4m4d3u5/kanbanBoard",
    deployed: "https://kanbanboard-552l.onrender.com",
    tags: ["Node.js", "Express.js", "React", "JWT", "PostgreSQL", "Render"],
  },
];

const javaProjects = [
  {
    title: "Grocery Inventory Backend System",
    description:
      "A Java backend system for grocery store workflow modeling, including inventory tracking, cart operations, checkout processing, and purchase history.\n\nBuilt with object-oriented design principles and layered architecture to create a modular, extensible system.\n\n• Inventory tracking\n• Cart and checkout workflows\n• Purchase history\n• OOP-driven design",
    image: grocerySytsem,
    gitLink: "https://github.com/TheReal4m4d3u5/GroceryManagementSystem_ICS372",
    tags: ["Java", "OOP", "Backend Systems", "Software Design"],
  },
];

const cProjects = [
  {
    title: "Card Dealer",
    description:
      "This program simulates a deck of playing cards, providing functionality to shuffle, deal cards, and display card details.",
    image: image15,
    gitLink: "https://github.com/TheReal4m4d3u5/csci_1111_assignment_7",
    tags: ["C", "Command-Line Application"],
  },

  {
    title: "Event Probability Simulator",
    description:
      "Simulates random events and analyzes the distribution of results to determine if they appear uniformly random.",
    image: image16,
    gitLink: "https://github.com/TheReal4m4d3u5/csci_1111_assignment_5",
    tags: ["C", "Randomness", "Command-Line Application"],
  },

  {
    title: "Functions and Command-Line Argument",
    description: "A demonstration of command-line arguments and functions.",
    image: image17,
    gitLink: "https://github.com/TheReal4m4d3u5/csci_1113_assignment_6",
    tags: ["C", "Command-Line Application"],
  },

  {
    title: "Car Calculator",
    description:
      "Calculates and outputs distances traveled by two cars under constant acceleration.",
    image: image14,
    gitLink: "https://github.com/TheReal4m4d3u5/csci_1113_assignment_5",
    tags: ["C", "Physics Simulation", "Command-Line Application"],
  },
];

const cppProjects = [
  {
    title: "Hangman",
    description: "A Hangman game written in C++",
    image: hangman,
    gitLink: "https://github.com/TheReal4m4d3u5/cPlusPlusHTP_18.12",
    tags: ["C++", "Command Line"],
  },
];

const fullStackProjects = [
  {
    title: "Weather App",
    description:
      "A full-stack weather dashboard application that retrieves and displays the current day and the 5-day weather forecast for various cities.",
    image: image2,
    gitLink: "https://github.com/TheReal4m4d3u5/WeatherAPP",
    deployed: "https://weatherapp-ew0q.onrender.com",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "OpenWeather API",
      "JSON",
      "Render",
    ],
  },
  {
    title: "Candidate Search",
    description:
      "A React-based front-end application that interfaces with the GitHub API to display and manage candidate profiles.",
    image: image8,
    gitLink: "https://github.com/TheReal4m4d3u5/candidateSearch",
    deployed: "https://funny-biscochitos-9e1673.netlify.app/",
    tags: ["React", "TypeScript", "GitHub API", "Netlify"],
  },
];

const javaScriptProjects = [
  {
    title: "Film Tracker",
    description:
      "A full-stack movie database search application where users can add films to a watch or seen list.",
    image: image7,
    gitLink: "https://github.com/TheReal4m4d3u5/movieSearch",
    deployed: "https://meek-cassata-691e1b.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
  },

  {
    title: "Bucket Checklist",
    description:
      "An application that allows users to create a checklist, rank items by priority, and mark them as completed.",
    image: image3,
    gitLink: "https://github.com/TheReal4m4d3u5/bucketList",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "React Profile",
    description:
      "A React-based single-page portfolio application that showcases a web developer’s skills and projects.",
    image: image6,
    gitLink: "https://github.com/TheReal4m4d3u5/reactPortfolio",
    deployed: "https://zesty-starlight-a7d6e2.netlify.app/",
    tags: ["React", "React Router", "Netlify"],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-Wraper1">
        <h1 className="portfilioHeaderText">My Portfolio</h1>
      </section>


<h4>Backend</h4>

      {/* Index Section */}
      <section className="index-Wraper">
        <div className="index-row">
          <h4>Backend</h4>
          <div className="sublist">
            <a href="#java">Java</a>
            <a href="#node">Node.js</a>
            <a href="#python">Python</a>
            <a href="#csharp">C#</a>
            <a href="#apis">REST APIs</a>
            <a href="#graphql">GraphQL</a>
            <a href="#auth">Auth / JWT</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Frontend</h4>
          <div className="sublist">
            <a href="#react">React</a>
            <a href="#javascript">JavaScript</a>
            <a href="#typescript">TypeScript</a>
            <a href="#htmlcss">HTML / CSS</a>
            <a href="#ui">Responsive UI</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Languages</h4>
          <div className="sublist">
            <a href="#java">Java</a>
            <a href="#javascript">JavaScript</a>
            <a href="#typescript">TypeScript</a>
            <a href="#python">Python</a>
            <a href="#csharp">C#</a>
            <a href="#c">C</a>
            <a href="#cpp">C++</a>
            <a href="#matlab">MATLAB</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Data Systems</h4>
          <div className="sublist">
            <a href="#sql">SQL</a>
            <a href="#postgresql">PostgreSQL</a>
            <a href="#mongodb">MongoDB</a>
            <a href="#sequelize">Sequelize</a>
            <a href="#mongoose">Mongoose</a>
            <a href="#pipelines">Data Pipelines</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Systems</h4>
          <div className="sublist">
            <a href="#distributed">Distributed</a>
            <a href="#architecture">Architecture</a>
            <a href="#performance">Performance</a>
            <a href="#reliability">Reliability</a>
            <a href="#caching">Caching</a>
            <a href="#queues">Queues</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Math & Modeling</h4>
          <div className="sublist">
            <a href="#mathModeling">Mathematical Modeling</a>
            <a href="#simulation">Simulation</a>
            <a href="#optimization">Optimization</a>
            <a href="#forecasting">Forecasting</a>
            <a href="#statistics">Statistics</a>
            <a href="#monteCarlo">Monte Carlo</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Embedded & Hardware</h4>
          <div className="sublist">
            <a href="#microcontrollers">Microcontrollers</a>
            <a href="#arduino">Arduino</a>
            <a href="#raspberryPi">Raspberry Pi</a>
            <a href="#fpga">FPGA</a>
            <a href="#circuits">Circuits</a>
            <a href="#electronics">Electronics</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Graphics & 3D</h4>
          <div className="sublist">
            <a href="#3DModeling">3D Modeling</a>
            <a href="#graphics">Graphics</a>
            <a href="#visualization">Visualization</a>
            <a href="#simulationGraphics">Simulation Graphics</a>
          </div>
        </div>

        <div className="index-row">
          <h4>DevOps & Infrastructure</h4>
          <div className="sublist">
            <a href="#cicd">CI/CD</a>
            <a href="#docker">Docker</a>
            <a href="#kubernetes">Kubernetes</a>
            <a href="#jenkins">Jenkins</a>
            <a href="#terraform">Terraform</a>
            <a href="#githubActions">GitHub Actions</a>
            <a href="#circleci">CircleCI</a>
            <a href="#render">Render</a>
            <a href="#netlify">Netlify</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Testing</h4>
          <div className="sublist">
            <a href="#tdd">TDD</a>
            <a href="#bdd">BDD</a>
            <a href="#selenium">Selenium</a>
            <a href="#cypress">Cypress</a>
            <a href="#vitest">Vitest</a>
            <a href="#rtl">React Testing Library</a>
          </div>
        </div>
        <div className="index-row">
          <h4>Observability</h4>
          <div className="sublist">
            <a href="#logging">Logging</a>
            <a href="#monitoring">Monitoring</a>
            <a href="#metrics">Metrics</a>
            <a href="#debugging">Debugging</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Security</h4>
          <div className="sublist">
            <a href="#auth">Authentication</a>
            <a href="#authorization">Authorization</a>
            <a href="#validation">Input Validation</a>
            <a href="#encryption">Encryption</a>
          </div>
        </div>
        <div className="index-row">
          <h4>Networking</h4>
          <div className="sublist">
            <a href="#http">HTTP</a>
            <a href="#tcp">TCP/IP</a>
            <a href="#dns">DNS</a>
            <a href="#loadbalancing">Load Balancing</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Concepts</h4>
          <div className="sublist">
            <a>Scalability</a>
            <a>Fault Tolerance</a>
            <a>Consistency</a>
            <a>Latency</a>
            <a>Throughput</a>
          </div>
        </div>

        <div className="index-row">
          <h4>Concurrency</h4>
          <div className="sublist">
            <a href="#async">Async / Await</a>
            <a href="#multithreading">Multithreading</a>
            <a href="#eventloop">Event Loop</a>
          </div>
        </div>
      </section>

      <div id="apis" className="mongoDBHeader">
        APIs
      </div>
      <div className="disclaimerWraper">
        <div className="disclaimer">
          Some deployments will take 1 to 15 mins to spin up if they haven't
          been in use
        </div>
      </div>

      <Row className="portfolioCards">
        {apiProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              videoText={project.videoText}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="dataPipelines" className="mongoDBHeader">
        Data Pipelines
      </div>
      <div className="disclaimerWraper">
        <div className="disclaimer">
          Some deployments will take 1 to 15 mins to spin up if they haven't
          been in use
        </div>
      </div>

      <Row className="portfolioCards">
        {dataPipelineProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              videoText={project.videoText}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="sql" className="mongoDBHeader">
        SQL
      </div>
      <div className="disclaimerWraper">
        <div className="disclaimer">
          Some deployments will take 1 to 15 mins to spin up if they haven't
          been in use
        </div>
      </div>

      <Row className="portfolioCards">
        {sqlProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              videoText={project.videoText}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="java" className="mongoDBHeader">
        Java
      </div>

      <Row className="portfolioCards">
        {javaProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              videoText={project.videoText}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="python" className="mongoDBHeader">
        Python
      </div>

      <Row className="portfolioCards">
        {pythonProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              videoText={project.videoText}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="matlab" className="mongoDBHeader">
        Matlab
      </div>

      <div className="filters">
        <button onClick={() => toggleFilter("Featured")}></button>
        <button onClick={() => toggleFilter("MATLAB")}></button>
      </div>

      <Row className="portfolioCards">
        {matLabProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="simulation" className="mongoDBHeader">
        Simulation
      </div>

      <div className="filters">
        <button onClick={() => toggleFilter("Featured")}></button>
        <button onClick={() => toggleFilter("backend")}></button>
      </div>

      <Row className="portfolioCards">
        {simulationProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="optimization" className="mongoDBHeader">
        Optimization
      </div>

      <Row className="portfolioCards">
        {optimizationProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="forcasting" className="mongoDBHeader">
        Forcasting
      </div>

      <Row className="portfolioCards">
        {forcastingProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      {/* <div id="cpp" className="mongoDBHeader">C++</div>

          {cppProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>

          ))} */}

      <div id="tdd" className="mongoDBHeader">
        TDD
      </div>

      <Row className="portfolioCards">
        {tDDProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="bdd" className="mongoDBHeader">
        BDD
      </div>

      <Row className="portfolioCards">
        {bddProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>

      <div id="cicd" className="mongoDBHeader">
        CI/CD DevOps
      </div>

      <div className="disclaimer">
        Some deployments will take 1 to 15 mins to spin up if they haven't been
        in use
      </div>

      <Row className="portfolioCards">
        {ciCDProjects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="cards">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              gitlink={project.gitLink}
              staginglink={project.staging}
              deployedlink={project.deployed}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
