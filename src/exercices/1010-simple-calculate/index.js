const input = ["12 1 5.30", "16 2 5.10"];
const lines = input.toString().split("\n");

console.log(lines);

// ------------- MINHA RESOLUÇÃO -------------
// const product1 = input[0];
// const product2 = input[1];

// const dataProduct1 = product1.split(" ");
// const dataProduct2 = product2.split(" ");

// console.log(dataProduct1);
// console.log(dataProduct2);

// const totalProduct1 = dataProduct1[1] * dataProduct1[2];
// const totalProduct2 = dataProduct2[1] * dataProduct2[2];

// const valueToPay = totalProduct1 + totalProduct2;

// console.log("VALOR A PAGAR: R$ " + valueToPay.toFixed(2));

// ------------- RESOLUÇÃO PARA O BEECROWD -------------
/**
 *
 * @param {String[]} lines
 */
const resolution = (lines) => {
  const adaptParams = (lines) => {
    // desestruturar o array, separar por espaços e transformar os dados em números
    return lines.filter(Boolean).map((line) => {
      const [code, amount, price] = line.split(" ").map(Number);
      return { code, amount, price };
    });
  };

  // calcular o valor dos produtos
  const calcProductTotalPrice = ({ amount, price }) => amount * price;
  // somar o valor atual com o preço
  const totalizeProductPrice = (totalPrices) => {
    return totalPrices.reduce((acc, price) => acc + price, 0);
  };
  const formatAnswer = (price) => `VALOR A PAGAR: R$ ${price.toFixed(2)}`;
  const products = adaptParams(lines);

  // mapeamento do preço de cada produto no array
  const allProductsPrice = products.map(calcProductTotalPrice);

  // valor total a pagar pelo produto
  const valueToPay = totalizeProductPrice(allProductsPrice);
  const formattedAnswer = formatAnswer(valueToPay);
  return formattedAnswer;
};
console.log(resolution(lines));
