import { Input } from "../../types";

const input: Input = "2.0";

const n = 3.14159;
const r = parseFloat(input);
const result = n * Math.pow(r, 2);

console.log("A=" + result.toFixed(4));
