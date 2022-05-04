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
    require.context('../assets/images/projects/', true, /\.(png|jpe?g|svg)$/)
  );

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

  myProjects.forEach((project) => {
    Object.keys(images).map((image) => {
      if (project.imageFolder === image.split('/')[0]) {
        project.images.push({ img: images[image], title: image.split('/')[1] });
        delete images[image];
      }
      return null;
    });
  });

  console.log(myProjects);

  const [projects, setProjects] = useState(myProjects);

  return <Provider value={{ projects, setProjects }} {...props} />;
};

const useProjectContext = () => {
  return useContext(projectContext);
};

export { ProjectProvider, useProjectContext };
