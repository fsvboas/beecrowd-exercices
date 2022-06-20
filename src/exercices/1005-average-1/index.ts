import { Input } from "../../types";

const input: Input = "5.0 7.1";
const lines = input.split(" ");

const a = Number(lines[0]);
const b = Number(lines[1]);

const n1 = a * 3.5;
const n2 = b * 7.5;

const average = (n1 + n2) / 11;

console.log("MEDIA = " + average.toFixed(5));
