function execute(inputArray) {
  let index = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;
  while (inputArray[index] !== "Stop") {
    if (Number(inputArray[index]) > maxNum) {
      maxNum = Number(inputArray[index]);
    }
    index++;
  }

  console.log(maxNum);
}

execute(["-45", "-20", "-7", "-99", Stop]);
