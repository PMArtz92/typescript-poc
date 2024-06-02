"use strict";
let age = 20;
if (age < 50)
    age += 15;
console.log(age);
let test = {
    number: "hello",
};
let numbers = [1, 2];
let user = [1, "Pasan"];
let mySize = 1;
function calculateTax(income) {
    if (income < 5000)
        return income * 1.2;
    return income;
}
let employee = {
    id: 1,
    name: "Pasan",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textInput = {
    drag: () => {
        console.log("hiiii");
    },
    resize: () => { },
};
textInput.drag();
//# sourceMappingURL=index.js.map