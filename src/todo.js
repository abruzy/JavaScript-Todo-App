const myTodo = [];

function toDo(title, description, date) {
  return {
    title,
    description,
    date,
  };
}

function setLocalStorage(data) {
  localStorage.setItem('myTodo', JSON.stringify(data, null, 2));
}

function getLocalStorage() {
  const ls = localStorage.getItem('myTodo');

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

  return [titleVal, descVal, dateVal];
}

function validate(titleVal, descVal, dateVal) {
  if (titleVal === '' || descVal === '' || dateVal === '') {
    return false;
  }
  return true;
}

function addTodo() {
  const [titleVal, descVal, dateVal] = getInputValue();

  const validateInput = validate(titleVal, descVal, dateVal);

  if (validateInput) {
    document.querySelector('.bg-modal').style.display = 'none';

    const newTodo = toDo(titleVal, descVal, dateVal);

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
  const [titleVal, descVal, dateVal] = getInputValue();
  const validateInput = validate(titleVal, descVal, dateVal);

  if (validateInput) {
    const ls = getLocalStorage();
    const todo = ls[todoId];
    todo.title = titleVal;
    todo.description = descVal;
    todo.date = dateVal;
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

function populateEditForm(todo) {
  document.getElementById('title').value = todo.title;
  document.getElementById('description').value = todo.description;
  document.getElementById('date').value = todo.date;
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
    populateEditForm(todo);

    document.getElementById('edit').addEventListener('click', () => {
      updateToDo(index);
    });
  });
}

function displayTable() {
  const ls = getLocalStorage();
  ls.forEach((element, index) => {
    const tr = document.createElement('TR');
    tr.setAttribute('class', `todo-${index}`);
    tr.innerHTML = `
      <td data-column="title">${element.title}</td>
      <td data-column="description">${element.description}</td>
      <td data-column="date">${element.date}</td>
      <td data-column="edit"><a data-id=${index} class="btn btn-primary edit-${index}">Edit</a></td>
      <td data-column="delete"><a data-id="${index}" class="btn btn-danger delete-${index}">Delete</a></td>
    `;
    document.querySelector('tbody').appendChild(tr);
    deleteToDo(index);
    editToDo(index);
  });
}

displayTable();

export default addTodo;