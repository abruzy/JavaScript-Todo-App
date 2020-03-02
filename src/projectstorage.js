const ProjectStorage = () => {

  const todoProjects = [
    {
      name: 'Food',
    },
    {
      name: 'Clothing',
    },
    {
      name: ' Shelter',
    },
  ];

  const setProject = (data) => {
    localStorage.setItem('project', JSON.stringify(data));
  };

  const getProject = () => {
    const projects = localStorage.getItem('project');
    if (projects === null) {
      setProject(todoProjects);
      window.location.reload();
    }

    return JSON.parse(projects);
  };

  return {
    setProject,
    getProject,
    todoProjects,
  };
};

export default ProjectStorage;