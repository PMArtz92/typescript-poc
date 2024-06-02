let age = 20;

if (age < 50) age += 15;

console.log(age);

let test = {
  number: "hello",
};

let numbers: number[] = [1, 2];

let user: [number, string] = [1, "Pasan"];

//If define using const compiler will generate more optimal codes
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Small;

function calculateTax(income: number): number {
  if (income < 5000) return income * 1.2;
  return income;
}

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Pasan",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textInput: UIWidget = {
  drag: () => {
    console.log("hiiii");
  },
  resize: () => {},
};

type Quantity = 50 | 100;

let quantity: Quantity = 50;
