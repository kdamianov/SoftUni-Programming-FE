function execute(input) {
  let cakeWitdh = Number(input[0]);
  let cakeLength = Number(input[1]);
  let pcsLeft = cakeWitdh * cakeLength;
  let index = 2;
  while (input[index] !== "STOP") {
    let take = input[index];
    pcsLeft -= take;
    if (pcsLeft <= 0) {
      console.log(
        `No more cake left! You need ${Math.abs(pcsLeft)} pieces more.`
      );
      return;
    }
    index++;
  }
  console.log(`${pcsLeft} pieces are left.`);
}

execute(["10", "2", "2", "4", "6", "STOP"]);
