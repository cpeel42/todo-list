import "./styles.css";
import card from "./Card.js"
import {projects, Todo, Project} from "./Projects.js"

const cardsDiv = document.querySelector('.cards')
const addTodoButton = document.querySelector('.add-todo-button');
const addProjectButton = document.querySelector('.add-project-button');
const projectTitle = document.querySelector('.project-title')
const projectsList = document.querySelector('.projects-list')
let currentProject = projects[0];


addTodoButton.addEventListener('click', (event) => {
    newCard();
})

addProjectButton.addEventListener('click', (event) => {
    let projectName = prompt('Enter the name of your new project');
    let project = new Project(projectName, []);
    projects.push(project)
    currentProject = project;
    newCard();
})

projectsList.addEventListener('click', (event) => {
    const selectedProjectName = event.target.textContent;
    currentProject = projects.find(project => project.name === selectedProjectName);
    render();
})

function newCard() {
    let todo = new Todo();
    currentProject.todoList.push(todo);
    render();
}

function renderProjects() {
    while(projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }
    const projectNames = projects.map(project => project.name); 
    projectNames.forEach(projectName => {
        const isSelected = (projectName === currentProject.name) ? true : false;
        let element = document.createElement('li');
        element.textContent = projectName;
        projectsList.appendChild(element);
    })
    projectTitle.textContent = currentProject.name;
}

function renderCards() {
    while(cardsDiv.firstChild) {
        cardsDiv.removeChild(cardsDiv.firstChild)
    }
    currentProject.todoList.forEach(todo => {
        const newCard = card(currentProject, todo);
        cardsDiv.appendChild(newCard);
    });
}

function render() {
    renderCards();
    renderProjects();
}

render();