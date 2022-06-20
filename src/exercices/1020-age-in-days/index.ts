import { Input } from "../../types";

const input: Input = "400";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const calc = () => {
  let [days] = adaptParams();

  const calcYears = Math.floor(days / 365);
  days %= 365;

  const calcMonths = Math.floor(days / 30);
  const totalRemainder = days % 30;

  return { calcYears, calcMonths, totalRemainder };
};

const resolution = () => {
  const { calcYears, calcMonths, totalRemainder } = calc();

  console.log(`${calcYears} ano(s)`);
  console.log(`${calcMonths} mes(es)`);
  console.log(`${totalRemainder} dia(s)`);
};
resolution();
