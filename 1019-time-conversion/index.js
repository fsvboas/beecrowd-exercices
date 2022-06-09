var input = "556";
var lines = input.split(" ");

const adaptParams = () => {
  let [seconds] = lines.map(parseInt);
  return { seconds };
};

const resolution = () => {
  let { seconds } = adaptParams();

  const timeValues = [3600, 60, 1];
  let conversionResult = [];

  for (let value of timeValues) {
    conversionResult.push(parseInt(seconds / value));
    seconds %= value;
  }

  console.log(conversionResult.join(":"));
};
resolution();
