export default class Card {
    constructor(todo) {
        this.todo = todo;
        this.card = document.createElement('div');
        this.card.className = 'todo-card';
        this.createCardElements();
    }
    
    createCardElements() {
        const elements = [
            {labelText: 'Title: ', id: 'title', type: 'text', elementType: 'input', data: this.todo.title},
            {labelText: 'Description: ', id: 'description', type: 'text', elementType: 'input', data: this.todo.description},
            {labelText: 'Notes: ', id: 'notes', type: 'text', elementType: 'input', data: this.todo.notes},
            {labelText: 'Due Date: ', id: 'duedate', type: 'date', elementType: 'input', data: this.todo.dueDate},
            {labelText: 'Priority: ', id: 'priority', type: null, elementType: 'select', data: this.todo.priority},
            {labelText: 'Completed: ', id: 'isComplete', type: 'checkbox', elementType: 'input', data: this.todo.isComplete},
        ]

        elements.forEach(({ labelText, id, type, elementType, data}) => {
            const element = elementType === 'select' ? new Select(labelText, id, elementType, data) : new Input(labelText, id, type, elementType, data);
            this.appendLabelAndElement(element);
        })
    }

    appendLabelAndElement(inputElement) {
        this.card.appendChild(inputElement.label);
        this.card.appendChild(inputElement.element);
    }
}

class Element {
    constructor(labelText, id, elementType, data) {
        this.label = document.createElement('label');
        this.label.htmlFor = id;
        this.label.textContent = labelText;
        this.element = document.createElement(elementType);
        this.element.id = id;
        this.element.placeholder = data;
    }
}

class Input extends Element {
    constructor(labelText, id, type, elementType, data) {
        super(labelText, id, elementType, data);
        this.element.type = type;
        if (data === true && type === 'checkbox') {
            this.element.checked = true;
        };
        if (type === 'date') {
            this.element.valueAsDate = new Date(data);
        }
    }
}

class Select extends Element {
    constructor(labelText, id, elementType, data) {
        super(labelText, id, elementType); 
        this.options = ['Low Priority', 'Medium Priority', 'High Priority']
        this.options.forEach(optionText => {
            const optionElement = document.createElement('option');
            optionElement.textContent = optionText;
            if (optionText === data) {
                optionElement.selected = "Selected"
            }
            this.element.appendChild(optionElement);
        })
    }
}