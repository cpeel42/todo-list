//index.js

import "./styles.css";
import card from "./Card.js"
import {projects, Todo, Project, LOCAL_STORAGE_LIST_KEY} from "./Projects.js"

const cardsDiv = document.querySelector('.cards');
const addTodoButton = document.querySelector('.add-todo-button');
const addProjectButton = document.querySelector('.add-project-button');
const pageTitle = document.querySelector('.project-title');
const projectsList = document.querySelector('.projects-list');

const filterAll = document.querySelector('.filter-all');
const filterToday = document.querySelector('.filter-today');
const filterUpcoming = document.querySelector('.filter-upcoming');
const filterIncomplete = document.querySelector('.filter-incomplete');

let currentProject = projects[0];
let currentTodos = projects[0].todoList;

pageTitle.textContent = currentProject.name;


addTodoButton.addEventListener('click', (event) => {
    newCard();
})

addProjectButton.addEventListener('click', (event) => {
    let projectName = prompt('Enter the name of your new project');
    let project = new Project(projectName, []);
    projects.push(project)
    currentProject = project;
    currentTodos = currentProject.todoList;
    pageTitle.textContent = currentProject.name;
    newCard();
})

projectsList.addEventListener('click', (event) => {
    const selectedProjectName = event.target.textContent;
    currentProject = projects.find(project => project.name === selectedProjectName);
    currentTodos = currentProject.todoList;
    pageTitle.textContent = currentProject.name;
    render();
});

filterAll.addEventListener('click', (event) => {
    currentTodos = getAllTodos();
    pageTitle.textContent = "All";
    render();
});


filterToday.addEventListener('click', (event) => {
    currentTodos = getAllTodos().filter(todo => isDueWithinDays(todo.dueDate, 0));
    pageTitle.textContent = "Today";
    render();
});

filterUpcoming.addEventListener('click', (event) => {
    currentTodos = getAllTodos().filter(todo => isDueWithinDays(todo.dueDate, 7));
    pageTitle.textContent = "Upcoming";
    render();
});

filterIncomplete.addEventListener('click', (event) => {
    currentTodos = getAllTodos().filter(todo => todo.isComplete === false);
    pageTitle.textContent = "Incomplete";
    render();
})

function isDueWithinDays(dueDate, days) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [year, month, day] = dueDate.split('-').map(Number);
    const due = new Date(year, month - 1, day);
    due.setHours(0, 0, 0, 0); 

    const timeDifference = due - today;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference >= 0 && dayDifference <= days;
}

function getAllTodos() {
    let allTodos = []
    projects.forEach(project => {
        project.todoList.forEach(todo => {
            allTodos.push(todo);
        });
    });
    return allTodos;
}

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
        let element = document.createElement('li');
        element.textContent = projectName;
        projectsList.appendChild(element);
    })
}

function renderCards() {
    while(cardsDiv.firstChild) {
        cardsDiv.removeChild(cardsDiv.firstChild)
    }
    currentTodos.forEach(todo => {
    const newCard = card(todo);
    cardsDiv.appendChild(newCard);
    });
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects))
}

function render() {
    renderCards();
    renderProjects();
    save();
}

render();