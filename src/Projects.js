//Projects.js



export class Project {
    constructor(name, todoList) {
        this.name = name;
        this.todoList = todoList
    }
}

export class Todo {
    constructor(title = '', description = '', dueDate = '', priority = '---', notes = '', isComplete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.isComplete = isComplete;
    }
}

const todo1 = new Todo (
    'Test 1', 
    'This is test 1', 
    '2024-01-01', 
    'Low', 
    'This is a note in test 1',
    false
);

const todo2 = new Todo (
    'Test 2', 
    'This is test 2', 
    '2024-02-02', 
    'Medium', 
    'This is a note in test 3',
    true
);

const todo3 = new Todo (
    'Test 3', 
    'This is test 3', 
    '2024-10-22', 
    'High', 
    'This is a note in test 3',
    false
);

const todo4 = new Todo (
    'Test 4', 
    'This is test 4', 
    '2024-10-19', 
    '---', 
    'This is a note in test 4',
    true
);

const project1 = new Project (
    'Project 1', 
    [todo1, todo2]
);

const project2 = new Project (
    'Project 2',
    [todo3, todo4]
);

const LOCAL_STORAGE_LIST_KEY = 'project.list'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [project1, project2];


export {projects, LOCAL_STORAGE_LIST_KEY}