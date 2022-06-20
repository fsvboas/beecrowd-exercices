import { Input } from "../../types";

const input: Input = "30";
const lines = input.split(" ");

const adaptParams = () => {
  const [value] = lines.map(Number);
  // console.log(value);
  return { value };
};

const resolution = () => {
  const { value } = adaptParams();
  const carX = 60;
  const DistanceFromAnotherCarInKm = 30;

  const calc = () => {
    const timeToTakeDistance = (carX * value) / DistanceFromAnotherCarInKm;
    return timeToTakeDistance;
  };

  console.log(calc() + " minutos");
};
resolution();
