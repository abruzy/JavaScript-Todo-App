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

(function showProjejcts(params) {
  const projectDiv = document.querySelector('.project-node');
  const ps = ProjectStorage().getProject();
  const ol = document.createElement('OL');
  ol.setAttribute('class', 'project');
  ps.forEach((element, index) => {
    const li = document.createElement('LI');
    li.innerHTML = `<a href="#" class="project-${index}" data-id="${index}">${element.name}</a>`;
    ol.appendChild(li);
  });
  projectDiv.appendChild(ol);
}());

export default addProject;