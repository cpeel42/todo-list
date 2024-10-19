import "./styles.css";
import Card from "./Card.js"
import DomElementFactory from "./DomElementFactory.js";
import projects from "./Projects.js"
import Todo from "./Todo.js";
import Project from "./Project.js";

const domElementFactory = new DomElementFactory();

const cardsDiv = document.querySelector('.cards')
const addTodoButton = document.querySelector('.add-todo-button');
const addProjectButton = document.querySelector('.add-project-button');
const projectSelect = document.querySelector('#project-select');
let currentProject = projects[0];

makeProjects();
makeCards();

addTodoButton.addEventListener('click', (event) => {
    newCard();
})

addProjectButton.addEventListener('click', (event) => {
    let projectName = prompt('Enter the name of your new project');
    let project = new Project(projectName, []);
    projects.push(project)
    currentProject = project;
    makeProjects();
    newCard();
})

projectSelect.addEventListener('change', (event) => {
    const selectedProjectName = event.target.value;
    currentProject = projects.find(project => project.name === selectedProjectName);
    makeCards(currentProject);
})

function newCard() {
    let todo = new Todo();
    currentProject.todoList.push(todo);
    makeCards();
}

function makeProjects() {
    projectSelect.innerHTML = '';
    const projectNames = projects.map(project => project.name); 
    projectNames.forEach(optionName => {
        const isSelected = (optionName === currentProject.name) ? true : false;
        let option = domElementFactory.createOption(optionName, isSelected);
        projectSelect.appendChild(option);
    });
}

function makeCards() {
    cardsDiv.innerHTML = '';
    currentProject.todoList.forEach(todo => {
        const card = new Card(currentProject, todo, domElementFactory);
        cardsDiv.appendChild(card.card);
    });
}

