import React, { createContext, useContext, useState } from 'react';

//instatiate global state object empty
const ProfileContext = createContext();
const { Provider } = ProfileContext;

const ProfileProvider = ({ value = [], ...props }) => {
  // state is most up to date global state
  // dispatch is the method to execut to update state
  //   const [state, dispatch] = useProductReducer({
  //     products: [],
  //     categories: [],
  //     currentCategory: '',
  //     cart: [],
  //     cartOpen: true
  //   });
  const myProfile = {
    github: 'fchoi1',
    linkedin: 'https://www.linkedin.com/in/fchoi1/',
    instagram: 'https://www.instagram.com/w4ng0/',
    avatarImage: require('../assets/images/avatar/fabio-choi.png')
  };

  const [profile, setProfile] = useState(myProfile);

  return <Provider value={{ profile, setProfile }} {...props} />;
};

const useProfileContext = () => {
  return useContext(ProfileContext);
};

export { ProfileProvider, useProfileContext };