// debugger;

let topDisplay = document.getElementById("topDisplay");
let display = document.getElementById("display");
display.innerHTML = "0";
let clear = document.querySelector("#clear");
let del = document.querySelector("#del");
let decimal = document.querySelector("#decimal");
let equals = document.querySelector("#equals");

// let negative = document.querySelector("#neg");
// let percent = document.querySelector("#percent");
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
    debugger;

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

    // console.log(firstNum + operator + secondNum);


}

//shows math functions in display
mathFuncs.forEach(mFunc => mFunc.addEventListener('click', function(e){
    let showFunc = e.target.value;
    display.innerHTML += showFunc;
    operatorHandler(showFunc);
}))

//shows decimal in display
decimal.addEventListener('click', function(e){
    if(!display.innerHTML.includes(".")){
        display.innerHTML += e.target.value;
    }
})

//clears display
clear.addEventListener('click', function(){
    // debugger;
    if(topDisplay.innerHTML != "" && display.innerHTML != ""){
        display.innerHTML = 0;
        topDisplay.innerHTML = "";
    }

    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
});

//deletes character from display
del.addEventListener('click', function(){
    debugger;
    display.innerHTML = display.innerHTML.toString().slice(0,-1);

    if(operator == ""){
        firstNum = firstNum.toString().slice(0,-1);
    } else {
        secondNum = secondNum.toString().slice(0,-1);
    }


});

const operatorHandler = op => {
    operator = "";
    operator += op;

    topDisplay.innerHTML = display.innerHTML;
    display.innerHTML = "";
}

//equal button
equals.addEventListener('click', () => {
    // debugger;
    topDisplay.innerHTML += display.innerHTML + "=";
    display.innerHTML = "";
    display.innerHTML += operate(firstNum, operator, secondNum);

    firstNum = result;
    secondNum = "";
    operator = "";
})


// percent.addEventListener('click', function(){

// })

/* to do
make percent button work
make +/- button work

*/
