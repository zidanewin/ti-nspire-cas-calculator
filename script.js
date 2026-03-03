class TINspireCalculator {
    constructor() {
        this.result = 0;
        this.currentInput = '';
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('calculator-buttons').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                this.handleButtonClick(e.target.innerText);
            }
        });

        document.addEventListener('keydown', (e) => {
            this.handleKeyboardInput(e.key);
        });
    }

    handleButtonClick(value) {
        if (value === '=') {
            this.calculate();
        } else if (value === 'C') {
            this.clear();
        } else {
            this.currentInput += value;
            this.updateDisplay();
        }
    }

    handleKeyboardInput(key) {
        if (/[0-9]+/.test(key) || ['+', '-', '*', '/'].includes(key)) {
            this.currentInput += key;
            this.updateDisplay();
        } else if (key === 'Enter') {
            this.calculate();
        } else if (key === 'c' || key === 'C') {
            this.clear();
        }
    }

    calculate() {
        try {
            this.result = eval(this.currentInput);
            this.updateDisplay();
            this.currentInput = '';
        } catch (e) {
            this.updateDisplay('Error');
            this.currentInput = '';
        }
    }

    clear() {
        this.currentInput = '';
        this.updateDisplay();
    }

    updateDisplay(output) {
        document.getElementById('display').innerText = output || this.currentInput;
    }
}

const calculator = new TINspireCalculator();