/* Scripts.js */


/* Buttons map */
const buttons = {};

for (let i = 0; i <= 9; i++) {
    const btn = document.getElementById(i.toString());
    buttons[i] = btn;

    btn.addEventListener("click", () => {
        console.log(i);
    });
}

const division_sign = document.getElementById("divide");
division_sign.addEventListener("click", () => {
    console.log("/");
});

const subtraction_sign = document.getElementById("subtract");
subtraction_sign.addEventListener("click", () => {
    console.log("-");
});

const addition_sign = document.getElementById("add");
addition_sign.addEventListener("click", () => {
    console.log("+");
});

// Dont need event listener, but leaving this here for now
// const equal_sign = document.getElementById("solve");

const decimal_point = document.getElementById("decimal");
decimal_point.addEventListener("click", () => {
    console.log(".");
});

const clear_sign = document.getElementById("clear");
clear_sign.addEventListener("click", () => {
    console.log("clear");
});

console.log(buttons);
// buttons[2].style.backgroundColor = "green";


/* Functions */

function addition(a,b){return a + b;}

function subtraction(a,b){return a - b;}

function multiplication(a,b){return a * b;}

function division(a,b){
    if (b === 0){
        return "Error: Inputs must be numbers"; 
    }
    return a / b;
}

/* calculator operation returns 3 variables
    3 + 5 (two nums, one operators)
*/

function operate(a, b, operators){
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