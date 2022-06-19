var input = "30";
var lines = input.split(" ");

const resolution = (lines) => {
  const adaptParams = () => {
    const [value] = lines.map(Number);
    // console.log(value);
    return { value };
  };

  const { value } = adaptParams();
  const carX = 60;
  const DistanceFromAnotherCarInKm = 30;

  const calc = () => {
    const timeToTakeDistance = (carX * value) / DistanceFromAnotherCarInKm;
    return timeToTakeDistance;
  };

  console.log(calc() + " minutos");
};
resolution(lines);
