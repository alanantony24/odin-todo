import Project from "./projects";
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
      
    });
  }
}

export { clickOnMainTaskLists, createProjectFormDisplay, addNewProject };
