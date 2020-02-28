const ProjectStorage = () => {

  const setProject = (data) => {
    localStorage.setItem('project', JSON.stringify(data));
  }

  const getProject = () => {
    const projects = localStorage.getItem('project');

    return JSON.parse(projects);
  }

  return {
    setProject,
    getProject
  }
}

export default ProjectStorage;