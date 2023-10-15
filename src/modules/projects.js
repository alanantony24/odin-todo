class Project {
    constructor(name) {
        this.name = name;
        this.listOfTasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.listOfTasks;
    }
}