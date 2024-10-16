export default class Card {
    constructor(todo, domElementFactory) {
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
        this.prioritySelect = domElementFactory.createSelect('priority', ['Low', 'Medium', 'High'], todo.priority);

        this.isCompleteLabel = domElementFactory.createLabel('isComplete', 'Completed:');
        this.isCompleteInput = domElementFactory.createInput('isComplete', 'checkbox', todo.isComplete, '');

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
            this.isCompleteLabel, this.isCompleteInput
        )
    }

    attachEventListeners() {
        this.titleInput.addEventListener('change', (event) => {
            this.todo.title = event.target.value;
            console.log('Todo title changed:', this.todo.title);
        })

        this.descriptionInput.addEventListener('change', (event) => {
            this.todo.description = event.target.value;
            console.log('Todo description changed:', this.todo.description);
        })

        this.notesInput.addEventListener('change', (event) => {
            this.todo.notes = event.target.value;
            console.log('Todo notes changed:', this.todo.notes);
        })

        this.dueDateInput.addEventListener('change', (event) => {
            this.todo.dueDate = event.target.value;
            console.log('Todo dueDate changed:', this.todo.dueDate);
        })

        this.prioritySelect.addEventListener('change', (event) => {
            this.todo.priority = event.target.value;
            console.log('Todo priority changed:', this.todo.priority);
        })

        this.isCompleteInput.addEventListener('change', (event) => {
            this.todo.isComplete = event.target.checked
            console.log('Todo isComplete changed:', this.todo.isComplete);
        });
    }
}
