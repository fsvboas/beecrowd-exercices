const input = "576.73\n";
const lines = input.split("\n");

const value = Number(lines[0]);
const bankNotes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

const toCents = (value) => {
  return Number(value.toFixed(2).replace(".", ""));
};
const toCurrency = (value) => value / 100;
const processCurrency = (value, currency) => {
  const valueAsCents = toCents(value);
  const currencyAsCents = toCents(currency);
  const amount = Math.floor(valueAsCents / currencyAsCents);
  const remaining = toCurrency(valueAsCents % currencyAsCents);
  return { value, currency, amount, remaining };
};

const answer = bankNotes.concat(coins).reduce((acc, currency, index) => {
  const remaining = acc[index - 1]?.remaining || value;
  const processedCurrency = processCurrency(remaining, currency);
  acc.push(processedCurrency);
  return acc;
}, []);

const formattedAnswer = () => {
  const splitBankNotesOfCoins = answer.slice(0, 6);
  const splitCoinsOfBankNotes = answer.slice(6, 14);

  console.log("NOTAS:");
  splitBankNotesOfCoins.forEach((item) => {
    console.log(item.amount, "nota(s) de R$", item.currency.toFixed(2));
  });

  console.log("MOEDAS:");
  splitCoinsOfBankNotes.forEach((item) => {
    console.log(item.amount, "moeda(s) de R$", item.currency.toFixed(2));
  });
};
formattedAnswer();
