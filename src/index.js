import { addTodo, onPageLoad } from './todo';

document.getElementById('button').addEventListener('click',
  () => {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.querySelector('.close').addEventListener('click',
  () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addTodo);
});

document.addEventListener('load', onPageLoad());
