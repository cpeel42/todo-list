export default class DomElementFactory {

    createDiv(className) {
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    createButton(className, text) {
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = text;
        return button;
    }

    createLabel(forAttr, text) {
        const label = document.createElement('label');
        label.setAttribute('for', forAttr);
        label.textContent = text;
        return label;
    }

    createInput(id, type, value, placeholder = '') {
        const input = document.createElement('input');
        input.id = id;
        input.type = type;
        if (type === 'checkbox') {
            input.checked = value;
        } else {
            input.value = value || '';
            if (placeholder) {
                input.placeholder = placeholder;
            }
        }
        return input;
    }

    createSelect(id, optionList, selectedValue) {
        const select = document.createElement('select');
        select.id = id;

        optionList.forEach(optionName => {
            const isSelected = (optionName === selectedValue) ? true : false;
            let option = this.createOption(optionName, isSelected);
            select.appendChild(option);
        });

        return select;
    }

    createOption(name, isSelected) {
        const option = document.createElement('option');
        if (isSelected == true) {
            option.selected = true
        }
        option.textContent = name;
        return option;
    }
}