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
      name: 'Lidar Live streaming Robot',
      technologies: ['CSS', 'JS'],

      github: 'https://www.linkedin.com/in/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      imageFolder: '1-LIDAR_Live_streaming_Robot',
      images: []
    },
    {
      name: 'project2',
      technologies: ['CSS', 'MongoDB', 'express'],
      website: 'test',
      github: 'https://www.linkedin.com/in/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      imageFolder: '2-Steward_Platform_Maze_Solver',
      images: []
    },
    {
      name: 'project3',
      technologies: ['react', 'Java', 'Python'],
      website: '',
      github: 'https://www.github.com/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      imageFolder: '3-Warehouse_Aerial_Manipulator',
      images: []
    },
    {
      name: 'project4',
      technologies: ['react', 'Java', 'Python'],
      website: '',
      github: 'https://www.github.com/fchoi1/',
      description:
        'Fugiat pariatur cillum dolore est tempor labore ullamco adipisicing do amet consequat. Commodo reprehenderit elit ad cillum dolore mollit magna irure aute aliqua sunt. Labore ad amet nulla eiusmod culpa reprehenderit duis. Aliquip exercitation ut id irure consectetur irure nulla occaecat aliqua in id. In veniam culpa velit Lorem quis officia qui reprehenderit dolor. Esse ut laborum est consectetur excepteur aliqua nisi.',
      imageFolder: '3-Warehouse_Aerial_Manipulator',
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
