const input = ["JOAO", "500", "1230.30"];

const name = input[0];
const fixedSalary = parseFloat(input[1]);
const sales = parseFloat(input[2]);

const salaryWithBonus = sales * 0.15 + fixedSalary;

console.log("TOTAL = R$ " + salaryWithBonus.toFixed(2));
