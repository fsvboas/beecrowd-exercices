import { Input } from "../../types";

const input: Input = "7 14 106";
const lines = input.split(" ");

const resolution = (lines: string[]) => {
  const adaptParams = () => {
    const [a, b, c] = lines.map(Number);
    // console.log(a, b, c);
    return { a, b, c };
  };

  const { a, b, c } = adaptParams();

  const greatestAB = (a + b + Math.abs(a - b)) / 2;
  const greatestXC = (c + greatestAB + Math.abs(c - greatestAB)) / 2;

  console.log(greatestXC, "eh o maior");
};
resolution(lines);
