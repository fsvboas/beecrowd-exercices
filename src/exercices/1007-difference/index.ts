import { Input } from "../../types";

const input: Input = "5 6 7 8";
const lines = input.split(" ");

const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);
const d = Number(lines[3]);

const p1 = a * b;
const p2 = c * d;

const difference = p1 - p2;

console.log("DIFERENCA = " + difference);
