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
  const myProjects = {
    github: 'fchoi1',
    linkedin: 'https://www.linkedin.com/in/fchoi1/',
    instagram: 'https://www.instagram.com/w4ng0/',
    avatarImage: require('../assets/images/avatar/fabio-choi.png')
  };

  const [projects, setProjects] = useState(myProjects);

  return <Provider value={{ projects, setProjects }} {...props} />;
};

const useProjectContext = () => {
  return useContext(projectContext);
};

export { ProjectProvider, useProjectContext };
