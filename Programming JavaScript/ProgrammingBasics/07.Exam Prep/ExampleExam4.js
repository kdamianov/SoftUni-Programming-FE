/* 01. Series Calculator */
function execute(seriesName, seasons, episodes, timePerEpisode) {
  let episodeWithAds = timePerEpisode * 1.2;

  let totalTime = episodeWithAds * episodes * seasons + seasons * 10;

  totalTime = Math.floor(totalTime);

  console.log(
    `Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`
  );
}

execute(Lucifer, 3, 18, 55);

/* 01. Movie Profit */
function execute(movieName, days, ticketsPerDay, ticketPrice, cinemaPercent) {
  let totalIncome = days * ticketsPerDay * ticketPrice;

  let cinemaShare = totalIncome * (cinemaPercent / 100);

  let profit = totalIncome - cinemaShare;

  console.log(
    `The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`
  );
}

execute("Python Basics", 40, 34785, 10.45, 14);

/* 02. Movie Day */
function execute(timeForShooting, scenesCount, sceneTime) {
  let preparationTime = timeForShooting * 0.15;

  let totalSceneTime = scenesCount * sceneTime;

  let totalNeeded = preparationTime + totalSceneTime;

  if (totalNeeded <= timeForShooting) {
    let timeLeft = Math.round(timeForShooting - totalNeeded);
    console.log(
      `You managed to finish the movie on time! You have ${timeLeft} minutes left!`
    );
  } else {
    let timeNeeded = Math.round(totalNeeded - timeForShooting);
    console.log(
      `Time is up! To complete the movie you need ${timeNeeded} minutes.`
    );
  }
}

execute(120, 10, 11);

