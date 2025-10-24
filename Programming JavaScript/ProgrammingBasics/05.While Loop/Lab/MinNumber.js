function execute(inputArray) {
  let index = 0;
  let minNum = Number.MAX_SAFE_INTEGER;
  while (inputArray[index] !== "Stop") {
    if (Number(inputArray[index]) < minNum) {
      minNum = Number(inputArray[index]);
    }
    index++;
  }

  console.log(minNum);
}

execute(["100", "99", "80", "70", "Stop"]);
