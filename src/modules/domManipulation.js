import Project from "./projects";
import Task from "./tasks";
import {
  getProjectListFromLocalStorage,
  addProjectToLocalStorage,
  getTasksByProject,
  createNewTask,
  getAllTasks,
  deleteTask,
  deleteProject,
  editProject,
} from "./localStorage";
//selects the taskLists from the sideBar, highlights them and changes the name of the heading in the right pane
function clickOnElementList(elementList) {
  const list = document.querySelectorAll(elementList);
  const elementHeading = document.querySelector(".elementHeading");
  list.forEach((element) => {
    element.addEventListener("click", () => {
      var prevSelection = document.querySelector(".selected");
      if (prevSelection) {
        prevSelection.classList.remove("selected");
      }
      if (elementList === ".mainTaskListObject") {
        elementHeading.textContent = element.children[1].textContent;
      } else if (elementList === ".projectObject") {
        elementHeading.textContent = element.children[0].textContent;
        if (document.querySelector(".noTasksText")) {
          document.querySelector(".noTasksText").remove();
          displayTasksByProject();
          deleteProjectElement();
          deleteTaskElement();
          unhideCreateTaskForm();
        }
      }
      element.classList.toggle("selected");
    });
  });
}

//to display the create project form
function displayCreateProjectForm() {
  const addProject = document.querySelector(".addProject"); //add project icon + text on the sidebar
  addProject.addEventListener("click", () => {
    const projectForm = document.querySelector(".projectForm");
    projectForm.classList.remove("hidden");
    const cancelBtn = projectForm.children[2].children[1];
    cancelBtn.addEventListener("click", () => {
      projectForm.classList.add("hidden");
    });
  });
}

//get data from the project form and save it to localStorage
function addNewProject() {
  const projectForm = document.querySelector(".projectForm");
  if (projectForm) {
    const projectName = document.getElementById("projectName");
    const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener("click", () => {
      const newProject = new Project(projectName.value);
      addProjectToLocalStorage(newProject);
      displayAllProjects();
      clickOnElementList(".projectObject");
      projectForm.classList.add("hidden");
    });
  }
}

//get the data from localStorage, and generate the html for the inidividual project objects
function displayAllProjects() {
  const projectsListFromLocalStorage = getProjectListFromLocalStorage();
  const projectsList = document.querySelector(".projectsList");
  projectsList.replaceChildren();
  if (projectsListFromLocalStorage != null) {
    projectsListFromLocalStorage.forEach((project) => {
      const projectObject = document.createElement("div");
      projectObject.classList.add("projectObject");
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("rightDiv");
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("leftDiv");
      const projectName = document.createElement("h4");
      projectName.textContent = project.name;
      const deleteIcon = document.createElement("img");
      deleteIcon.src = "../src/images/delete.png";
      deleteIcon.classList.add("deleteProject");
      const editIcon = document.createElement("img");
      editIcon.src = "../src/images/edit.png";
      editIcon.classList.add("editProjectBtn");
      leftDiv.appendChild(projectName);
      rightDiv.appendChild(editIcon);
      rightDiv.appendChild(deleteIcon);
      projectObject.appendChild(leftDiv);
      projectObject.appendChild(rightDiv);
      projectsList.appendChild(projectObject);
    });
  }
}

//create a button to unhide the create task form
function unhideCreateTaskForm() {
  const createTaskFormBtn = document.createElement("button");
  createTaskFormBtn.textContent = "Create Task";
  document.querySelector(".listOfTasks").appendChild(createTaskFormBtn);
  createTaskFormBtn.classList.add("createTaskFormBtn");
  createTaskFormBtn.addEventListener("click", () => {
    const createTaskForm = document.querySelector(".taskForm");
    createTaskForm.classList.remove("hidden");
  });
}

//create a task and store it to a project
function createTask() {
  const createTaskBtn = document.querySelector(".addTaskBtn");
  var title = document.getElementById("taskName");
  var description = document.getElementById("description");
  var date = document.getElementById("date");
  createTaskBtn.addEventListener("click", () => {
    const createTaskForm = document.querySelector(".taskForm");
    const projectName = document.querySelector(".elementHeading").textContent;
    const newTask = new Task(title.value, description.value, date.value);
    createNewTask(projectName, newTask);
    displayTasksByProject();
    createTaskForm.classList.add("hidden");
  });
}

