
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
function getInputValue() {
  const titleVal = document.getElementById('title').value;
  const descVal = document.getElementById('description').value;
  const dateVal = document.getElementById('date').value;
  const projectId = document.getElementById('select-project').value;
  const priorityVal = document.getElementById('priority').value;

  return [titleVal, descVal, dateVal, priorityVal, projectId];
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


export {
  getAToDo, updateToDo,
  deleteTask, addTodo,
  validate, saveTodo,
  refreshPage, checkStorage,
  getLocalStorage, setLocalStorage, toDo,
};