var input = "10 85";
var lines = input.split(" ");

const adaptParams = () => {
  const [spentTime, averageSpeed] = lines.map(parseFloat);
  return { spentTime, averageSpeed };
};

const calc = (spentTime, averageSpeed) => {
  const totalTraveled = spentTime * averageSpeed;
  const totalSpentFuel = totalTraveled / 12;
  return totalSpentFuel;
};

const resolution = () => {
  const { spentTime, averageSpeed } = adaptParams();

  const calcResult = calc(spentTime, averageSpeed).toFixed(3);

  return calcResult;
};
console.log(resolution());
