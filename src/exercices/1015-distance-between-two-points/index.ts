import { Input } from "../../types";

const input: Input = "1.0 7.0, 5.0 9.0";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const calc = () => {
  const [x1, y1, x2, y2] = adaptParams();

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return distance;
};

const resolution = () => {
  const distance = calc();

  console.log(distance.toFixed(4));
};
resolution();
