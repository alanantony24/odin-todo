import Task from "../modules/tasks";
import Project from "./projects";

function getProjectListFromLocalStorage() {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  if (projectsList == null) {
    var initProjectList = [];
    localStorage.setItem("projectsList", JSON.stringify(initProjectList));
  }
  return projectsList;
}

function addProjectToLocalStorage(project) {
  var projectsList;
  projectsList = JSON.parse(localStorage.getItem("projectsList"));
  if (projectsList == null) {
    projectsList = [];
  }
  projectsList.push(project);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
}

function createNewTask(projectName, task) {
  var tasksList;
  tasksList = JSON.parse(localStorage.getItem("projectsList"));
  const newTask = new Task(
    task.title,
    task.description,
    task.dueDate,
    task.priority
  ); //create a new task object
  const project = getProjectByName(projectName); //find which project to add the task to
  //add task to list of tasks in project, and push the taskList to the respective project and save to localStorage.
  tasksList[project.index].listOfTasks.push(newTask);
  //tasksList.push(project);
  localStorage.setItem("projectsList", JSON.stringify(tasksList));
}

function getProjectByName(projectName) {
  var projectList = getProjectListFromLocalStorage();
  let projectFound = null;
  var index = null;
  projectList.forEach((project) => {
    //console.log(projectName);
    //console.log(project);
    if (projectName === project.name) {
      projectFound = project;
      index = projectList.indexOf(project);
    }
  });
  return { projectFound, index };
}

function getTasksByProject(projectName) {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var listOfTasks;
  if (projectsList != null) {
    projectsList.forEach((project) => {
      if (projectName == project.name) {
        listOfTasks = project.listOfTasks;
      }
    });
    return listOfTasks;
  }
}

function deleteTask(projectName, taskName) {
  var projectsList = JSON.parse(localStorage.getItem("projectsList"));
  var tasksList = getTasksByProject(projectName);
  tasksList.forEach((task) => {
    if (taskName == task.title) {
      var tasksList = getTasksByProject(projectName);
      var splicedList = tasksList.splice(task, 1);
      var project = getProjectByName(projectName);
      //add task to list of tasks in project
      projectsList[project.index].listOfTasks = splicedList;
      //tasksList.push(project);
      localStorage.setItem("projectsList", JSON.stringify(tasksList));
    }
  });
}

export {
  getProjectListFromLocalStorage,
  addProjectToLocalStorage,
  createNewTask,
  getProjectByName,
  getTasksByProject,
  deleteTask
};
