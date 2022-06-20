import { Input } from "../../types";

const input: Input = "556";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const resolution = () => {
  let [seconds] = adaptParams();

  const timeValues = [3600, 60, 1];
  const conversionResult = [];

  for (let value of timeValues) {
    conversionResult.push(Math.floor(seconds / value));
    seconds %= value;
  }

  console.log(conversionResult.join(":"));
};
resolution();