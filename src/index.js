// import { addTodo, onPageLoad } from './todo';
import addProject from './project';

// document.getElementById('.general-button').addEventListener('click',
//   () => {
//     document.querySelector('.task-modal').style.display = 'flex';
//   });

// document.querySelector('.close').addEventListener('click',
//   () => {
//     document.querySelector('.bg-modal').style.display = 'none';
//   });

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('add').addEventListener('click', addTodo);
// });

// document.addEventListener('load', onPageLoad());

document.querySelector('.add-project').addEventListener('click', () => {
  document.querySelector('.project-modal').style.display = 'flex';
});

document.querySelector('.project-button').addEventListener('click', () => {
  const name = document.querySelector('.project-name').value;
  addProject(name);
});