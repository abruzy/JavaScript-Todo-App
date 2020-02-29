import ProjectStorage from './projectstorage';

const myTodo = [];

function toDo(title, description, date, priority, projectId, done = false) {
  return {
    title,
    description,
    date,
    done,
    priority,
    projectId,
  };
}

function setLocalStorage(data) {
  localStorage.setItem('myTodo', JSON.stringify(data));
}

function getLocalStorage() {
  const ls = localStorage.getItem('myTodo', null, 2);

  return JSON.parse(ls);
}


function checkStorage() {
  if (getLocalStorage() == null) {
    return false;
  }

  return true;
}

function refreshPage() {
  window.location.reload();
}

function saveTodo(todo) {
  if (checkStorage()) {
    const ls = getLocalStorage();
    ls.push(todo);
    setLocalStorage(ls);
  } else {
    myTodo.push(todo);
    setLocalStorage(myTodo);
  }

  refreshPage();
}

function getInputValue() {
  const titleVal = document.getElementById('title').value;
  const descVal = document.getElementById('description').value;
  const dateVal = document.getElementById('date').value;
  const projectId = document.getElementById('select-project').value;
  const priorityVal = document.getElementById('priority').value;

  return [titleVal, descVal, dateVal, priorityVal, projectId];
}

function validate(titleVal, descVal, dateVal, priorityVal, projectId) {
  if (titleVal === ''
    || descVal === ''
    || dateVal === ''
    || projectId === ''
    || priorityVal === '') {
    return false;
  }
  return true;
}

function addTodo() {
  const [titleVal, descVal, dateVal, priorityVal, projectId] = getInputValue();

  const validateInput = validate(titleVal, descVal, dateVal);

  if (validateInput) {
    document.querySelector('.bg-modal').style.display = 'none';

    const newTodo = toDo(titleVal, descVal, dateVal, priorityVal, projectId);

    saveTodo(newTodo);
  }
}

function deleteTask(todoId) {
  if (checkStorage()) {
    const ls = getLocalStorage();
    ls.splice(todoId, 1);
    setLocalStorage(ls);
  }

  refreshPage();
}

function deleteToDo(index) {
  document.querySelector(`.delete-${index}`).addEventListener('click', function deleteButton() {
    const todoId = this.getAttribute('data-id');
    document.querySelector(`.todo-${todoId}`).style.display = 'none';
    deleteTask(todoId);
  });
}

function updateToDo(todoId) {
  const [titleVal, descVal, dateVal, prioriVal] = getInputValue();
  const validateInput = validate(titleVal, descVal, dateVal, prioriVal);

  if (validateInput) {
    const ls = getLocalStorage();
    const todo = ls[todoId];
    todo.title = titleVal;
    todo.description = descVal;
    todo.date = dateVal;
    todo.priority = prioriVal;
    ls[todoId] = todo;
    setLocalStorage(ls);
    refreshPage();
  }
}

function getAToDo(todoId) {
  const ls = getLocalStorage();
  const todo = ls[todoId];
  return todo;
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

export {
  addTodo, displayTable, addStrike, removeStrike,
};