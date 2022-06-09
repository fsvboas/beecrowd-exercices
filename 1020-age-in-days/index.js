var input = "400";
var lines = input.split(" ");

const adaptParams = () => {
  const [days] = lines.map(parseInt);
  return { days };
};

const calc = () => {
  let { days } = adaptParams();

  const calcYears = parseInt(days / 365);
  days %= 365;

  const calcMonths = parseInt(days / 30);
  const totalRemainder = days % 30;

  return { calcYears, calcMonths, totalRemainder };
};

const resolution = () => {
  const { calcYears, calcMonths, totalRemainder } = calc();

  console.log(`${calcYears} ano(s)`);
  console.log(`${calcMonths} mes(es)`);
  console.log(`${totalRemainder} dia(s)`);
};
resolution();
