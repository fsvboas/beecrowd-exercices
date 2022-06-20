import { Input } from "../../types";

const input: Input = "10 9";
const lines = input.split(" ");

const a = Number(lines[0]);
const b = Number(lines[1]);

const result = a + b;

console.log("X = " + result);
