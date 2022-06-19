var input = ["3", "15", "1523"];
var lines = input.toString().split("\n");

const resolution = (lines) => {
  const pi = 3.14159;

  const [value] = lines.map(parseFloat);
  
  const calcVolume = (4 / 3) * pi * Math.pow(value, 3);

  console.log("VOLUME =", calcVolume.toFixed(3));
};
resolution(lines);
