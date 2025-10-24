function execute(input) {
  let index = 0;
  let amount = 0;

  while (input[index] !== "NoMoreMoney") {
    let money = Number(input[index])
    if (money < 0) {
      console.log("Invalid operation!");
      break;
    }
    amount += money;
    console.log(`Increase: ${money.toFixed(2)}`);
    index++;
  }

  console.log(`Total: ${amount.toFixed(2)}`);
}

execute(["120", "45.55", "-150"]);
