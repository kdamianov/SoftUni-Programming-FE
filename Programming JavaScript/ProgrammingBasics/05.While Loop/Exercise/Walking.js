function execute(input) {
  let index = 0;
  let totalSteps = 0;
  while (input[index] !== "Going home") {
    totalSteps += Number(input[index]);

    if (totalSteps >= 10000) {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - 10000} steps over the goal!`);
      return;
    }
    index++;
  }

  if (input[index] === "Going home") {
    totalSteps += Number(input[index + 1]);
    if (totalSteps <= 10000) {
      console.log(`${10000 - totalSteps} more steps to reach goal.`);
    } else {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - 10000} steps over the goal!`);
    }
  }
}

execute(["1500", "300", "2500", "3000", "Going home", "200"]);
