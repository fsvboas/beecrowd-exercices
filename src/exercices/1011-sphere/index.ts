import { Input } from "../../types";

const input: Input = "3 15 1523";
const lines = input.split(" ");

const resolution = (lines: string[]) => {
  const pi = 3.14159;

  const [value] = lines.map(parseFloat);

  const calcVolume = (4 / 3) * pi * Math.pow(value, 3);

  console.log("VOLUME =", calcVolume.toFixed(3));
};
resolution(lines);
