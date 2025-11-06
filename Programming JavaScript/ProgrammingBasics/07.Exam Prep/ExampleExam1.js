/* 01. Tennis Equipment */
function execute(pricePerRacket, countRackets, countShoes) {
    let priceShoes = pricePerRacket / 6;

    let totalRackets = pricePerRacket * countRackets;
    let totalShoes = priceShoes * countShoes;

    let otherEquipment = 0.2 * (totalRackets + totalShoes);

    let totalPrice = totalRackets + totalShoes + otherEquipment;

    let priceDjokovic = Math.floor(totalPrice / 8);
    let priceSponsors = Math.ceil(totalPrice * 7 / 8);

    console.log(`Price to be paid by Djokovic ${priceDjokovic}`);
    console.log(`Price to be paid by sponsors ${priceSponsors}`);
}

execute(850, 4, 2)

/* 01. Basketball Equipment */
function execute(annualFee) {
    let sneakers = annualFee * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit / 4;
    let accessories = ball / 5;

    let total = annualFee + sneakers + outfit + ball + accessories;

    console.log(total.toFixed(2));
}

execute(365)

/* 02. Football Results */
function execute(result1, result2, result3) {
    let win = 0;
    let lose = 0;
    let draw = 0;
    
    function check(result) {
        let home = Number(result[0]);
        let away = Number(result[2]);

        if (home > away) {
            win++;
        } else if (home < away) {
            lose++;
        } else {
            draw++;
        }
    }

    check(result1);
    check(result2);
    check(result3);

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw}`);
}

execute('3:1','0:2','0:0')

/* 02. Skeleton */
function execute(minutesControl, secondsControl, lengthTrack, secondsPer100m) {
    
    let controlTime = minutesControl * 60 + secondsControl;
    
    let marinTime = (lengthTrack / 100) * secondsPer100m;
    
    let slowdowns = lengthTrack / 120;
    
    marinTime -= slowdowns * 2.5;
    
    if (marinTime <= controlTime) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        let diff = marinTime - controlTime;
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

execute(2, 12, 1200, 10);

/* 03. Gymnastics */
function execute(country, apparatus) {
    let difficulty = 0;
    let execution = 0;
    
    if (country === "Russia") {
        if (apparatus === "ribbon") {
            difficulty = 9.100;
            execution = 9.400;
        } else if (apparatus === "hoop") {
            difficulty = 9.300;
            execution = 9.800;
        } else if (apparatus === "rope") {
            difficulty = 9.600;
            execution = 9.000;
        }
    } else if (country === "Bulgaria") {
        if (apparatus === "ribbon") {
            difficulty = 9.600;
            execution = 9.400;
        } else if (apparatus === "hoop") {
            difficulty = 9.550;
            execution = 9.750;
        } else if (apparatus === "rope") {
            difficulty = 9.500;
            execution = 9.400;
        }
    } else if (country === "Italy") {
        if (apparatus === "ribbon") {
            difficulty = 9.200;
            execution = 9.500;
        } else if (apparatus === "hoop") {
            difficulty = 9.450;
            execution = 9.350;
        } else if (apparatus === "rope") {
            difficulty = 9.700;
            execution = 9.150;
        }
    }
    
    let totalScore = difficulty + execution;
    
    let missingPercent = ((20 - totalScore) / 20) * 100;
    
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${apparatus}.`);
    console.log(`${missingPercent.toFixed(2)}%`);
}

execute("Bulgaria", "ribbon");

/* 03. World Snooker Championship */
function execute(stage, ticketType, ticketCount, photoOption) {
    let pricePerTicket = 0;
    
    if (stage === "Quarter final") {
        if (ticketType === "Standard") {
            pricePerTicket = 55.50;
        } else if (ticketType === "Premium") {
            pricePerTicket = 105.20;
        } else if (ticketType === "VIP") {
            pricePerTicket = 118.90;
        }
    } else if (stage === "Semi final") {
        if (ticketType === "Standard") {
            pricePerTicket = 75.88;
        } else if (ticketType === "Premium") {
            pricePerTicket = 125.22;
        } else if (ticketType === "VIP") {
            pricePerTicket = 300.40;
        }
    } else if (stage === "Final") {
        if (ticketType === "Standard") {
            pricePerTicket = 110.10;
        } else if (ticketType === "Premium") {
            pricePerTicket = 160.66;
        } else if (ticketType === "VIP") {
            pricePerTicket = 400.00;
        }
    }
    
    let totalPrice = pricePerTicket * ticketCount;

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    } else if (totalPrice > 2500) {
        totalPrice *= 0.90;
        if (photoOption === 'Y') {
            totalPrice += ticketCount * 40;
        }
    } else {
        if (photoOption === 'Y') {
            totalPrice += ticketCount * 40;
        }
    }
    
    console.log(totalPrice.toFixed(2));
}

execute("Final", "Premium", 25, 'Y');

