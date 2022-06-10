var input = "576";
var lines = input.split(" ");

const adaptParams = () => {
  const [moneyValue] = lines.map(parseInt);
  return { moneyValue };
};

const resolution = () => {
  let { moneyValue } = adaptParams();

  const billNotes = [100, 50, 20, 10, 5, 2, 1];

  billNotes.forEach((item) => {
    const totalBillNotes = parseInt(moneyValue / item);
    console.log(`${totalBillNotes} nota(s) de R$ ${item},00`);
    moneyValue %= item;
  });
};
resolution();
