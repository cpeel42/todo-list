export default class DomElementFactory {

    createDiv(className) {
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
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

    createSelect(id, options, selectedValue) {
        const select = document.createElement('select');
        select.id = id;
        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.textContent = optionValue;
            if (optionValue === selectedValue) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        return select;
    }
}