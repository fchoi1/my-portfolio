import React, { createContext, useContext } from 'react';
import { useScrollReducer } from './ScrollReducer';

//instatiate global state object empty
const scrollContext = createContext();
const { Provider } = scrollContext;

const ScrollProvider = ({ value = [], ...props }) => {
  const [scrollState, dispatch] = useScrollReducer({
    animValue: 0,
    min: 0,
    max: 0,
    start: true,
    end: false
  });

  return <Provider value={[scrollState, dispatch]} {...props} />;
};

const useScrollContext = () => {
  return useContext(scrollContext);
};

export { ScrollProvider, useScrollContext };
