import React, { createContext, useContext, useState } from 'react';
import moment from 'moment';

//instatiate global state object empty
const historyContext = createContext();
const { Provider } = historyContext;

const HistoryProvider = ({ value = [], ...props }) => {
  let myHistory = [
    {
      name: 'CGI Group',
      type: 'job',
      position: 'Technical Analyst',
      location: 'Markham, ON',
      startDate: 'Dec 2015',
      endDate: 'Apr 2016',
      description: `Configured Atlassian suite tools for Jira, Bamboo, and Confluence. 
        Programmed Ansible scripts used to automate environment setup and deployment.
        Used terminal to read logs, debug errors, and restarting applications. 
        Worked with proof-of-concept applications for automatic alerts and log reading: Sumologic, and iMacros`
    },
    {
      name: 'Flex LTD',
      type: 'job',
      position: 'Software Development Co-op',
      location: 'Markham, ON',
      startDate: 'Sep 2016',
      endDate: 'Dec 2016',
      description: `Integrated a task management software (SBM) with SVN/Eclipse to automatically include issue numbers with code commits
        Documented instructions for user setup for the software integration
        Configured integration setup with Jira Software as a cost-effective solution to SBM`,
      link: ''
    },
    {
      name: 'Linamar',
      type: 'job',
      position: 'Mechanical Engineering Intern',
      location: 'Toronto, ON',
      startDate: 'May 2017',
      endDate: 'Aug 2017',
      description: `Implemented Robert Operating System (ROS) for autonomous navigation for proof of concept on a Roomba Bot
        Integrated Raspberry Pi with iRobot Roomba and ssh for wireless configuration
        Created simple web app for autonomous navigation using ROSJS and HTML`,
      link: ''
    },
    {
      name: 'Canadian Solar',
      type: 'job',
      position: 'Mechanical Engineering Co-op ',
      location: 'Toronto, ON',
      startDate: 'Jan 2018',
      endDate: 'Apr 2018',
      description: `Focused on proudction efficency by upgrading design on fixtures and jigs.
        Implemented a barcode camera system to improve visibility on barcodes on underside of panels
        Modelled new proof of concept ideas for electric charge stations for cars
        Designed custom blade holder used to cut insulated paper for solar panel wiring`,
      link: ''
    },
    {
      name: 'Zero Gravity Labs',
      type: 'job',
      position: 'Innovation Developer',
      location: 'Toronto, ON',
      startDate: 'Sep 2018',
      endDate: 'Dec 2018',
      description: `Researched data and created applications for face recognition technologies 
        Developed an IoT video streaming device using Raspberry Pi system to implement computer vision techniques on face data (Python, OpenCV)
        Designed infrastructure for sending and storing data to cloud (AWS)
      `,
      link: ''
    },
    {
      name: 'Brevitas – Contractor for Sanofi',
      type: 'job',
      position: 'ITS Analyst',
      location: 'Toronto, ON',
      startDate: 'Apr 2021',
      endDate: 'Present',
      description: `Tested and qualified benchtop equipment for data transfer into PI Historian
        Setup and configured data integration between MES and PI Historian software
        Managed 20,000+ PI Tags used for reading equipment data and ensure constant uptime and proper configuration`,
      link: ''
    },
    {
      name: 'Univeristy of Toronto Continuing Studies ',
      type: 'project',
      position: 'Coding Bootcamp',
      location: 'Toronto, ON',
      startDate: 'Oct 2021',
      endDate: 'Present',
      description: `Learned fundamentals and techniques in web development. Developed strong coding practices incuding MERN stack and GIT`,
      link: ''
    },
    {
      name: 'Comp Sci and Comp Eng Courses',
      type: 'project',
      position: 'Highschool',
      location: 'Markham, ON',
      startDate: 'Sep 2014',
      endDate: 'Present',
      description: `My Journey started with learning about computer engineering and computer science in my highschool courses`,
      link: ''
    }
  ];

  myHistory = myHistory.sort(
    (a, b) => moment(a.startDate, 'MMM YYYY') - moment(b.startDate, 'MMM YYYY')
  );

  const [history, setHistory] = useState(myHistory);

  return <Provider value={{ history, setHistory }} {...props} />;
};

const useHistoryContext = () => {
  return useContext(historyContext);
};

export { HistoryProvider, useHistoryContext };
