const input = ["25", "100", "5.50"];

const number = Number(input[0]);
const workedHours = Number(input[1]);
const amountPerWorkedHour = parseFloat(input[2]);

const salary = workedHours * amountPerWorkedHour;

console.log("NUMBER = " + number);
console.log("SALARY = " + "U$ " + salary);
