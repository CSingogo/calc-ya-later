function add(x,y){
       return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
   return x * y;
}

function divide(x,y){
   return x / y;
}

// variables
let num1;
let num2;
let operator;

//operate function
function operate(num1,operator,num2){
    if (operator === '+')
      {
        document.getElementById('display').innerText = add(num1,num2);
      }
      else if(operator === '-')
         {
            document.getElementById('dispaly').innerText = subtract(num1,num2);
         }
           else if(operator === '*')
            {
                document.getElementById('display').innerText =  multiply(num1,num2);
            }
             else
               {
                document.getElementById('display').innerText =  divide(num1,num2);
               }
    

}
//logic for the display
let currentInput = '0';

function appendToDisplay(value) {

    let parsed = parseInt(value);
     
    if (!isNaN(parsed) && typeof parsed === 'number') {
          if(num1)
            {
                num2 = parsed;
            }
            else
            {
                num1 = parsed;
            }
      } else {
        operator = parsed;
      }



    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
    num1 = false;
}

function calculateResult() {
    // Implement your calculation logic here
    // For example: currentInput = eval(currentInput);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}