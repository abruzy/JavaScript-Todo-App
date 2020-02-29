import { addTodo, displayTable, addStrike, removeStrike } from './tasks';
import addProject from './project';
import ProjectStorage from './projectstorage';

document.getElementById('task-button').addEventListener('click',
  () => {
    document.querySelector('.task-modal').style.display = 'flex';
    const select = document.createElement('SELECT');
    select.setAttribute('class', 'custom-select')
    select.setAttribute('id', 'select-project')
    const ps = ProjectStorage().getProject();
    ps.forEach((element, index) => {
      const option = document.createElement('OPTION');
      option.setAttribute('value', `${index}`);
      option.innerHTML = `${element.name}`;
      select.appendChild(option);
    });

    const selectDiv = document.querySelector('.projects-select')
    selectDiv.appendChild(select);
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
}

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
      addStrike(id)
    }
  });
}

document.querySelectorAll('li').forEach(element => {
  const a = element.firstChild;
  a.addEventListener('click', function () {
    const projectId = this.getAttribute('data-id');
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    document.addEventListener('DOMContentLoaded', displayTable(projectId));
    strickThroughOnPageLoad();
  })
});