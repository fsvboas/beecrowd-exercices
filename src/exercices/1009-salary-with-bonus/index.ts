import { Input } from "../../types";

const input: Input = "JOAO 500 1230.30";
const lines = input.split(" ");

// const name = lines[0];
const fixedSalary = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);

const salaryWithBonus = sales * 0.15 + fixedSalary;

console.log("TOTAL = R$ " + salaryWithBonus.toFixed(2));
