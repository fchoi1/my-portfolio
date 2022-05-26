const mongoose = require('mongoose');
const db = require('config/connections');

const myProjects = [
  {
    name: 'Jibber Jabber',
    Date: 'April 2022',
    technologies: ['react', 'Java', 'Python'],
    website: 'https://jibber-jabber-app.herokuapp.com/',
    github: 'https://github.com/fchoi1/Jibber-Jabber',
    description:
      'This is a a typical messenger that helps you find people and shoot a text to them in real time. You are presented with a login/signup page. Once you signup or login with your account, you will be redirected to the dashboard page. This will contain all of our recent chats where you can click on any of the chats and then you get redirected to the personal chat room where you send and receive the messages. On the dashboard page, you can search a a user by their name and the results will be displayed from where you can click on the contact and send him a message. We have used GraphQl for interacting with the MongoDb, mongoose ODM, Express for server framwork, Socket IO for sending and receiving messages in real time.',
    imageFolder: 'Jibber_Jabber',
    images: []
  },
  {
    name: 'PvZ RPG Game',
    Date: 'April 2015',
    technologies: ['Java', 'Animations'],
    github: 'https://github.com/fchoi1/Java-RGP-PVZ',
    description:
      'This is my first RPG Game created in Java. It uses keyboard controls and event has animations.',
    imageFolder: 'PvZ_RPG',
    override: true,
    images: []
  },
  {
    name: 'Bike Haven Store',
    Date: 'April 2015',
    technologies: ['Java', 'Animations'],
    website: 'https://bike-haven.herokuapp.com/',
    github: 'https://github.com/fchoi1/Bike-Haven',
    description:
      'An Online Bike Store 🚲 Bike Haven is built to facilite bike customers to make an informed decision.  Node.js and Express.js to create a RESTful API. Handlebars.js as the template engine. MySQL and the Sequelize ORM for the database. Used GET and POST routes for retrieving and adding new data. Useed Anime.js - a lightweight JavaScript animation library. Has a folder structure that meets the MVC paradigm. Included authentication (express-session and cookies). Protected API keys and sensitive information with environment variables. dotenv Used bcryp',
    imageFolder: 'Bike_Haven_Store',
    images: []
  },
  {
    name: 'Budget Tracker',
    Date: 'April 2015',
    technologies: ['Java', 'Animations'],
    website: 'https://fabio-budget-tracker.herokuapp.com/',
    github: 'https://github.com/fchoi1/budget-tracker',
    description:
      'This is a simple application to use MVC model with node js to connect to mongoDB access REST apis. This is an application to view a budget tracker where you can input transactions to track your spending. The focus of this assignement is PWA and offline functionality when connection is unstable. The website is still functional and works with or without internet connectivity with express. Techonologies mongoDB, PWA, express, MVC model, Heroku, service workers and cache.',
    imageFolder: 'Budget_Tracker',
    images: []
  },
  {
    name: 'Lidar Live streaming Robot',
    technologies: ['ROS', ' Linux/Terminal', 'Git', 'ROSJS', 'HTML'],
    github: 'https://github.com/fchoi1/Linabot',
    description:
      'A project I worked on at Linamar to design an automous robot that can deliver tool changes',
    imageFolder: 'LIDAR_Live_streaming_Robot',
    images: []
  },
  {
    name: 'Steward Platform Maze Game',
    technologies: [
      'C++',
      'OOP',
      'Solidworks 3D Modelling',
      'Mechanical Design',
      'Arduino',
      'IMU'
    ],
    website: 'test',
    github: 'https://github.com/fchoi1/stewart-platform',
    description:
      'A project that uses a microcontroller to control a steward platform which is a platform held by 6 actuators which enables this system to have 6 degrees of freedom. This was program in C++ and uses sensor data from an IMU (inertial measurement unit) to control tilt and z axis movement  ',
    imageFolder: 'Steward_Platform_Maze_Solver',
    images: []
  },
  {
    name: 'Warehouse Aerial Manipulator',
    technologies: ['Solidworks 3D Modelling', 'Mechanical Design', 'Arduino'],
    Date: 'March 2022',
    website: 'https://1drv.ms/p/s!Ap-4bV5caE3xdK1LdPpFxN_whmI?e=Gb9zD0',
    github: 'https://www.github.com/fchoi1/',
    description:
      'This was my fourth year design project. This is where me and my group designed a manipulator attached to a drone to be able to pick up small packages. The use case was for factories to move around small products and to be able to scan and keep track of product inventory. Since drones can cover 3D space, it makes it more efficient that ground robots and human labour.',
    imageFolder: 'Warehouse_Aerial_Manipulator',
    images: []
  },
  {
    name: 'Tech Blog',
    Date: 'March 2022',
    technologies: ['react', 'Python'],
    website: 'https://fabio-tech-blog.herokuapp.com/',
    github: 'https://github.com/fchoi1/tech-blog',
    description:
      'This is a simple application to use MVC moddel with node js to connect to sql database and access REST apis. This is an application to view a tech blog with users to create, edit and delete posts as well as add comments. Techonologies mysql2, dotenv, express, sequelize, MVC model.',
    imageFolder: 'Tech_Blog',
    images: []
  }
];

