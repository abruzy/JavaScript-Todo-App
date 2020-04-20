/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectstorage */ \"./src/projectstorage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _taskDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDom */ \"./src/taskDom.js\");\n\n\n\n\n\n\nconst appendProject = () => {\n  const select = document.createElement('SELECT');\n  select.setAttribute('class', 'custom-select');\n  select.setAttribute('id', 'select-project');\n  const ps = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getProject();\n  ps.forEach((element, index) => {\n    const option = document.createElement('OPTION');\n    option.setAttribute('value', `${index}`);\n    option.innerHTML = `${element.name}`;\n    select.appendChild(option);\n  });\n\n  const selectDiv = document.querySelector('.projects-select');\n  selectDiv.appendChild(select);\n};\n\ndocument.getElementById('task-button').addEventListener('click',\n  () => {\n    appendProject();\n    document.querySelector('.task-modal').style.display = 'flex';\n  });\n\ndocument.querySelector('.close').addEventListener('click',\n  () => {\n    document.querySelector('.bg-modal').style.display = 'none';\n  });\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.getElementById('add').addEventListener('click', _tasks__WEBPACK_IMPORTED_MODULE_2__[\"addTodo\"]);\n});\n\n\ndocument.querySelector('.add-project').addEventListener('click', () => {\n  document.querySelector('.project-modal').style.display = 'flex';\n});\n\nconst refreshPage = () => {\n  window.location.reload();\n};\n\ndocument.querySelector('.project-button').addEventListener('click', () => {\n  const name = document.querySelector('#project-name').value;\n  Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name);\n  refreshPage();\n});\n\nconst strickThroughOnPageLoad = () => {\n  const doneButtons = document.querySelectorAll('.done');\n  doneButtons.forEach((element) => {\n    const doneState = element.getAttribute('data-done');\n    const id = element.getAttribute('data-id');\n    if (JSON.parse(doneState) === true) {\n      Object(_taskDom__WEBPACK_IMPORTED_MODULE_3__[\"addStrike\"])(id);\n    }\n  });\n};\n\n(function showProjejcts() {\n  const projectDiv = document.querySelector('.project-node');\n  const ps = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getProject();\n  const ol = document.createElement('OL');\n  ol.setAttribute('class', 'project');\n  ps.forEach((element, index) => {\n    const li = document.createElement('LI');\n    li.innerHTML = `<a href=\"#\" class=\"project-${index}\" data-id=\"${index}\">${element.name}</a>`;\n    ol.appendChild(li);\n  });\n  projectDiv.appendChild(ol);\n}());\n\ndocument.querySelectorAll('li').forEach(element => {\n  const a = element.firstChild;\n  a.addEventListener('click', function appendTableData() {\n    const projectId = this.getAttribute('data-id');\n    const tbody = document.querySelector('tbody');\n    tbody.innerHTML = '';\n    document.addEventListener('DOMContentLoaded', Object(_taskDom__WEBPACK_IMPORTED_MODULE_3__[\"displayTable\"])(projectId));\n    strickThroughOnPageLoad();\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectstorage */ \"./src/projectstorage.js\");\n\n\nconst Project = (name) => ({\n  name,\n});\n\nconst localStorage = () => {\n  const projects = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getProject();\n  if (projects !== null) {\n    return true;\n  }\n\n  return false;\n};\n\nconst saveProject = (name) => {\n  const project = Project(name);\n  const ps = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (localStorage()) {\n    const projects = ps.getProject();\n    projects.push(project);\n    ps.setProject(projects);\n  } else {\n    const tP = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().todoProjects;\n    tP.push(project);\n    ps.setProject(tP);\n  }\n};\n\nconst errorMessage = () => {\n  document.querySelector('.error-message').innerHTML = 'Name cannot be blank';\n};\n\nconst validate = (name) => {\n  if (name === '') {\n    errorMessage();\n  } else {\n    saveProject(name);\n  }\n};\n\nconst addProject = (name) => {\n  validate(name);\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addProject);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectstorage.js":
/*!*******************************!*\
  !*** ./src/projectstorage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ProjectStorage = () => {\n  const todoProjects = [\n    {\n      name: 'Food',\n    },\n    {\n      name: 'Clothing',\n    },\n    {\n      name: ' Shelter',\n    },\n  ];\n\n  const setProject = (data) => {\n    localStorage.setItem('project', JSON.stringify(data));\n  };\n\n  const getProject = () => {\n    const projects = localStorage.getItem('project');\n    if (projects === null) {\n      setProject(todoProjects);\n      window.location.reload();\n    }\n\n    return JSON.parse(projects);\n  };\n\n  return {\n    setProject,\n    getProject,\n    todoProjects,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectStorage);\n\n//# sourceURL=webpack:///./src/projectstorage.js?");

/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/*! exports provided: displayTable, addStrike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTable\", function() { return displayTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addStrike\", function() { return addStrike; });\n/* harmony import */ var _projectstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectstorage */ \"./src/projectstorage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nfunction deleteToDo(index) {\n  document.querySelector(`.delete-${index}`).addEventListener('click', function deleteButton() {\n    const todoId = this.getAttribute('data-id');\n    document.querySelector(`.todo-${todoId}`).style.display = 'none';\n    Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"])(todoId);\n  });\n}\n\nconst appendProject = () => {\n  const select = document.createElement('SELECT');\n  select.setAttribute('class', 'custom-select');\n  select.setAttribute('id', 'select-project');\n  const ps = Object(_projectstorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getProject();\n  ps.forEach((element, index) => {\n    const option = document.createElement('OPTION');\n    option.setAttribute('value', `${index}`);\n    option.innerHTML = `${element.name}`;\n    select.appendChild(option);\n  });\n\n  const selectDiv = document.querySelector('.projects-select');\n  selectDiv.appendChild(select);\n};\n\nfunction populateEditForm(todo) {\n  document.getElementById('title').value = todo.title;\n  document.getElementById('description').value = todo.description;\n  document.getElementById('date').value = todo.date;\n  document.getElementById('priority').value = todo.priority;\n  document.getElementById('select-project').value = todo.projectId;\n  document.querySelector('.bg-modal').style.display = 'flex';\n}\n\nfunction editToDo(index) {\n  document.querySelector(`.edit-${index}`).addEventListener('click', function editButton() {\n    const todoId = this.getAttribute('data-id');\n    const query = document.querySelector('.general-button');\n    query.removeEventListener('click', _tasks__WEBPACK_IMPORTED_MODULE_1__[\"addTodo\"]);\n    query.removeAttribute('id');\n    query.setAttribute('id', 'edit');\n    query.innerHTML = 'Update';\n    const todo = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"getAToDo\"])(todoId);\n    appendProject();\n    populateEditForm(todo);\n\n    document.getElementById('edit').addEventListener('click', () => {\n      Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"updateToDo\"])(index);\n    });\n  });\n}\n\n\nfunction addStrike(index) {\n  document.querySelectorAll(`.text-${index}`).forEach((element) => {\n    element.classList.add('lineThrough');\n  });\n  const ls = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"getLocalStorage\"])();\n  ls[index].done = true;\n  Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"setLocalStorage\"])(ls);\n}\n\nfunction removeStrike(index) {\n  document.querySelectorAll(`.text-${index}`).forEach((element) => {\n    element.classList.remove('lineThrough');\n  });\n  const ls = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"getLocalStorage\"])();\n  ls[index].done = false;\n  Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"setLocalStorage\"])(ls);\n}\n\nfunction doneState(index) {\n  document.querySelector(`.done-${index}`).addEventListener('click', function strikeThrough() {\n    const dataDone = this.getAttribute('data-done');\n    const parsedData = JSON.parse(dataDone);\n    if (parsedData === false) {\n      addStrike(index);\n      this.setAttribute('data-done', 'true');\n    } else {\n      removeStrike(index);\n      this.setAttribute('data-done', 'false');\n    }\n  });\n}\n\nfunction displayTable(projectId) {\n  const ls = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"getLocalStorage\"])();\n  if (ls === null) {\n    document.querySelector('.project-error').innerHTML = 'There are no task in this project';\n  } else {\n    ls.forEach((element, index) => {\n      if (element.projectId === projectId) {\n        const tr = document.createElement('TR');\n        tr.setAttribute('class', `todo-${index}`);\n        tr.innerHTML = `\n        <td data-column=\"title\" class=\"text-${index}\">${element.title}</td>\n        <td data-column=\"description\" class=\"text-${index}\">${element.description}</td>\n        <td data-column=\"date\" class=\"text-${index}\">${element.date}</td>\n        <td data-column=\"date\" class=\"text-${index}\">${element.priority}</td>\n        <td data-column=\"date\" class=\"text-${index}\">${element.projectId}</td>\n        <td data-column=\"edit\"><a data-id=${index} class=\"btn btn-primary edit-${index}\">Edit</a></td>\n        <td data-column=\"delete\"><a data-id=\"${index}\" class=\"btn btn-danger delete-${index}\">Delete</a></td>\n        <td data-column=\"done\"><a data-id=\"${index}\" data-done=\"${element.done}\" class=\"btn btn-primary done-${index} done\">Done</a></td>\n      `;\n        document.querySelector('tbody').appendChild(tr);\n        doneState(index);\n        deleteToDo(index);\n        editToDo(index);\n      }\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/taskDom.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: getAToDo, updateToDo, deleteTask, addTodo, validate, saveTodo, refreshPage, checkStorage, getLocalStorage, setLocalStorage, toDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAToDo\", function() { return getAToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateToDo\", function() { return updateToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTodo\", function() { return saveTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refreshPage\", function() { return refreshPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkStorage\", function() { return checkStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorage\", function() { return getLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDo\", function() { return toDo; });\n\nconst myTodo = [];\n\nfunction toDo(title, description, date, priority, projectId, done = false) {\n  return {\n    title,\n    description,\n    date,\n    done,\n    priority,\n    projectId,\n  };\n}\n\nfunction setLocalStorage(data) {\n  localStorage.setItem('myTodo', JSON.stringify(data));\n}\n\nfunction getLocalStorage() {\n  const ls = localStorage.getItem('myTodo', null, 2);\n\n  return JSON.parse(ls);\n}\n\n\nfunction checkStorage() {\n  if (getLocalStorage() == null) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction refreshPage() {\n  window.location.reload();\n}\n\nfunction saveTodo(todo) {\n  if (checkStorage()) {\n    const ls = getLocalStorage();\n    ls.push(todo);\n    setLocalStorage(ls);\n  } else {\n    myTodo.push(todo);\n    setLocalStorage(myTodo);\n  }\n\n  refreshPage();\n}\n\nfunction validate(titleVal, descVal, dateVal, priorityVal, projectId) {\n  if (titleVal === ''\n    || descVal === ''\n    || dateVal === ''\n    || projectId === ''\n    || priorityVal === '') {\n    return false;\n  }\n  return true;\n}\nfunction getInputValue() {\n  const titleVal = document.getElementById('title').value;\n  const descVal = document.getElementById('description').value;\n  const dateVal = document.getElementById('date').value;\n  const projectId = document.getElementById('select-project').value;\n  const priorityVal = document.getElementById('priority').value;\n\n  return [titleVal, descVal, dateVal, priorityVal, projectId];\n}\n\nfunction addTodo() {\n  const [titleVal, descVal, dateVal, priorityVal, projectId] = getInputValue();\n\n  const validateInput = validate(titleVal, descVal, dateVal);\n\n  if (validateInput) {\n    document.querySelector('.bg-modal').style.display = 'none';\n\n    const newTodo = toDo(titleVal, descVal, dateVal, priorityVal, projectId);\n\n    saveTodo(newTodo);\n  }\n}\n\nfunction deleteTask(todoId) {\n  if (checkStorage()) {\n    const ls = getLocalStorage();\n    ls.splice(todoId, 1);\n    setLocalStorage(ls);\n  }\n\n  refreshPage();\n}\n\nfunction updateToDo(todoId) {\n  const [titleVal, descVal, dateVal, prioriVal] = getInputValue();\n  const validateInput = validate(titleVal, descVal, dateVal, prioriVal);\n\n  if (validateInput) {\n    const ls = getLocalStorage();\n    const todo = ls[todoId];\n    todo.title = titleVal;\n    todo.description = descVal;\n    todo.date = dateVal;\n    todo.priority = prioriVal;\n    ls[todoId] = todo;\n    setLocalStorage(ls);\n    refreshPage();\n  }\n}\n\nfunction getAToDo(todoId) {\n  const ls = getLocalStorage();\n  const todo = ls[todoId];\n  return todo;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ })

/******/ });