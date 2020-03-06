import ProjectStorage from './projectstorage';

const Project = (name) => ({
  name,
});

const localStorage = () => {
  const projects = ProjectStorage().getProject();
  if (projects !== null) {
    return true;
  }

  return false;
};

const saveProject = (name) => {
  const project = Project(name);
  const ps = ProjectStorage();
  if (localStorage()) {
    const projects = ps.getProject();
    projects.push(project);
    ps.setProject(projects);
  } else {
    const tP = ProjectStorage().todoProjects;
    tP.push(project);
    ps.setProject(tP);
  }
};

const validate = (name) => {
  if (name === '') {
    document.querySelector('.error-message').innerHTML = 'Name cannot be blank';
  } else {
    saveProject(name);
  }
};

const addProject = (name) => {
  validate(name);
};


export default addProject;