let myHistory = [
  {
    name: 'CGI Group',
    type: 'job',
    position: 'Technical Analyst',
    location: 'Markham, ON',
    startDate: 'Dec 2015',
    endDate: 'Apr 2016',
    description: [
      'Configured Atlassian suite tools for Jira, Bamboo, and Confluence.',
      'Programmed Ansible scripts used to automate environment setup and deployment.',
      ' Used terminal to read logs, debug errors, and restarting applications. ',
      'Worked with proof-of-concept applications for automatic alerts and log reading: Sumologic, and iMacros'
    ]
  },
  {
    name: 'Flex LTD',
    type: 'job',
    position: 'Software Development Co-op',
    location: 'Markham, ON',
    startDate: 'Sep 2016',
    endDate: 'Dec 2016',
    description: [
      'Integrated a task management software (SBM) with SVN/Eclipse to automatically include issue numbers with code commits',
      'Documented instructions for user setup for the software integration',
      'Configured integration setup with Jira Software as a cost-effective solution to SBM'
    ],
    link: ''
  },
  {
    name: 'Linamar',
    type: 'job',
    position: 'Mechanical Engineering Intern',
    location: 'Toronto, ON',
    startDate: 'May 2017',
    endDate: 'Aug 2017',
    description: [
      'Implemented Robert Operating System (ROS) for autonomous navigation for proof of concept on a Roomba Bot',
      'Integrated Raspberry Pi with iRobot Roomba and ssh for wireless configuration',
      ' Created simple web app for autonomous navigation using ROSJS and HTML'
    ],
    link: ''
  },
  {
    name: 'Canadian Solar',
    type: 'job',
    position: 'Mechanical Engineering Co-op ',
    location: 'Toronto, ON',
    startDate: 'Jan 2018',
    endDate: 'Apr 2018',
    description: [
      'Focused on proudction efficency by upgrading design on fixtures and jigs.',
      'Implemented a barcode camera system to improve visibility on barcodes on underside of panels',
      'Modelled new proof of concept ideas for electric charge stations for cars',
      'Designed custom blade holder used to cut insulated paper for solar panel wiring'
    ],
    link: ''
  },
  {
    name: 'Zero Gravity Labs',
    type: 'job',
    position: 'Innovation Developer',
    location: 'Toronto, ON',
    startDate: 'Sep 2018',
    endDate: 'Dec 2018',
    description: [
      'Researched data and created applications for face recognition technologies ',
      'Developed an IoT video streaming device using Raspberry Pi system to implement computer vision techniques on face data (Python, OpenCV)',
      'Designed infrastructure for sending and storing data to cloud (AWS)'
    ],
    link: ''
  },
  {
    name: 'Brevitas – Contractor for Sanofi',
    type: 'job',
    position: 'ITS Analyst',
    location: 'Toronto, ON',
    startDate: 'Apr 2021',
    endDate: 'Present',
    description: [
      'Tested and qualified benchtop equipment for data transfer into PI Historian',
      'Setup and configured data integration between MES and PI Historian software',
      'Managed 20,000+ PI Tags used for reading equipment data and ensure constant uptime and proper configuration'
    ],
    link: ''
  },
  {
    name: 'Univeristy of Toronto Continuing Studies ',
    type: 'other',
    position: 'Coding Bootcamp',
    location: 'Toronto, ON',
    startDate: 'Oct 2021',
    endDate: 'Present',
    description: [
      'Learned fundamentals and techniques in web development.',
      'Developed strong coding practices incuding MERN stack (MongoDB, ExpressJS, React, NodeJS) and GIT',
      'Implemented Front-end and Back-end systems for full stack applications in group environements. '
    ],
    link: ''
  },
  {
    name: 'Comp Sci, Comp Eng Courses',
    type: 'other',
    position: 'Highschool',
    location: 'Markham, ON',
    startDate: 'Sep 2014',
    endDate: 'Present',
    description: [
      'My First taste of computer engineering and computer science through school courses',
      'Program with both Java and Python using Object Oriented Programming.',
      'Wrote my first rpg game with custom animations in Java'
    ],
    link: ''
  }
];
