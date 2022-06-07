var input = "3.0 4.0 5.2";
var lines = input.split(" ");

const resolution = (lines) => {
  const pi = 3.14159;

  const [a, b, c] = lines.map(parseFloat);
  
  const calcAreaRectangledTriangle = parseFloat(a * c) / 2;
  console.log("TRIANGULO:", calcAreaRectangledTriangle.toFixed(3));

  const calcAreaRadiusCircle = parseFloat(pi * Math.pow(c, 2));
  console.log("CIRCULO:", calcAreaRadiusCircle.toFixed(3));

  const calcAreaTrapezium = parseFloat((a + b) * c) / 2;
  console.log("TRAPEZIO:", calcAreaTrapezium.toFixed(3));

  const calcAreaSquare = parseFloat(b * b);
  console.log("QUADRADO:", calcAreaSquare.toFixed(3));

  const calcArearectangle = parseFloat(a * b);
  console.log("RETANGULO:", calcArearectangle.toFixed(3));

};
resolution(lines);
