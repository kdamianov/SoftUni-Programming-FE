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
