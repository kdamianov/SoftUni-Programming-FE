function execute(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let heigth = Number(input[2]);
  let space = width * length * heigth;
  let boxSpace = 1 * 1 * 1;
  let index = 3;

  while (input[index] !== "Done") {
    let ttlBoxSpace = boxSpace * Number(input[index]);
    space -= ttlBoxSpace;
    if (space <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(space)} Cubic meters more.`
      );
      return;
    }
    index++;
  }
  console.log(`${space} Cubic meters left.`);
}

execute(["10", "1", "2", "4", "6", "Done"]);