/* 04. Game Number Wars */
function numberWars(input) {
    let index = 0;
    let player1 = input[index++];
    let player2 = input[index++];

    let points1 = 0;
    let points2 = 0;

    while (input[index] !== "End of game") {
        let card1 = Number(input[index++]);
        let card2 = Number(input[index++]);

        if (card1 > card2) {
            points1 += card1 - card2;
        } else if (card2 > card1) {
            points2 += card2 - card1;
        } else {
            console.log("Number wars!");
            card1 = Number(input[index++]);
            card2 = Number(input[index++]);

            if (card1 > card2) {
                console.log(`${player1} is winner with ${points1} points`);
            } else {
                console.log(`${player2} is winner with ${points2} points`);
            }
            return;
        }
    }

    console.log(`${player1} has ${points1} points`);
    console.log(`${player2} has ${points2} points`);
}

execute(["Desi","Niki","7","5","3","4","3","3","5","3","End of game"]);

/* 04. Darts */
function execute(input) {
    let index = 0;
    let playerName = input[index++];

    let points = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (input[index] !== "Retire") {
        let field = input[index++];
        let score = Number(input[index++]);

        let currentPoints = 0;

        if (field === "Single") {
            currentPoints = score;
        } else if (field === "Double") {
            currentPoints = score * 2;
        } else if (field === "Triple") {
            currentPoints = score * 3;
        }

        if (currentPoints > points) {
            unsuccessfulShots++;
        } else {
            points -= currentPoints;
            successfulShots++;
        }

        if (points === 0) {
            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
            return;
        }
    }

    console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
}

execute(["Michael van Gerwen","Triple","20","Triple","19","Double","10","Single","3","Single","1","Triple","20","Triple","20","Double","20","Retire"]);

/* 05. Tennis Ranklist */
function execute(input) {
  let tournaments = Number(input[0]);
  let startingPoints = Number(input[1]);

  let totalPoints = 0;
  let wins = 0;

  for (let i = 2; i < input.length; i++) {
    let stage = input[i];

    if (stage === "W") {
      totalPoints += 2000;
      wins++;
    } else if (stage === "F") {
      totalPoints += 1200;
    } else if (stage === "SF") {
      totalPoints += 720;
    }
  }

  let finalPoints = startingPoints + totalPoints;
  let averagePoints = Math.floor(totalPoints / tournaments);
  let winPercent = (wins / tournaments) * 100;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${winPercent.toFixed(2)}%`);
}

execute(["5", "1400", "F", "SF", "W", "W", "SF"]);

/* 05. Fitness Center */
function execute(input) {
  let visitors = Number(input[0]);

  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let shake = 0;
  let bar = 0;

  for (let i = 1; i <= visitors; i++) {
    let activity = input[i];

    switch (activity) {
      case "Back": back++; break;
      case "Chest": chest++; break;
      case "Legs": legs++; break;
      case "Abs": abs++; break;
      case "Protein shake": shake++; break;
      case "Protein bar": bar++; break;
    }
  }

  let totalWorkOut = back + chest + legs + abs;
  let totalProtein = shake + bar;

  let workOutPercent = (totalWorkOut / visitors) * 100;
  let proteinPercent = (totalProtein / visitors) * 100;

  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${shake} - protein shake`);
  console.log(`${bar} - protein bar`);
  console.log(`${workOutPercent.toFixed(2)}% - work out`);
  console.log(`${proteinPercent.toFixed(2)}% - protein`);
}

execute(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Back", "Back", "Protein bar"]);


/* 06. High Jump */
function execute(input) {
  let targetHeight = Number(input[0]);
  let currentHeight = targetHeight - 30;

  let jumps = 0;
  let failCount = 0;
  let index = 1;

  while (true) {
    let jumpHeight = Number(input[index]);
    jumps++;

    if (jumpHeight > currentHeight) {
      currentHeight += 5;
      failCount = 0;
    } else {
      failCount++;
    }

    if (failCount === 3) {
      console.log(`Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`);
      break;
    }

    if (currentHeight > targetHeight) {
      console.log(`Tihomir succeeded, he jumped over ${currentHeight - 5}cm after ${jumps} jumps.`);
      break;
    }

    index++;
  }
}

execute(["231", "205", "212", "213", "228", "229", "230", "235", "234", "235"]);

/* 06. Basketball Tournament */
function execute(input) {
  let index = 0;
  let command = input[index];
  let totalGames = 0;
  let wins = 0;
  let losses = 0;

  while (command !== "End of tournaments") {
    let tournamentName = command;
    index++;
    let gamesCount = Number(input[index]);

    for (let i = 1; i <= gamesCount; i++) {
      index++;
      let desiPoints = Number(input[index]);
      index++;
      let opponentPoints = Number(input[index]);
      totalGames++;

      if (desiPoints > opponentPoints) {
        wins++;
        console.log(
          `Game ${i} of tournament ${tournamentName}: win with ${desiPoints - opponentPoints} points.`
        );
      } else {
        losses++;
        console.log(
          `Game ${i} of tournament ${tournamentName}: lost with ${opponentPoints - desiPoints} points.`
        );
      }
    }

    index++;
    command = input[index];
  }

  let winPercent = (wins / totalGames) * 100;
  let losePercent = (losses / totalGames) * 100;

  console.log(`${winPercent.toFixed(2)}% matches win`);
  console.log(`${losePercent.toFixed(2)}% matches lost`);
}

execute(["Dunkers","2","75","65","56","73","Fire Girls","3","67","34","83","98","66","45","End of tournaments"]);