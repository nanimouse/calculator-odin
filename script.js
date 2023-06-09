// debugger;

let display = document.getElementById("display");
display.innerHTML = "0";
let clear = document.querySelector("#clear");
let del = document.querySelector("#del");

// let negative = document.querySelector("#neg");
// let percent = document.querySelector("#percent");
// let divide = document.querySelector("#divide");
// let multiply = document.querySelector("#multiply");
// let subtract = document.querySelector("#minus");
// let add = document.querySelector("#plus");
// let equals = document.querySelector("#equals");
// let numbers = document.querySelectorAll("button");

let numbersGroup = document.getElementsByClassName("nums");
let numbers = Array.from(numbersGroup);

//operants
let firstNum = '';
let secondNum = '';
let operator = '';

//operation functions
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const times = (a, b) => a * b;
const divi = (a, b) => a / b;

//math function
const operate = (operator, a, b) => {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+': return plus(a,b);
        case '-': return minus(a,b);
        case 'x': return times(a,b);
        case '÷': return divi(a,b);
        default: return null;
    }
}

//shows numbers in display
const showNums = e => {
    // debugger;
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    let numberTest = Number(e.target.value);
    display.innerHTML += numberTest;
}

//applies showNums() to all the numbers
numbers.forEach(num => num.addEventListener('click', showNums));

//clears display
const clearDisplay = () => {
    if(display.innerHTML == 0 || display.innerHTML != ""){
        display.innerHTML = "";
    }
}
clear.addEventListener('click', clearDisplay);

// const backspace = () => {
//     let test = display.innerHTML;

//     let testArray = Array.from(test);
//     testArray.pop();
//     console.log(testArray);
// }
// del.addEventListener('click', backspace);

//figure out how to delete continuously and how to delete from display
