var input = "10 85";
var lines = input.split(" ");

const resolution = (lines) => {
  const adaptParams = () => {
    const [spentTime, averageSpeed] = lines.map(parseFloat);
    return { spentTime, averageSpeed };
  };

  const { spentTime, averageSpeed } = adaptParams();
  const carKmPerLiters = 12;

  const calc = () => {
    const totalTraveled = spentTime * averageSpeed;
    const totalSpentFuel = totalTraveled / carKmPerLiters;
    return totalSpentFuel;
  };

  console.log(calc().toFixed(3));
};
resolution(lines);
