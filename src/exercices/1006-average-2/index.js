const input = ["5.0", "6.0", "7.0"];

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const n1 = a * 2;
const n2 = b * 3;
const n3 = c * 5;

const average = (n1 + n2 + n3) / 10;

console.log("MEDIA = " + average.toFixed(1));
