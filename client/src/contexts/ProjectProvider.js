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
      features: [
        'Real time',
        'Live Notifications',
        'Responsive',
        'Searchable user list'
      ],
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
      role: 'This was a solo project. The task was to develop an RPG game that included boss fights, developer cheat codes, and upgradable stats for players. I programmed the game logic and included visuals and animations to the game',
      roadBlocks:
        'For this project, the minimum requirement was to be able to display static photos. However, I wanted to take it one step further and try to have animations or moving images. At the time, I was inexperienced with Java and using animations was a complex topic.',
      solution:
        'Since I was unfamiliar with any animation libraries, it was hard to find an efficient solution. I realized that a video/animation were just many images being displayed one after the other at a certain frame rate.  I did a manual process of finding an animation and saving each frame image. I then stored these frames in seperate folders and used a loop to loop through the images to create enemy and player animations.',
      features: [
        'Interactive',
        'Visual',
        'RPG Game',
        'Animated boss/enemy fights'
      ],
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
      description: '',
      imageFolder: 'Bike_Haven_Store',
      images: [],
      descriptionShort:
        'A full stack application that sells bikes online. Users login/register accounts and browse the bike catalogs and add items to their wishlist. ',
      role: 'I was in charge of designing the database models and also specific CRUD operations routes to the models. I also implemented a user modal where users are able to update their profile via username, password and even avatar images.',
      roadBlocks:
        'This was a group project using git and github. The features and issues were divided among the group members. However, some features were dependant or linked to each other. Depending on the availability of each group member, some were not able to start or make progress on their tasks due to dependent features not being completed. There were many scheduling conflicts that occurred which resulted in many meetings not consisting of the entire group.',
      solution:
        'We decided to do pair programming where 2 group members would be assinged to an issue. This way, we can have progress on features even when one person is unavailable. We also reduced the functional requirements due to time constraints and focused on completing the minimum viable product.',
      features: [
        'Responsive',
        'User Authentication and sessions storage',
        'Wishlist feature',
        'Animations'
      ],
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
      descriptionShort:
        'A simple budget tracker application that stores your transactions and displays on a visual graph',
      role: 'This was a solo project utilizing both frontend and backend practices. ',
      roadBlocks:
        'This was was the first full stack application utilizing MongoDB, and Express. This was a project for me to understand the best MVC practices and to slowing develop my patterns for using ORMs in NodeJS',
      solution:
        'Like learning new concepts, it required time, patience and dedication to understand theses topics to implement them in an applciation',
      features: ['Responsive', 'Offline Capatible', 'Interactive', 'Visual'],
      keywords: ['']
    },
    {
      name: 'My Website',
      Date: 'April 2022',
      technologies: ['NodeJS', 'ReactJS', 'Material UI', 'Express'],
      website: 'http://fabio-portfolio.herokuapp.com/',
      github: 'https://github.com/fchoi1/my-portfolio',
      description:
        'This is my personal website to learn more about me and my past experiences. This website showcases my professtional experiences and the mutliple interesting projects I was part of.',
      imageFolder: 'Budget_Tracker',
      images: [],
      descriptionShort:
        'My personal website which is what you are on right now!',
      role: 'This was a solo project for me to show off myself and to show my skills as a front-end developer ',
      roadBlocks: '',
      solution: '',
      features: ['Responsive', 'Interactive', 'Built ground up'],
      keywords: ['']
    },
    {
      name: 'Lidar Live streaming Robot',
      technologies: [
        'ROS',
        ' Linux',
        'Terminal',
        'Ubuntu',
        'Python',
        'ROSJS',
        'HTML'
      ],
      github: 'https://github.com/fchoi1/Linabot',
      description:
        "This was a proof of concept project that involved using an iCreate robot to automatically deliver tools to a robot. This robot would be fully autonomous, and would be able to navigate a manufacturing floor without any human intervention using localization algorithms to know the robot's position on a map. The robot uses a Lidar to map its surroundings and also uses built in bump and sonar sensors to prevent collisions.  This project uses ROS for programming the robot and also dikjstra's algorithm for path finding.",
      imageFolder: 'LIDAR_Live_streaming_Robot',
      images: [],
      descriptionShort:
        'A project I worked on at Linamar to design an autonomous robot that can deliver tool changes using path finding and localization',
      role: 'I was in charge of integration hardware components with ROS. I installed ROS and modified configuration files to fit the iCreate Robot Base.  I performed unit tests to make sure each piece of the hardware was working. ',
      roadBlocks:
        'Integration of hardware using ROS was a complex and unfamiliar topic. Everytime we needed to upload software, we would need to open the robot compartment and take out the Raspberry Pi. This process was tedious and long for simple code changes. The robot had only a 2 hour run time before requiring a recharge. Therefore, during rigours testing, we would need to wait for the robot to recharge which would delay testing.',
      solution:
        'Being patient and reading through ROS forums and documentation to understand and find the correct libraries to install. It was a team effort to pool together resources and knowledge to make the learning process as efficient as possible.  We also set up a remote access ssh session on the network to be able to connect to the robot remotely. This allows ',
      features: [
        'Robotics',
        'Interactive',
        'Autonomous navigation',
        'Monte Carlo and A* localization algorithm'
      ],
      keywords: ['']
    },
    {
      name: 'Steward Platform Maze Game',
      technologies: [
        'C++',
        'OOP',
        'Solidworks',
        'Mechanical Design',
        'Arduino',
        'IMU'
      ],
      website: '',
      github: 'https://github.com/fchoi1/stewart-platform',
      description:
        'A project that uses a microcontroller to control a steward platform which is a platform held by 6 actuators which enables this system to have 6 degrees of freedom. This was program in C++ and uses sensor data from an IMU (inertial measurement unit) to control tilt and z axis movement  ',
      imageFolder: 'Steward_Platform_Maze_Solver',
      images: [],
      descriptionShort: 'This is a interactive maze solver game where users can control the tilting of the platform with an IMU device',
      role: 'My role in this project was to code up the logic and apply mathematical model for determining the position and motor values for the platform. I also integrated inputs from the IMU to correspond with the x and y axis tilts and the z rotation motions. ',
      roadBlocks: 'Implementing the models, formulas with this system was a long process because we need to ensure the calculations are correct in order to send the correct motor values. The motors also had to be calibrated to ensure the neutral position at the beginning. This is crucial because if the initial position is offset, the rest of the calculations would not work. ',
      solution: '',
      features: [
        'Object Oriented Programming',
        '6 Degree of freedom platform',
        'Interactive',
        'Game',
        'Modular maze configurations'
      ],
      keywords: ['']
    },
    {
      name: 'Warehouse Aerial Manipulator',
      technologies: ['Solidworks', 'Mechanical Design', 'Arduino', 'C++'],
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
