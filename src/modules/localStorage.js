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

export {getProjectListFromLocalStorage, addProjectToLocalStorage}