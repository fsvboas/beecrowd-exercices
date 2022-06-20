import { Input, Operator } from "../../types";

const input: Input = "10.0 20.1 5.1";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const getXofBhaskara = (
  a: number,
  b: number,
  delta: number,
  operator: Operator
) => {
  return eval(-b + operator + Math.sqrt(delta)) / (2 * a);
};

const calc = () => {
  const [a, b, c] = adaptParams();
  const operators: Operator[] = ["+", "-"];

  const deltaFormula = b * b - 4 * a * c;

  if (deltaFormula < 0 || a === 0) console.log("Impossivel calcular");

  return operators.map((item: Operator) => {
    return getXofBhaskara(a, b, deltaFormula, item).toFixed(5);
  });
};

const resolution = () => {
  const [x1, x2] = calc();

  console.log(`R1 = ${x1}\nR2 = ${x2}`);
};
resolution();
