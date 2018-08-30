class Form {

    constructor(data, action, method) {
        this.action = action;
        this.method = method;
        this.data = data;
        this.form = document.createElement('form');
        this.form.style.cssText = 'padding: 10px; margin-bottom: 25px;'
    }

    generateForm() {


        this.data.forEach(element => {
            this.form.appendChild(this.generateElement(element.label, element.kind, element.name, element.variants));
        });
    }

    generateElement(label, kind, name, variants) {
        let field = document.createElement('div');


        switch (kind) {
            case 'longtext':
                field.appendChild(this.getInput(kind, label, name, 'long'));
                break;
            case 'shorttext':
                field.appendChild(this.getInput(kind, label, name, 'short'));
                break;
            case 'number':
                field.appendChild(this.getInput(kind, label, name));
                break;
            case 'combo':
                field.appendChild(this.getSelect(label, name, variants));
                break;
            case 'radio':
                field.appendChild(this.getRadio(label, name, variants));
                break;
            case 'check':
                field.appendChild(this.getCheck(label, name));
                console.log('check');
                break;
            case 'memo':
            field.appendChild(this.getTextarea(label, name));
                console.log('memo');
                break;
            case 'submit':
            field.appendChild(this.getSubmitButton(label));
                console.log('submit');
                break;
        }

        return field;
    }

    getInput(kind, label, name, length) {
        let fieldLabel = document.createElement('label');
        let fieldElement = document.createElement('input');

        fieldLabel.innerHTML = label;

        if (kind === 'number') {
            fieldElement.type = 'number';
        } else {
            fieldElement.type = 'text';
        }
        fieldElement.name = name;
        if (length == 'long') {
            fieldElement.style.width = '360px';
        } else if (length == 'short') {
            fieldElement.style.width = '180px';
        } else {
            fieldElement.style.width = '80px';
        }

        fieldLabel.appendChild(fieldElement);
        return fieldLabel;
    }

    getSelect(label, name, variants) {
        let fieldLabel = document.createElement('label');
        let select = document.createElement('select');

        fieldLabel.innerHTML = label;
        select.name = name;

        console.log(variants);

        variants.forEach(element => {
            let option = document.createElement('option');
            option.value = element.value;
            option.innerHTML = element.text;
            select.appendChild(option);
        });

        fieldLabel.appendChild(select);

        return fieldLabel;

    }

    getRadio(label, name, variants) {
        let fieldDiv = document.createElement('div');
        fieldDiv.innerHTML = label;

        variants.forEach(element => {
            let radioLabel = document.createElement('label');
            let radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = name;
            radioButton.value = element.value;
            radioLabel.innerHTML = element.text;
            radioLabel.appendChild(radioButton);
            fieldDiv.appendChild(radioLabel);

        });

        return fieldDiv;

    }

    getCheck(label, name) {
        let fieldLabel = document.createElement('label');
        fieldLabel.innerHTML = label;

        let checkButton = document.createElement('input');
        checkButton.type = 'checkbox';
        checkButton.name = name;

        fieldLabel.appendChild(checkButton);


        return fieldLabel;

    }

    getTextarea(label, name) {
        let fieldLabel = document.createElement('label');
        fieldLabel.innerHTML = label;
        let text = document.createElement('textarea');
        text.name = name;

        fieldLabel.appendChild(text);

        return fieldLabel;
    }

    getSubmitButton(label) {
        let submitButton = document.createElement('button');
        submitButton.style = "display: block;";
        submitButton.innerHTML = label;

        return submitButton;
    }

    render() {
        this.generateForm();
        document.querySelector('.container').appendChild(this.form);
    }

}