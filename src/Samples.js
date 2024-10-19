import Todo from "./Todo.js";
import Project from "./Project.js"

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
    '2024-03-03', 
    'High', 
    'This is a note in test 3',
    false
);

const defaultProject = new Project (
    'Default', 
    [todo1, todo2]
);

const project2 = new Project (
    'Test Project 2',
    [todo3]
);

export const sampleProjects = [defaultProject, project2]; 