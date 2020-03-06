import ProjectStorage from './projectstorage';
import addProject from './project';
import {
  addTodo,
} from './tasks';

import { displayTable, addStrike } from './taskDom';

const appendProject = () => {
  const select = document.createElement('SELECT');
  select.setAttribute('class', 'custom-select');
  select.setAttribute('id', 'select-project');
  const ps = ProjectStorage().getProject();
  ps.forEach((element, index) => {
    const option = document.createElement('OPTION');
    option.setAttribute('value', `${index}`);
    option.innerHTML = `${element.name}`;
    select.appendChild(option);
  });

  const selectDiv = document.querySelector('.projects-select');
  selectDiv.appendChild(select);
};

document.getElementById('task-button').addEventListener('click',
  () => {
    appendProject();
    document.querySelector('.task-modal').style.display = 'flex';
  });

document.querySelector('.close').addEventListener('click',
  () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addTodo);
});


document.querySelector('.add-project').addEventListener('click', () => {
  document.querySelector('.project-modal').style.display = 'flex';
});

const refreshPage = () => {
  window.location.reload();
};

document.querySelector('.project-button').addEventListener('click', () => {
  const name = document.querySelector('#project-name').value;
  addProject(name);
  refreshPage();
});

const strickThroughOnPageLoad = () => {
  const doneButtons = document.querySelectorAll('.done');
  doneButtons.forEach((element) => {
    const doneState = element.getAttribute('data-done');
    const id = element.getAttribute('data-id');
    if (JSON.parse(doneState) === true) {
      addStrike(id);
    }
  });
};

(function showProjejcts() {
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

document.querySelectorAll('li').forEach(element => {
  const a = element.firstChild;
  a.addEventListener('click', function appendTableData() {
    const projectId = this.getAttribute('data-id');
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    document.addEventListener('DOMContentLoaded', displayTable(projectId));
    strickThroughOnPageLoad();
  });
});