/* 03. Film Premiere */
function moviePremiere(movie, packageType, ticketsCount) {
  let pricePerTicket = 0;

  if (movie === "John Wick") {
    if (packageType === "Drink") pricePerTicket = 12;
    else if (packageType === "Popcorn") pricePerTicket = 15;
    else if (packageType === "Menu") pricePerTicket = 19;
  } else if (movie === "Star Wars") {
    if (packageType === "Drink") pricePerTicket = 18;
    else if (packageType === "Popcorn") pricePerTicket = 25;
    else if (packageType === "Menu") pricePerTicket = 30;
  } else if (movie === "Jumanji") {
    if (packageType === "Drink") pricePerTicket = 9;
    else if (packageType === "Popcorn") pricePerTicket = 11;
    else if (packageType === "Menu") pricePerTicket = 14;
  }

  let totalPrice = ticketsCount * pricePerTicket;

  if (movie === "Star Wars" && ticketsCount >= 4) {
    totalPrice *= 0.7;
  } else if (movie === "Jumanji" && ticketsCount === 2) {
    totalPrice *= 0.85;
  }

  console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

execute("Star Wars", "Popcorn", 4);

/* 03. Movie Destination */
function execute(budget, destination, season, days) {
  let pricePerDay = 0;

  if (season === "Winter") {
    if (destination === "Dubai") pricePerDay = 45000;
    else if (destination === "Sofia") pricePerDay = 17000;
    else if (destination === "London") pricePerDay = 24000;
  } else if (season === "Summer") {
    if (destination === "Dubai") pricePerDay = 40000;
    else if (destination === "Sofia") pricePerDay = 12500;
    else if (destination === "London") pricePerDay = 20250;
  }

  let totalPrice = pricePerDay * days;

  if (destination === "Dubai") {
    totalPrice *= 0.7;
  } else if (destination === "Sofia") {
    totalPrice *= 1.25;
  }

  if (budget >= totalPrice) {
    let moneyLeft = (budget - totalPrice).toFixed(2);
    console.log(
      `The budget for the movie is enough! We have ${moneyLeft} leva left!`
    );
  } else {
    let moneyNeeded = (totalPrice - budget).toFixed(2);
    console.log(`The director needs ${moneyNeeded} leva more!`);
  }
}

execute(1000000, "Dubai", "Summer", 5);

/* 04. Cinema */
function execute(input) {
  let capacity = Number(input[0]); // капацитет на залата
  let index = 1;
  let command = input[index];
  let income = 0;
  let seatsLeft = capacity;


  while (command !== "Movie time!") {
    let people = Number(command);

    if (people > seatsLeft) {
      console.log("The cinema is full.");
      break;
    }

    seatsLeft -= people;
    let price = people * 5;

    if (people % 3 === 0) {
      price -= 5;
    }

    income += price;
    index++;
    command = input[index];
  }

  if (command === "Movie time!") {
    console.log(`There are ${seatsLeft} seats left in the cinema.`);
  }

  console.log(`Cinema income - ${income} lv.`);
}

execute(["60", "10", "6", "3", "20", "15", "Movie time!"]);

/* 04. Movie Stars */
function execute(input) {
  let budget = Number(input[0]);
  let index = 1;
  let command = input[index];

  while (command !== "ACTION") {
    let actorName = command;

    if (actorName.length > 15) {
      let payment = budget * 0.20;
      budget -= payment;
    } else {
      index++;
      let salary = Number(input[index]);
      budget -= salary;
    }

    if (budget <= 0) {
      console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
      return;
    }

    index++;
    command = input[index];
  }
  console.log(`We are left with ${budget.toFixed(2)} leva.`);
}

execute(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);

/* 05. Series */
function execute(input) {
  let budget = Number(input[0]);
  let seriesCount = Number(input[1]);
  let index = 2;
  let totalCost = 0;

  for (let i = 0; i < seriesCount; i++) {
    let name = input[index++];
    let price = Number(input[index++]);

    switch (name) {
      case "Thrones":
        price *= 0.5;
        break;
      case "Lucifer":
        price *= 0.6;
        break;
      case "Protector":
        price *= 0.7;
        break;
      case "TotalDrama":
        price *= 0.8;
        break;
      case "Area":
        price *= 0.9;
        break;
    }
    totalCost += price;
  }

  if (budget >= totalCost) {
    console.log(`You bought all the series and left with ${(budget - totalCost).toFixed(2)} lv.`);
  } else {
    console.log(`You need ${(totalCost - budget).toFixed(2)} lv. more to buy the series!`);
  }
}

execute(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"])

/* 05. Oscars */
function execute(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let judgesCount = Number(input[2]);
  let totalPoints = academyPoints;
  let index = 3;

  for (let i = 0; i < judgesCount; i++) {
    let judgeName = input[index++];
    let judgePoints = Number(input[index++]);

    totalPoints += (judgeName.length * judgePoints) / 2;

    if (totalPoints > 1250.5) {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
      return;
    }
  }
  let diff = 1250.5 - totalPoints;
  console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
}

execute(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])

/* 06. Favorite Movie */
function execute(input) {
  let index = 0;
  let command = input[index];
  let movieCount = 0;

  let bestMovie = "";
  let bestScore = Number.MIN_SAFE_INTEGER;

  while (command !== "STOP") {
    let movie = command;
    movieCount++;

    if (movieCount > 7) {
      console.log("The limit is reached.");
      break;
    }

    let score = 0;
    let length = movie.length;

    for (let i = 0; i < length; i++) {
      let charCode = movie.charCodeAt(i);
      score += charCode;

      if (movie[i] >= 'A' && movie[i] <= 'Z') {
        score -= length;
      } else if (movie[i] >= 'a' && movie[i] <= 'z') {
        score -= 2 * length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMovie = movie;
    }

    index++;
    command = input[index];
  }
  console.log(`The best movie for you is ${bestMovie} with ${bestScore} ASCII sum.`);
}

execute(["Matrix", "Breaking bad", "Legend", "STOP"])

/* 06. Movie Tickets */
function execute(a1, a2, n) {
  for (let charCode = a1; charCode < a2; charCode++) {
    let char1 = String.fromCharCode(charCode);

    for (let d2 = 1; d2 < n; d2++) {
      for (let d3 = 1; d3 < Math.floor(n / 2); d3++) {
        let char4 = charCode;
        
        if (charCode % 2 !== 0 && (d2 + d3 + char4) % 2 !== 0) {
          console.log(`${char1}-${d2}${d3}${char4}`);
        }
      }
    }
  }
}

execute(86,88,4)

