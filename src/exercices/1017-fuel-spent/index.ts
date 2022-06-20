import { Input } from "../../types";

const input: Input = "10 85";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const calc = () => {
  const [spentTime, averageSpeed] = adaptParams();

  const totalTraveled = spentTime * averageSpeed;
  const totalFuelSpent = totalTraveled / 12;

  return totalFuelSpent;
};

const resolution = () => {
  const totalFuelSpent = calc();

  console.log(totalFuelSpent.toFixed(3));
};
resolution();
