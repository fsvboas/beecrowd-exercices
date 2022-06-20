import { Input } from "../../types";

const input: Input = "5 6 7 8";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const resolution = () => {
  const [a, b, c, d] = adaptParams();

  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    return console.log("Valores aceitos");
  } else {
    return console.log("Valores nao aceitos");
  }
};
resolution();
