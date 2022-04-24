import React, { createContext, useContext, useState } from 'react';

//instatiate global state object empty
const projectContext = createContext();
const { Provider } = projectContext;

const ProjectProvider = ({ value = [], ...props }) => {
  // state is most up to date global state
  // dispatch is the method to execut to update state
  //   const [state, dispatch] = useProductReducer({
  //     products: [],
  //     categories: [],
  //     currentCategory: '',
  //     cart: [],
  //     cartOpen: true
  //   });
  const myProjects = [
    {
      name: 'project1',
      technologies: ['CSS', 'JS'],
      website: '',
      github: 'https://www.linkedin.com/in/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      images: ' '
    },
    {
      name: 'project2',
      technologies: ['CSS', 'MongoDB', 'express'],
      website: '',
      github: 'https://www.linkedin.com/in/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      images: ' '
    },
    {
      name: 'project3',
      technologies: ['react', 'Java', 'Python'],
      website: '',
      github: 'https://www.github.com/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      images: ' '
    }
  ];

  const [projects, setProjects] = useState(myProjects);

  return <Provider value={{ projects, setProjects }} {...props} />;
};

const useProjectContext = () => {
  return useContext(projectContext);
};

export { ProjectProvider, useProjectContext };
