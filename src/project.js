import ProjectStorage from './taskstorage'

const todoProjects = [];

const Project = (name) => {
  return {
    name
  }
}

const localStorage = () => {
  const projects = ProjectStorage().getProject();
  if (project !== null) {
    return true
  }

  return false
}

const saveProject = (name) => {
  const project = Project(name);

  if (localStorage()) {
    const projects = ProjectStorage().getProject();
    projects.push(project);
    ProjectStorage.setProject(projects); F
  } else {
    todoProjects.push(project);
    ProjectStorage.setProject(todoProjects);
  }
}

const validate = (name) => {
  if (name === '') {
    document.querySelector('.error-message').innerHTML = 'Name cannot be blank'
  } else {
    saveProject(name);
  }
}
const addProject = (name) => {
  validate(name)
}

export default addProject;