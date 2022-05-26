import React, { createContext, useContext, useState } from 'react';

//instatiate global state object empty
const projectContext = createContext();
const { Provider } = projectContext;

const ProjectProvider = ({ value = [], ...props }) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  }

  const images = importAll(
    require.context('../assets/images/projects/', true, /\.(avif|jpe?g|svg)$/)
  );

  const myProjects = [
    {
      name: 'Jibber Jabber',
      Date: 'April 2022',
      technologies: [
        'React',
        'Express',
        'NodeJS',
        'MongoDB',
        'Socket IO',
        'Material UI',
        'GraphQL'
      ],
      website: 'https://jibber-jabber-app.herokuapp.com/',
      github: 'https://github.com/fchoi1/Jibber-Jabber',
      description:
        'This is a simple chat app where users can register/login to message other users online. The homepage contains a custom designed logo and the option to signup or login. Once authenticated, you will be redirected to the dashboard page. This will contain all of our recent chats where you can click on any of the chats and then you get redirected to the personal chat room where you send and receive the messages. ',
      imageFolder: 'Jibber_Jabber',
      descriptionShort:
        'This is a chat app where users can send and recieve real time messages. Includes functional user login and registration',
      role: 'I was in charge of implementing Socket IO server and functions for users to see real time messages. I also developed front-end components including the chat list, active chat and searchable user list using a mix of Material UI frameworks',
      roadBlocks:
        'Since this was a group project, merge conflicts occurred frequently with multiple members working on the same features without knowing. Learning new technologies such as Socket IO and trying to integrate the socket server with the back end graphql server.',
      solution:
        'To solve issues with members double-dipping on the same issues or features, we had frequent slack updates to clearly understand what was being worked on. We would also have meetings together to identify who was the best group/individual suitable to solve that task. For integrating Socket IO, we had pair programming sessions to read over the documentation and online resources, help catch mistakes, and to verify any issues with the implementation. ',
      features: ['Real time', 'Live Notifications', 'Responsive'],
      keywords: [''],
      images: []
    },
    {
      name: 'PvZ RPG Game',
      Date: 'April 2015',
      technologies: ['Java', 'Animations', 'Hsa Console'],
      github: 'https://github.com/fchoi1/Java-RGP-PVZ',
      description:
        'This was my first RPG Game created in Java. It uses keyboard controls to play. Contains animated fighting scenes, boss fights, and upgradable player. This project taught me the fundamentals of any programming language and this is where the journey began!',
      imageFolder: 'PvZ_RPG',
      images: [],
      descriptionShort:
        'This is my first RPG Game created in Java. It uses keyboard controls to play. Contains animated fighting scenes, boss fights and upgradable player.',
      role: 'This was a solo project from high school. The task was to develop an RPG game that included boss fights, developer cheat codes, and upgradable stats for players. I programmed the game logic and included visuals and animations to the game',
      roadBlocks:
        'For this project, the minimum requirement was to be able to display static photos. However, I wanted to take it one step further and try to have animations or moving images. At the time, I was inexperienced with Java and using animations was a complex topic.',
      solution:
        'Since I was unfamiliar with any animation libraries, it was hard to find an efficient solution. I realized that a video/animation were just many images being displayed one after the other at a certain frame rate.  I did a manual process of finding an animation and saving each frame image. I then stored these frames in seperate folders and used a loop to loop through the images to create enemy and player animations.',
      features: ['Interactive', 'Visual', 'Game'],
      keywords: ['']
    },
    {
      name: 'Bike Haven Store',
      Date: 'April 2015',
      technologies: [
        'NodeJS',
        'SQL',
        'ORM',
        'MVC',
        'Handlebars',
        'Express',
        'JWT'
      ],
      website: 'https://bike-haven.herokuapp.com/',
      github: 'https://github.com/fchoi1/Bike-Haven',
      description:
        'An Online Bike Store 🚲 Bike Haven is built to facilite bike customers to make an informed decision.  Node.js and Express.js to create a RESTful API. Handlebars.js as the template engine. MySQL and the Sequelize ORM for the database. Used GET and POST routes for retrieving and adding new data. Useed Anime.js - a lightweight JavaScript animation library. Has a folder structure that meets the MVC paradigm. Included authentication (express-session and cookies). Protected API keys and sensitive information with environment variables. dotenv Used bcryp',
      imageFolder: 'Bike_Haven_Store',
      images: [],
      descriptionShort:
        'A full stack application that sells bikes online. Users login/register accounts and browse the bike catalogs and add items to their wishlist. ',
      role: 'I was in charge of designing the database models and also specific CRUD operations routes to the models. I also implemented a user modal where users are able to update their profile via username, password and even avatar images.',
      roadBlocks:
        'This was a group project using git and github. The features and issues were divided among the group members. However, some features were dependant or linked to each other. Depending on the availability of each group member, some were not able to start or make progress on their tasks due to dependent features not being completed. There were many scheduling conflicts that occurred which resulted in many meetings not consisting of the entire group.',
      solution: '',
      features: ['Responsive', 'User Authentication'],
      keywords: ['']
    },
    {
      name: 'Budget Tracker',
      Date: 'April 2015',
      technologies: ['NodeJS', 'PWA', 'Cache', 'Express', 'MongoDB', 'NoSQL'],
      website: 'https://fabio-budget-tracker.herokuapp.com/',
      github: 'https://github.com/fchoi1/budget-tracker',
      description:
        'This is a simple application to use MVC model with node js to connect to mongoDB access REST apis. This is an application to view a budget tracker where you can input transactions to track your spending. The focus of this assignement is PWA and offline functionality when connection is unstable. The website is still functional and works with or without internet connectivity with express. Techonologies mongoDB, PWA, express, MVC model, Heroku, service workers and cache.',
      imageFolder: 'Budget_Tracker',
      images: [],
      descriptionShort: '',
      role: '',
      roadBlocks: '',
      solution: '',
      features: ['Responsive', 'Offline capabilities', 'Interactive'],
      keywords: ['']
    },
    {
      name: 'Lidar Live streaming Robot',
      technologies: ['ROS', ' Linux/Terminal', 'Git', 'ROSJS', 'HTML'],
      github: 'https://github.com/fchoi1/Linabot',
      description:
        'A project I worked on at Linamar to design an automous robot that can deliver tool changes',
      imageFolder: 'LIDAR_Live_streaming_Robot',
      images: [],
      descriptionShort: '',
      role: '',
      roadBlocks: '',
      solution: '',
      features: [
        'Responsive',
        'MVC',
        'Custom user modal',
        'User Authentication'
      ],
      keywords: ['']
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
      images: [],
      descriptionShort: '',
      role: '',
      roadBlocks: '',
      solution: '',
      features: [
        'Object Oriented Programming',
        '6 degrees of freedom platform'
      ],
      keywords: ['']
    },
    {
      name: 'Warehouse Aerial Manipulator',
      technologies: [
        'Solidworks 3D Modelling',
        'Mechanical Design',
        'Arduino',
        'C++'
      ],
      Date: 'March 2022',
      website: 'https://1drv.ms/p/s!Ap-4bV5caE3xdK1LdPpFxN_whmI?e=Gb9zD0',
      github: 'https://www.github.com/fchoi1/',
      description:
        'This was my fourth year design project. This is where me and my group designed a manipulator attached to a drone to be able to pick up small packages. The use case was for factories to move around small products and to be able to scan and keep track of product inventory. Since drones can cover 3D space, it makes it more efficient that ground robots and human labour.',
      imageFolder: 'Warehouse_Aerial_Manipulator',
      images: [],
      descriptionShort: '',
      role: '',
      roadBlocks: '',
      solution: '',
      features: ['Robotics', 'Path-finding', 'Drone'],
      keywords: ['']
    },
    {
      name: 'Tech Blog',
      Date: 'March 2022',
      technologies: ['MVC', 'mySQL', 'NodeJS', 'Express', 'REST API'],
      website: 'https://fabio-tech-blog.herokuapp.com/',
      github: 'https://github.com/fchoi1/tech-blog',
      description:
        'This is a simple application to use MVC moddel with node js to connect to sql database and access REST apis. This is an application to view a tech blog with users to create, edit and delete posts as well as add comments. Techonologies mysql2, dotenv, express, sequelize, MVC model.',
      imageFolder: 'Tech_Blog',
      images: [],
      descriptionShort: '',
      role: '',
      roadBlocks: '',
      solution: '',
      features: ['Responsive', 'User Authentication', 'Blog Post'],
      keywords: ['']
    }
  ];

  myProjects.forEach((project) => {
    Object.keys(images).map((image) => {
      if (project.imageFolder === image.split('/')[0]) {
        project.images.push({ img: images[image], title: image.split('/')[1] });
        delete images[image];
      }
      return null;
    });
  });

  const [projects, setProjects] = useState(myProjects);

  return <Provider value={{ projects, setProjects }} {...props} />;
};

const useProjectContext = () => {
  return useContext(projectContext);
};

export { ProjectProvider, useProjectContext };
