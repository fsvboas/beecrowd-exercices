var input = ["1.0 7.0", "5.0 9.0"];
var lines = input.toString().split(",");

const resolution = (lines) => {
  const [x1, y1] = lines[0].split(" ");
  const [x2, y2] = lines[1].split(" ");

  const calc = () => {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    // console.log(distance);
    return distance;
  };
  console.log(calc().toFixed(4));
};
resolution(lines);
