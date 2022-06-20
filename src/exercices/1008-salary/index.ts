import { Input } from "../../types";

const input: Input = "25 100 5.50";
const lines = input.split(" ");

const number = Number(lines[0]);
const workedHours = Number(lines[1]);
const amountPerWorkedHour = parseFloat(lines[2]);

const salary = workedHours * amountPerWorkedHour;

console.log("NUMBER = " + number);
console.log("SALARY = " + "U$ " + salary.toFixed(2));
