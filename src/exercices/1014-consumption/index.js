var input = "500 35.0";
var lines = input.split(" ");

const resolution = (lines) => {
  const adaptParams = () => {
    const [x, y] = lines.map(parseFloat);
    // console.log(x, y);
    return { x, y };
  };

  const { x, y } = adaptParams();

  const calcConsumption = x / y;

  console.log(calcConsumption.toFixed(3), "km/l");
};
resolution(lines);
