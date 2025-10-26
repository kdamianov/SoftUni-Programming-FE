function execute(input) {
  let holidayAmount = Number(input[0]);
  let availableMoney = Number(input[1]);
  let index = 2;
  let day = 0;
  let lastCommand = "";
  let consecSpendDays = 0;

  while (availableMoney < holidayAmount) {
    day++;
    let command = input[index];
    let amount = Number(input[index + 1]);
    lastCommand = command;
    if (command === "spend") {
      if (command === lastCommand) {
        consecSpendDays++;
      }
      availableMoney -= amount;
      if (availableMoney < 0) {
        availableMoney = 0;
      }
      if (consecSpendDays === 5) {
        console.log("You can't save the money.");
        console.log(`${day}`);
        return;
      }
    } else {
      consecSpendDays = 0;
      availableMoney += amount;
    }
    lastCommand = command;
    index += 2;
  }
  console.log(`You saved the money for ${day} days.`);
}

execute([
  "250",

  "150",

  "spend",

  "50",

  "spend",

  "50",

  "save",

  "100",

  "save",

  "100",
]);
