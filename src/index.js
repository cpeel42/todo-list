import "./styles.css";
import Todo from "./Todo.js";
import Project from "./Project.js"

const testTodo1 = new Todo (
    'Test 1', 
    'This is test 1', 
    '2024-01-01', 
    'Low Priority', 
    'This is a note in test 1',
    'false'
)

const testTodo2 = new Todo (
    'Test 2', 
    'This is test 2', 
    '2024-02-02', 
    'Medium Priority', 
    'This is a note in test 3',
    'true'
)

const testTodo3 = new Todo (
    'Test 3', 
    'This is test 3', 
    '2024-03-03', 
    'High Priority', 
    'This is a note in test 3',
    'false'
)


const testProject1 = new Project('Test Project 1', [testTodo1, testTodo2])
const testProject2 = new Project('Test Project 2', [testTodo3])

console.log(testProject1)
console.log(testProject2)