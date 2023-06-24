
let topDisplay = document.getElementById("topDisplay");
let display = document.getElementById("display");
display.innerHTML = "0";
let clear = document.querySelector("#clear");
let del = document.querySelector("#del");
let decimal = document.querySelector("#decimal");
let equals = document.querySelector("#equals");
let negative = document.querySelector("#neg");
let percentage = document.querySelector("#percent");
let mathFuncsGroup = document.getElementsByClassName("mathFuncs");
let mathFuncs = Array.from(mathFuncsGroup);

let numbersGroup = document.getElementsByClassName("nums");
let numbers = Array.from(numbersGroup);

//operants
let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

//operation functions
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const times = (a, b) => a * b;
const divi = (a, b) => a / b;

//math function
const operate = (a, operator, b) => {
    // debugger;

    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+': return result = plus(a,b);
        case '-': return result = minus(a,b);
        case 'x': return result = times(a,b);
        case '÷':
            if(b == 0){
                display.innerHTML += "undefined";
                break;
            }
            return result = divi(a,b);
        default: return null;
    }

}

//shows numbers on display
numbers.forEach(num => num.addEventListener('click', function(e){
    // debugger;
    if(display.innerHTML == 0 && !display.innerHTML.includes(".")){
        display.innerHTML = "";
    }
    let showNum = Number(e.target.value);

    if(display.innerHTML.length < 10){
        display.innerHTML += showNum;
        numHandler(showNum);
    }
    return null;

}));

//adds numbers to their respective global variables
const numHandler = num => {
    // debugger;

    if(firstNum.toString().length < 10 && operator == ""){
        if(result !== ""){
            firstNum = result.toString();
            firstNum += num;
        } else {
            firstNum += num;
        }
    } else if(operator != ""){
        secondNum += num;
    }
}

//shows math functions in display
mathFuncs.forEach(mFunc => mFunc.addEventListener('click', function(e){

    // debugger;
    let showFunc = e.target.value;
    display.innerHTML += showFunc;

    if(operator != ""){

            topDisplay.innerHTML = operate(firstNum, operator, secondNum);
        display.innerHTML = display.innerHTML.toString().slice(-1);
        firstNum = operate(firstNum, operator, secondNum);
        secondNum = "";
        operatorHandler(showFunc);
    } else {
       operatorHandler(showFunc);
    }



}))

//shows decimal in display
decimal.addEventListener('click', function(e){
    // debugger;
    if(!display.innerHTML.includes(".")){
        if(operator == ""){
            display.innerHTML += e.target.value;
            firstNum += e.target.value;
        } else {
            display.innerHTML += e.target.value;
            secondNum += e.target.value;
        }


    }
})

//clears display
clear.addEventListener('click', function(){
    // debugger;
    if(topDisplay.innerHTML != "" || display.innerHTML != ""){
        display.innerHTML = 0;
        topDisplay.innerHTML = "";
    }

    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
});

//deletes character from display

del.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.toString().slice(0,-1);

    if(operator == ""){
        firstNum = firstNum.toString().slice(0,-1);
    } else {
        secondNum = secondNum.toString().slice(0,-1);
    }
});

//add operator to display and variable
const operatorHandler = op => {
    // debugger;
    operator = "";
    operator += op;

    topDisplay.innerHTML += display.innerHTML;
    display.innerHTML = "";
}

//equal button
equals.addEventListener('click', () => {
    // debugger;
    topDisplay.innerHTML += display.innerHTML + "=";
    display.innerHTML = "";
    display.innerHTML += operate(firstNum, operator, secondNum);

    if(display.innerHTML.length > 10){
        display.innerHTML = display.innerHTML.toString().slice(0, 10);
    }

    firstNum = result;
    secondNum = "";
    operator = "";
})

//percent button
percentage.addEventListener('click', (a, b) => {
    // debugger;
    a = firstNum;
    b = secondNum;
    let res = (a*b)/100;

    secondNum = res;

    display.innerHTML = res;

})

