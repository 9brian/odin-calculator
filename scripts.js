/* Scripts.js */


/* Buttons map */
const buttons = {};

for (let i = 1; i <= 9; i++) {
    const btn = document.getElementById(i.toString());
    buttons[i] = btn;

    btn.addEventListener("click", () => {
        console.log(i);
    });
}

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