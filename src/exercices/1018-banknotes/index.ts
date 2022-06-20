import { Input } from "../../types";

const input: Input = "576";
const lines = input.split(" ");

const adaptParams = (): number[] => {
  return lines.map((item) => {
    return Number(item);
  });
};

const resolution = () => {
  let [moneyValue] = adaptParams();

  const billNotes = [100, 50, 20, 10, 5, 2, 1];

  billNotes.forEach((item) => {
    const totalBillNotes = moneyValue / item;

    const billNotesConvertedToString = totalBillNotes.toString();
    const billNotesConvertedToInteger = parseInt(billNotesConvertedToString);

    console.log(`${billNotesConvertedToInteger} nota(s) de R$ ${item},00`);
    moneyValue %= item;
  });
};
resolution();
