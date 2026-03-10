/* Scripts.js */

const display = document.getElementById("display");
display.innerHTML = "&nbsp;";

/* Buttons map */
const buttons = {};

for (let i = 0; i <= 9; i++) {
    const btn = document.getElementById(i.toString());
    buttons[i] = btn;

    btn.addEventListener("click", () => {
        // console.log(i);
        display.innerHTML += i.toString();
        parser(i.toString());
    });
}

const division_sign = document.getElementById("divide");
division_sign.addEventListener("click", () => {
    // console.log("/");
    display.innerHTML += "/"
    parser("/");
});

const subtraction_sign = document.getElementById("subtract");
subtraction_sign.addEventListener("click", () => {
    // console.log("-");
    display.innerHTML += "-"
    parser("-");
});

const addition_sign = document.getElementById("add");
addition_sign.addEventListener("click", () => {
    // console.log("+");
    display.innerHTML += "+"
    parser("+");
});

// Dont need event listener, but leaving this here for now
const equal_sign = document.getElementById("solve");
equal_sign.addEventListener("click", () => {
    
    if (num1 == "" || operator == "" || num2 == ""){
        return "ERROR: Empty operand or operator"
    } else {
        let newNum = operate(num1, num2, operator)
        display.innerHTML = newNum;
        reset();
        num1 = newNum;
    }
});

const decimal_point = document.getElementById("decimal");
decimal_point.addEventListener("click", () => {
    // console.log(".");
    display.innerHTML += "."
});

const clear_sign = document.getElementById("clear");
clear_sign.addEventListener("click", () => {
    clear();
    reset();
});

// console.log(buttons);
// buttons[2].style.backgroundColor = "green";

/* Functions */

function addition(a,b){
    console.log(a + b);
    return a + b;
}

function subtraction(a,b){return a - b;}

function multiplication(a,b){return a * b;}

function division(a,b){
    if (b === 0){
        return "Error: Inputs must be numbers"; 
    }
    return a / b;
}

function clear(){
    display.innerHTML = "&nbsp;";
}

function reset(){
    num1 = "";
    operatorCount = 0;
    operator = "";
    num2 = "";
}

/* calculator operation returns 3 variables
    3 + 5 (two nums, one operators)
*/

function operate(a, b, operators){
    a = Number(a);
    b = Number(b);

    if (operators === "+"){
        return addition(a,b);
    } else if (operators === "-"){
        return subtraction(a,b);
    } else if (operators === "*"){
        return multiplication(a,b);
    } else if (operators === "/"){
        return division(a,b);
    } else {
        return "Error: Not a valid operators";
    }
}

let num1 = "";
let operatorCount = 0;
let operator = "";
let num2 = "";

function parser(string){
    const operators = ["+", "-", "*", "/"];
    // console.log(string);

    if(string === "c"){
        clear();
        reset();
    } else if 
    (operatorCount > 1 && (num1 != "" && num2 != "")) {
        operate(num1, num2, operator);
    } else if (operatorCount === 1) {
        num2 += string;
    } else if (operators.includes(string)) {
        operatorCount += 1;
        operator = string;
        console.log(operatorCount)
    } else {
        num1 += string;
    }

//     console.log("num1 " + num1);
//     console.log("operator " + operator);
//     console.log("num2 " + num2);
// }