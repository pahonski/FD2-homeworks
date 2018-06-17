class Form {

    constructor(data, action, method) {
        this.action = action;
        this.method = method;
        this.data = data;
        this.form = document.createElement('form');
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
                console.log(field);
                break;
            case 'shorttext':
                field.appendChild(this.getInput(kind, label, name, 'short'));
                console.log(field);
                break;
            case 'number':
                field.appendChild(this.getInput(kind, label, name));
                console.log(field);
                break;
            case 'combo':
                field.appendChild(this.getSelect(label, name, variants));
                console.log('combo');
                break;
            case 'radio':
                this.getSelect(label, name, variants);
                console.log('radio');
                break;
            case 'check':
                console.log('check');
                break;
            case 'memo':
                console.log('memo');
                break;
            case 'submit':
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
        let fieldLabel = document.createElement('label');
        fieldLabel.innerHTML = label;

        variants.forEach(element => {
            let radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = name;
        });

    }

    render() {
        document.querySelector('.container').appendChild(this.form);
    }

}