function displayTasksByProject() {
  const projectName = document.querySelector(".elementHeading").textContent;
  const tasksList = getTasksByProject(projectName);
  const tasksDiv = document.querySelector(".tasksList");
  tasksDiv.replaceChildren();
  tasksList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskElement");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("taskElementLeftDiv");
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("taskElementRightDiv");
    const taskName = document.createElement("h3");
    const dueDate = document.createElement("h3");
    const editIcon = document.createElement("img");
    const deleteIcon = document.createElement("img");
    const starIcon = document.createElement("img");
    deleteIcon.classList.add("deleteTask");
    editIcon.src = "../src/images/edit.png";
    deleteIcon.src = "../src/images/delete.png";
    starIcon.src = "../src/images/star.png";
    taskName.textContent = task.title;
    dueDate.textContent = task.dueDate;
    leftDiv.append(starIcon);
    leftDiv.append(taskName);
    rightDiv.append(dueDate);
    rightDiv.append(editIcon);
    rightDiv.append(deleteIcon);
    taskElement.append(leftDiv);
    taskElement.append(rightDiv);
    tasksDiv.appendChild(taskElement);
  });
  deleteTaskElement();
}

function deleteTaskElement() {
  const taskElements = document.querySelectorAll(".deleteTask");
  console.log(taskElements);
  const projectName = document.querySelector(".elementHeading").textContent;
  taskElements.forEach((taskElement) => {
    taskElement.addEventListener("click", () => {
      var taskName =
        taskElement.parentNode.previousSibling.lastChild.textContent;
      console.log(taskName);
      deleteTask(projectName, taskName);
      taskElement.parentNode.parentNode.remove();
    });
  });
}

function deleteProjectElement() {
  const projectElements = document.querySelectorAll(".deleteProject");
  projectElements.forEach((projectElement) => {
    projectElement.addEventListener("click", () => {
      var projectName =
        projectElement.parentNode.previousSibling.lastChild.textContent;
      console.log(projectName);
      deleteProject(projectName);
      projectElement.parentNode.parentNode.remove();
    });
  });
}

function editProjectElement() {
  const editProjectForm = document.querySelector(".projectForm");
  const editProjectBtns = document.querySelectorAll(".editProjectBtn");
  if (editProjectBtns != null) {
    editProjectBtns.forEach((editProjectBtn) => {
      editProjectBtn.addEventListener("click", () => {
        editProjectForm.classList.remove("hidden");
        const prevProjectName =
          editProjectBtn.parentElement.previousSibling.textContent;
        document.getElementById("projectName").value = prevProjectName;
        document
          .getElementById("addProjectBtn")
          .addEventListener("click", () => {
            var editedName = document.getElementById("projectName");
            editProject(prevProjectName, editedName.value);
            displayAllProjects();
          });
      });
    });
  }
}

function displayAllTasks() {
  const tasksList = getAllTasks();
  const tasksDiv = document.querySelector(".tasksList");
  tasksDiv.replaceChildren();
  tasksList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskElement");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("taskElementLeftDiv");
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("taskElementRightDiv");
    const taskName = document.createElement("h3");
    const dueDate = document.createElement("h3");
    const starIcon = document.createElement("img");
    starIcon.src = "../src/images/star.png";
    taskName.textContent = task.title;
    dueDate.textContent = task.dueDate;
    leftDiv.append(starIcon);
    leftDiv.append(taskName);
    rightDiv.append(dueDate);
    taskElement.append(leftDiv);
    taskElement.append(rightDiv);
    tasksDiv.appendChild(taskElement);
  });
}

export {
  clickOnElementList,
  displayCreateProjectForm,
  displayTasksByProject,
  addNewProject,
  displayAllProjects,
  createTask,
  deleteTaskElement,
  deleteProjectElement,
  editProjectElement,
  displayAllTasks
};
