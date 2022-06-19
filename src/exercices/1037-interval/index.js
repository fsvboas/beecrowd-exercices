var input = "25.01";
var lines = input.split(" ");

const adaptParams = () => {
  const [inputNumber] = lines.map(parseFloat);
  return { inputNumber };
};

const resolution = () => {
  const { inputNumber } = adaptParams();

  if (inputNumber >= 0 && inputNumber <= 25) {
    return console.log("Intervalo [0,25]");
  } else if (inputNumber > 25 && inputNumber <= 50) {
    return console.log("Intervalo (25,50]");
  } else if (inputNumber > 50 && inputNumber <= 75) {
    return console.log("Intervalo (50,75]");
  } else if (inputNumber > 75 && inputNumber <= 100) {
    return console.log("Intervalo (75,100]");
  } else {
    return console.log("Fora de intervalo");
  }
};
resolution();
