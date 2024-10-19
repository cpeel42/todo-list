export default class Card {
    constructor(project, todo, domElementFactory) {
        this.project = project;
        this.todo = todo;
        this.card = domElementFactory.createDiv('todo-card');

        this.titleLabel = domElementFactory.createLabel('title', 'Title:');
        this.titleInput = domElementFactory.createInput('title', 'text', todo.title, 'Title');

        this.descriptionLabel = domElementFactory.createLabel('description', 'Description:');
        this.descriptionInput = domElementFactory.createInput('description', 'text', todo.description, 'Description');

        this.notesLabel = domElementFactory.createLabel('notes', 'Notes:');
        this.notesInput = domElementFactory.createInput('notes', 'text', todo.notes, 'Notes');

        this.dueDateLabel = domElementFactory.createLabel('duedate', 'Due Date:');
        this.dueDateInput = domElementFactory.createInput('duedate', 'date', todo.dueDate);

        this.priorityLabel = domElementFactory.createLabel('priority', 'Priority:');
        this.prioritySelect = domElementFactory.createSelect('priority', ['---', 'Low', 'Medium', 'High'], todo.priority);

        this.isCompleteLabel = domElementFactory.createLabel('isComplete', 'Completed:');
        this.isCompleteInput = domElementFactory.createInput('isComplete', 'checkbox', todo.isComplete, '');

        this.deleteLabel = domElementFactory.createLabel('delete', 'Delete: ')
        this.deleteButton = domElementFactory.createButton('delete-button', 'Delete');

        this.attachEventListeners();
        this.appendCardElements();
    }

    appendCardElements() {
        this.card.append(
            this.titleLabel, this.titleInput,
            this.descriptionLabel, this.descriptionInput,
            this.notesLabel, this.notesInput,
            this.dueDateLabel, this.dueDateInput,
            this.priorityLabel, this.prioritySelect,
            this.isCompleteLabel, this.isCompleteInput,
            this.deleteLabel, this.deleteButton
        )
    }

    attachEventListeners() {
        this.titleInput.addEventListener('change', (event) => {
            this.todo.title = event.target.value;
        })

        this.descriptionInput.addEventListener('change', (event) => {
            this.todo.description = event.target.value;
        })

        this.notesInput.addEventListener('change', (event) => {
            this.todo.notes = event.target.value;
        })

        this.dueDateInput.addEventListener('change', (event) => {
            this.todo.dueDate = event.target.value;
        })

        this.prioritySelect.addEventListener('change', (event) => {
            this.todo.priority = event.target.value;
        })

        this.isCompleteInput.addEventListener('change', (event) => {
            this.todo.isComplete = event.target.checked
        });
        
        this.deleteButton.addEventListener('click', (event) => {
            this.card.remove();
            this.project.todoList = this.project.todoList.filter(todo => todo !== this.todo);
        })
    }
}
