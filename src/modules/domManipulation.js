import Project from "./projects";
import { getProjectListFromLocalStorage, addProjectToLocalStorage } from "./localStorage";
//selects the taskLists from the sideBar, highlights them and changes the name of the heading in the right pane
function clickOnMainTaskLists() {
  const mainTaskLists = document.querySelectorAll(".mainTaskLists");
  const taskListHeading = document.querySelector(".taskListHeading");
  mainTaskLists.forEach((mainTaskList) => {
    mainTaskList.addEventListener("click", () => {
      var prevSelection = document.querySelector(".selected");
      if (prevSelection) {
        prevSelection.classList.remove("selected");
      }
      taskListHeading.textContent = mainTaskList.children[1].textContent;
      mainTaskList.classList.toggle("selected");
    });
  });
}

//to toggle the sidebar.
function createProjectFormDisplay() {
  const addProject = document.querySelector(".addProject");
  addProject.addEventListener("click", () => {
    const projectForm = document.querySelector(".projectForm");
    projectForm.classList.remove("hidden");
    const cancelBtn = projectForm.children[2].children[1];
    cancelBtn.addEventListener("click", () => {
      projectForm.classList.add("hidden");
    });
  });
}

function addNewProject() {
  const projectForm = document.querySelector(".projectForm");
  if (projectForm) {
    const projectName = document.getElementById("projectName");
    const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener("click", () => {
      const newProject = new Project(projectName.value);
      addProjectToLocalStorage(newProject);
    });
  }
}

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
  })
}

export { clickOnMainTaskLists, createProjectFormDisplay, addNewProject, displayAllProjects };