//negative / positive button
negative.addEventListener('click', () => {
    // debugger;

    if(operator == ""){
        if(!display.innerHTML.includes("-")){

            firstNum = '-' + firstNum
            display.innerHTML = firstNum;

    } else {
            firstNum = firstNum.toString().slice(1);
            display.innerHTML = firstNum;
            // console.log(firstNum);
        }
    } else {
        if(!display.innerHTML.includes("-")){

            secondNum = '-' + secondNum
            display.innerHTML = secondNum;

    } else {
            secondNum = secondNum.toString().slice(1);
            display.innerHTML = secondNum;
            // console.log(secondNum);
        }
    }
})

//keyboard support
document.addEventListener('keydown', (e) => {
    debugger;

    //numbers
    if(e.key >= 0 && e.key <= 9){

        if(display.innerHTML == 0 && !display.innerHTML.includes(".")){
            display.innerHTML = "";
        }
        let showNum = Number(e.key);

        if(display.innerHTML.length < 10){
            display.innerHTML += showNum;
            numHandler(showNum);
        }
        // alert(`${e.key} was pressed`)
    }

    //clear all
    if(e.key === "a" || e.key === "A"){
        if(topDisplay.innerHTML != "" || display.innerHTML != ""){
            display.innerHTML = 0;
            topDisplay.innerHTML = "";
        }

        firstNum = "";
        secondNum = "";
        operator = "";
        result = "";
    }

    //delete
    if(e.key === "Backspace"){
        display.innerHTML = display.innerHTML.toString().slice(0,-1);

    if(operator == ""){
        firstNum = firstNum.toString().slice(0,-1);
    } else {
        secondNum = secondNum.toString().slice(0,-1);
    }
    }

    //percent
    if(e.key === "%"){
        // debugger;
        a = firstNum;
    b = secondNum;
    let res = (a*b)/100;

    secondNum = res;

    display.innerHTML = res;

    }




    //divide
    if(e.key === "/"){
        debugger

        let divide = e.key;
        divide = "÷";
let showFunc = divide;

        if(operator != ""){

            topDisplay.innerHTML = operate(firstNum, operator, secondNum);
        display.innerHTML = display.innerHTML.toString().slice(-1);
        firstNum = operate(firstNum, operator, secondNum);
        secondNum = "";
        operatorHandler(showFunc);
    } else {
       operatorHandler(showFunc);
    }




        // operatorHandler(divide);


        topDisplay.innerHTML += showFunc;
    }






    //multiply
    if(e.key === "*"){
        let multiply = "x";
        operatorHandler(multiply);

        let showFunc = multiply;
        topDisplay.innerHTML += showFunc;
    }

    //subtract
    if(e.key === "-"){
        operatorHandler(e.key);

        let showFunc = e.key;
        topDisplay.innerHTML += showFunc;
    }

    //add
    if(e.key === "+"){
        operatorHandler(e.key);

        let showFunc = e.key;
        topDisplay.innerHTML += showFunc;
    }

    //equals
    if(e.key === "Enter"){
        topDisplay.innerHTML += display.innerHTML + "=";
    display.innerHTML = "";
    display.innerHTML += operate(firstNum, operator, secondNum);

    if(display.innerHTML.length > 10){
        display.innerHTML = display.innerHTML.toString().slice(0, 10);
    }

    firstNum = result;
    secondNum = "";
    operator = "";
    }

    //decimal
    if(e.key === "."){

        if(!display.innerHTML.includes(".")){
            if(operator == ""){
                display.innerHTML += e.key;
                firstNum += e.key;
            } else {
                display.innerHTML += e.key;
                secondNum += e.key;
            }
        }





    }

    //negative
    if(e.key === "_"){
        if(operator == ""){
            if(!display.innerHTML.includes("-")){

                firstNum = '-' + firstNum
                display.innerHTML = firstNum;

        } else {
                firstNum = firstNum.toString().slice(1);
                display.innerHTML = firstNum;
                // console.log(firstNum);
            }
        } else {
            if(!display.innerHTML.includes("-")){

                secondNum = '-' + secondNum
                display.innerHTML = secondNum;

        } else {
                secondNum = secondNum.toString().slice(1);
                display.innerHTML = secondNum;
                // console.log(secondNum);
            }
        }
    }

})
