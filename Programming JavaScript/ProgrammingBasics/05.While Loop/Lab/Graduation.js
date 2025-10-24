function execute(input) {
  let index = 0;
  let name = input[0];

  let expelsCount = 0;
  let passedYears = 0;
  let gradeSum = 0;

  while (expelsCount < 2 && passedYears < 12) {
    index++;
    let grade = Number(input[index]);

    if (grade < 4) {
      expelsCount++;
      continue;
    }
    passedYears++;
    gradeSum += grade;
  }

  if (expelsCount < 2) {
    let avgGrade = gradeSum / passedYears;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${passedYears + 1} grade`);
  }
}

execute([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
