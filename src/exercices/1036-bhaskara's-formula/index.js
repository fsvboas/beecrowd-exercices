var input = "10.0 20.1 5.1";
var lines = input.split(" ");

const adaptParams = () => {
  const [a, b, c] = lines.map(parseFloat);
  return { a, b, c };
};

const calc = () => {
  const { a, b, c } = adaptParams();

  const deltaFormula = b * b - 4 * a * c;

  if (deltaFormula < 0 || a === 0) {
    return console.log("Impossivel calcular");
  } else {
    const x1 = (-b + Math.sqrt(deltaFormula)) / (2 * a);
    const x2 = (-b - Math.sqrt(deltaFormula)) / (2 * a);

    return { x1, x2 };
  }
};

const resolution = () => {
  const { x1, x2 } = calc();

  console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)} `);
};
resolution();
