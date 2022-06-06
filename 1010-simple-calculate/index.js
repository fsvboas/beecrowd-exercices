const input = ["12 1 5.30", "16 2 5.10"];
const lines = input.toString().split("\n");

console.log(lines);

const product1 = input[0];
const product2 = input[1];

const dataProduct1 = product1.split(" ");
const dataProduct2 = product2.split(" ");

console.log(dataProduct1);
console.log(dataProduct2);

const totalProduct1 = dataProduct1[1] * dataProduct1[2];
const totalProduct2 = dataProduct2[1] * dataProduct2[2];

const valueToPay = totalProduct1 + totalProduct2;

console.log("VALOR A PAGAR: R$ " + valueToPay.toFixed(2));
