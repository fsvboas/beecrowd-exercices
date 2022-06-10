var input = "5 6 7 8";
var lines = input.split(" ");

const adaptParams = () => {
  const [a, b, c, d] = lines.map(Number);
  return { a, b, c, d };
};

const resolution = () => {
  const { a, b, c, d } = adaptParams();

  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    return console.log("Valores aceitos");
  } else {
    return console.log("Valores nao aceitos");
  }
};
resolution();
