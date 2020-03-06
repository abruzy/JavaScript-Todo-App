import ProjectStorage from './projectstorage';
import {
  getAToDo, updateToDo,
  deleteTask, addTodo,
  getLocalStorage, setLocalStorage,
} from './tasks';

function deleteToDo(index) {
  document.querySelector(`.delete-${index}`).addEventListener('click', function deleteButton() {
    const todoId = this.getAttribute('data-id');
    document.querySelector(`.todo-${todoId}`).style.display = 'none';
    deleteTask(todoId);
  });
}

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

function populateEditForm(todo) {
  document.getElementById('title').value = todo.title;
  document.getElementById('description').value = todo.description;
  document.getElementById('date').value = todo.date;
  document.getElementById('priority').value = todo.priority;
  document.getElementById('select-project').value = todo.projectId;
  document.querySelector('.bg-modal').style.display = 'flex';
}

function editToDo(index) {
  document.querySelector(`.edit-${index}`).addEventListener('click', function editButton() {
    const todoId = this.getAttribute('data-id');
    const query = document.querySelector('.general-button');
    query.removeEventListener('click', addTodo);
    query.removeAttribute('id');
    query.setAttribute('id', 'edit');
    query.innerHTML = 'Update';
    const todo = getAToDo(todoId);
    appendProject();
    populateEditForm(todo);

    document.getElementById('edit').addEventListener('click', () => {
      updateToDo(index);
    });
  });
}


function addStrike(index) {
  document.querySelectorAll(`.text-${index}`).forEach((element) => {
    element.classList.add('lineThrough');
  });
  const ls = getLocalStorage();
  ls[index].done = true;
  setLocalStorage(ls);
}

function removeStrike(index) {
  document.querySelectorAll(`.text-${index}`).forEach((element) => {
    element.classList.remove('lineThrough');
  });
  const ls = getLocalStorage();
  ls[index].done = false;
  setLocalStorage(ls);
}

function doneState(index) {
  document.querySelector(`.done-${index}`).addEventListener('click', function strikeThrough() {
    const dataDone = this.getAttribute('data-done');
    const parsedData = JSON.parse(dataDone);
    if (parsedData === false) {
      addStrike(index);
      this.setAttribute('data-done', 'true');
    } else {
      removeStrike(index);
      this.setAttribute('data-done', 'false');
    }
  });
}

function displayTable(projectId) {
  const ls = getLocalStorage();
  if (ls === null) {
    document.querySelector('.project-error').innerHTML = 'There are no task in this project';
  } else {
    ls.forEach((element, index) => {
      if (element.projectId === projectId) {
        const tr = document.createElement('TR');
        tr.setAttribute('class', `todo-${index}`);
        tr.innerHTML = `
        <td data-column="title" class="text-${index}">${element.title}</td>
        <td data-column="description" class="text-${index}">${element.description}</td>
        <td data-column="date" class="text-${index}">${element.date}</td>
        <td data-column="date" class="text-${index}">${element.priority}</td>
        <td data-column="date" class="text-${index}">${element.projectId}</td>
        <td data-column="edit"><a data-id=${index} class="btn btn-primary edit-${index}">Edit</a></td>
        <td data-column="delete"><a data-id="${index}" class="btn btn-danger delete-${index}">Delete</a></td>
        <td data-column="done"><a data-id="${index}" data-done="${element.done}" class="btn btn-primary done-${index} done">Done</a></td>
      `;
        document.querySelector('tbody').appendChild(tr);
        doneState(index);
        deleteToDo(index);
        editToDo(index);
      }
    });
  }
}

export { displayTable, addStrike };