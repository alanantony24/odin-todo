import Project from "./projects";
import Task from "./tasks";
import { getProjectListFromLocalStorage, addProjectToLocalStorage, getProjectByName, createNewTask } from "./localStorage";
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
      }
      else {
        elementHeading.textContent = element.children[0].textContent;
        if (document.querySelector(".noTasksText")) {
          document.querySelector(".noTasksText").remove();
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
      projectForm.classList.add("hidden");
    });
  }
}


//get the data from localStorage, and generate the html for the inidividual project objects
function displayAllProjects() {
  const projectsListFromLocalStorage = getProjectListFromLocalStorage();
  projectsListFromLocalStorage.forEach((project) => {
    const projectsList = document.querySelector(".projectsList") 
    const projectObject = document.createElement("div")
    projectObject.classList.add("projectObject");
    const projectName = document.createElement("h4");
    projectName.textContent = project.name;
    const kebabIcon = document.createElement("img");
    kebabIcon.src = "../src/images/kebab.png";
    projectObject.appendChild(projectName);
    projectObject.appendChild(kebabIcon);
    projectsList.appendChild(projectObject);
  });
};

//create a button to unhide the create task form
function unhideCreateTaskForm() {
  const createTaskFormBtn = document.createElement("button");
  createTaskFormBtn.textContent = "Create Task"
  document.querySelector(".listOfTasks").appendChild(createTaskFormBtn)
  createTaskFormBtn.classList.add("createTaskFormBtn");
  createTaskFormBtn.addEventListener("click", () => {
    const createTaskForm = document.querySelector(".taskForm");
    createTaskForm.classList.remove("hidden");
  })
}

//create a task and store it to a project
function createTask() {
  const createTaskBtn = document.querySelector(".addTaskBtn");
  var title = document.getElementById("taskName");
  var description = document.getElementById("description");
  var date = document.getElementById("date");
  createTaskBtn.addEventListener("click", () => {
    const projectName = document.querySelector(".elementHeading").textContent;
    const newTask = new Task(title.value, description.value, date.value)
    createNewTask(projectName, newTask);
  })
}



export { clickOnElementList, displayCreateProjectForm, addNewProject, displayAllProjects, createTask };
