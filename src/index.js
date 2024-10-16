import "./styles.css";
import Todo from "./Todo.js";
import Project from "./Project.js"
import Card from "./Card.js"
import DomElementFactory from "./DomElementFactory.js";

const todo1 = new Todo (
    'Test 1', 
    'This is test 1', 
    '2024-01-01', 
    'Low', 
    'This is a note in test 1',
    false
)

const todo2 = new Todo (
    'Test 2', 
    'This is test 2', 
    '2024-02-02', 
    'Medium', 
    'This is a note in test 3',
    true
)

const todo3 = new Todo (
    'Test 3', 
    'This is test 3', 
    '2024-03-03', 
    'High', 
    'This is a note in test 3',
    false
)


const testProject1 = new Project('Test Project 1', [todo1, todo2])
const testProject2 = new Project('Test Project 2', [todo3])

// console.log(testProject1)
// console.log(testProject2)


const domElementFactory = new DomElementFactory();

const card1 = new Card(todo1, domElementFactory);
const card2 = new Card(todo2, domElementFactory);
const card3 = new Card(todo3, domElementFactory);

const cards = document.querySelector('.todo-cards')

cards.appendChild(card1.card);
cards.appendChild(card2.card);
cards.appendChild(card3.card);


