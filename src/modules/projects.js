export default class Project {
  constructor(name) {
    this.name = name;
    this.listOfTasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.listOfTasks;
  }

  setTasks() {
    this.listOfTasks = this.listOfTasks;
  }
}
