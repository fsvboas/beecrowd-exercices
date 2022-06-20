import { Input } from "../../types";

const input: Input = "5.0 6.0 7.0";
const lines = input.split(" ");

const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);

const n1 = a * 2;
const n2 = b * 3;
const n3 = c * 5;

const average = (n1 + n2 + n3) / 10;

console.log("MEDIA = " + average.toFixed(1));
