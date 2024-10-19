export default function card (project, todo) {
    const template = document.getElementById('todo-card-template');
    const cardFragment = document.importNode(template.content, true)
    const card = cardFragment.firstElementChild;

    const titleInput = card.querySelector('#title-input')
    const descriptionInput = card.querySelector('#description-input')
    const notesInput = card.querySelector('#notes-input')
    const duedateInput = card.querySelector('#duedate-input')
    const prioritySelect = card.querySelector('#priority-select')
    const completeInput = card.querySelector('#complete-input')
    const deleteButton = card.querySelector('#delete-button')

    titleInput.value = todo.title;
    descriptionInput.value = todo.description;
    notesInput.value = todo.notes;
    duedateInput.value = todo.dueDate;
    completeInput.checked = todo.isComplete;

    const options = [...card.querySelectorAll('#priority-select option')];

    options.forEach(option => {
        if (option.value === todo.priority) {
            option.selected = true;
        }
    });

    titleInput.addEventListener('change', (event) => {
        todo.title = event.target.value;
    })

    descriptionInput.addEventListener('change', (event) => {
        todo.description = event.target.value;
    })

    notesInput.addEventListener('change', (event) => {
        todo.notes = event.target.value;
    })

    duedateInput.addEventListener('change', (event) => {
        todo.dueDate = event.target.value;
    })

    prioritySelect.addEventListener('change', (event) => {
        todo.priority = event.target.value;
    })

    completeInput.addEventListener('change', (event) => {
        todo.isComplete = event.target.checked
    });
    
    deleteButton.addEventListener('click', (event) => {
        card.remove();
        console.log(project)
        project.todoList = project.todoList.filter(t => t !== todo);
        console.log(project)
    })

    return card;
}
