function execute(input) {
  let maxBadGrades = Number(input[0]);
  let totalBadGrades = 0;
  let tasks = 0;
  let totalScore = 0;
  let lastTask = "";
  let index = 1;
  while (input[index] !== "Enough") {
    let currentTask = input[index];
    let grade = Number(input[index + 1]);
    if (grade <= 4) {
      totalBadGrades++;
    }

    if (totalBadGrades === maxBadGrades) {
      console.log(`You need a break, ${totalBadGrades} poor grades.`);
      return;
    }
    tasks++;
    totalScore += grade;
    lastTask = currentTask;
    index += 2;
  }
  console.log(`Average score: ${(totalScore / tasks).toFixed(2)}`);
  console.log(`Number of problems: ${tasks}`);
  console.log(`Last problem: ${lastTask}`);
}

execute(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
