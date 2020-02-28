
const TaskStorage = () => {
  const setTask = (data) => {
    localStorage.setItem('task', JSON.stringify(data));
  }

  const getTask = () => {
    const tasks = localStorage.getItem('task');

    return JSON.parse(tasks);
  }

  const updateTask = (index, data) => {
    const [titleVal, descVal, dateVal] = data
    const tasks = getTask();
    let task = tasks[index];
    task.title = titleVal;
    task.description = descVal;
    task.date = dateVal;
    tasks[index] = task
    setLocalStorage(tasks);
  }

  return {
    setTask,
    getTask,
    updateTask
  }

}

export default TaskStorage; 