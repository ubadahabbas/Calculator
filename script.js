
function Calculator(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = ''
    this.previousOperand = '';
    this.operation = undefined;
    //all the operation the calculator performs clear, delete, add a number to screen, equals and adding an operation 

    //clear out our variables 
    this.clear = () => {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    //for removing a single number
    this.delete = () => {
this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    //whats going to happen everytime a user clicks on a number to add to the screen
    this.appendNumber = (number) => {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    //every time a user clicks on an operation button 
    this.chooseOperation = (operation) => {
        if (this.currentOperand === '') return
        //this for when we select a new operation and we already had a previous operation selected so it auomatically compute the previous op and set the new operation waiting for next input
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }


    //takes our values and compute a single value for what we need to display
    this.compute = () => {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        //if the user clicks = and there's no number 
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                return
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

     //number comma display
     this.getDisplayNumber =(number)=>{
         const stringNumber = number.toString();
         const integerDigits= parseFloat(stringNumber.split('.')[0]);
         const decimalDigits= stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)){
          integerDisplay = ''
      } else {
          integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
      }

      if(decimalDigits != null){
          return `${integerDisplay}. ${decimalDigits}`;
      } else {
          return integerDisplay;
      }
    }
    
    //update the values inside the output
    this.updateDisplay = () => {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText ='';
        }
       
    }

   
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-oprand]');
const currentOperandTextElement = document.querySelector('[data-current-oprand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});