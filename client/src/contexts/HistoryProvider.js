import React, { createContext, useContext, useState } from 'react';

//instatiate global state object empty
const historyContext = createContext();
const { Provider } = historyContext;

const HistoryProvider = ({ value = [], ...props }) => {
  const myHistory = [
    {
      name: 'Job 1',
      type: 'job',
      position: 'Web Dev',
      location: 'Toronto, ON',
      startDate: 'Jan 2016',
      endDate: 'Dec 2018',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    },
    {
      name: 'Job 2',
      type: 'job',
      position: 'Engineer',
      location: 'Calgary, AB',
      startDate: 'Jan 2021',
      endDate: 'Apr 2021',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    },
    {
      name: 'Project 0',
      type: 'project',
      position: 'Web Dev',
      location: 'Toronto, ON',
      startDate: 'Jan 2016',
      endDate: 'Dec 2018',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    },

    {
      name: 'Project 1',
      type: 'project',
      position: 'Web Dev',
      location: 'Toronto, ON',
      startDate: 'Jan 2016',
      endDate: 'Dec 2018',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    },
    {
      name: 'Job 3',
      type: 'job',
      position: 'Test QA',
      location: 'Montreal, QC',
      startDate: 'Sept 2021',
      endDate: 'Mar 2022',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    },
    {
      name: 'Project 2',
      type: 'project',
      position: 'Web Dev',
      location: 'Toronto, ON',
      startDate: 'Jan 2016',
      endDate: 'Dec 2018',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.',
      link: ''
    }
  ];

  const [history, setHistory] = useState(myHistory);

  return <Provider value={{ history, setHistory }} {...props} />;
};

const useHistoryContext = () => {
  return useContext(historyContext);
};

export { HistoryProvider, useHistoryContext };
