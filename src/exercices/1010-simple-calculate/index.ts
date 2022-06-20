const input = "12 1 5.30, 16 2 5.10";
const lines = input.split(", ");

console.log(lines);

const product1 = lines[0];
const product2 = lines[1];

const dataProduct1 = product1.split(" ").map(Number);
const dataProduct2 = product2.split(" ").map(Number);

const totalProduct1 = dataProduct1[1] * dataProduct1[2];
const totalProduct2 = dataProduct2[1] * dataProduct2[2];

const valueToPay = totalProduct1 + totalProduct2;

console.log("VALOR A PAGAR: R$ " + valueToPay.toFixed(2));
