/* 01. Pool Day
function execute(peopleCount, entranceFee, sunbedPrice, umbrellaFee) {
    let entranceAmount = peopleCount * entranceFee
    let sunbedAmount = Math.ceil(peopleCount * 0.75) * sunbedPrice
    let umbrellaAmount = Math.ceil(peopleCount / 2) * umbrellaFee

    let ttlAmount = entranceAmount + sunbedAmount + umbrellaAmount

    console.log(`${ttlAmount.toFixed(2)} lv.`);

}

execute(21, 5.50, 4.40, 6.20)

02. Family Trip
function execute(budget, nights, nightPrice, addExpensePercent) {
    if (nights > 7) {
        nightPrice -= nightPrice * 0.05
    }
    let nightsAmount = nights * nightPrice
    let addExpensesAmount = budget * addExpensePercent / 100
    let ttlAmount = nightsAmount + addExpensesAmount
    if (ttlAmount <= budget) {
        console.log(`Ivanovi will be left with ${(budget - ttlAmount).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(ttlAmount - budget).toFixed(2)} leva needed.`);

    }

}

execute(500, 7, 66, 15)

03. Coffee Machine
function execute(type, sugar, drinksCount) {
    let price = 0
    switch (type) {
        case 'Espresso':
            if (sugar === 'Without') {
                price = 0.9
            } else if (sugar === 'Normal') {
                price = 1
            } else {
                price = 1.2
            }
            break
        case 'Cappuccino':
            if (sugar === 'Without') {
                price = 1
            } else if (sugar === 'Normal') {
                price = 1.2
            } else {
                price = 1.6
            }
            break
        case 'Tea':
            if (sugar === 'Without') {
                price = 0.5
            } else if (sugar === 'Normal') {
                price = 0.6
            } else {
                price = 0.7
            }
            break
    }
    let ttlAmount = drinksCount * price
    if (sugar === 'Without') {
        ttlAmount -= ttlAmount * 0.35
    }
    if (type === 'Espresso' && drinksCount >= 5) {
        ttlAmount -= ttlAmount * 0.25
    }
    if (ttlAmount > 15) {
        ttlAmount -= ttlAmount * 0.20
    }
    console.log(`You bought ${drinksCount} cups of ${type} for ${ttlAmount.toFixed(2)} lv.`);

}

execute('Cappuccino', 'Normal', 13)



03. Travel Agency
function execute(city, package, vipCard, stay) {
    let price = 0
    if (stay < 1) {
        console.log('Days must be positive number!');
        return
    }
    switch (city) {
        case "Bansko":
        case "Borovets":
            switch (package) {
                case 'noEquipment':
                    price = 80
                    if (vipCard === 'yes') {
                        price -= price * 0.05
                    }
                    break
                case 'withEquipment':
                    price = 100
                    if (vipCard === 'yes') {
                        price -= price * 0.10
                    }
                    break
                default:
                    console.log("Invalid input!");
                    return
            }
            break
        case "Varna":
        case "Burgas":
            switch (package) {
                case 'noBreakfast':
                    price = 100
                    if (vipCard === 'yes') {
                        price -= price * 0.07
                    }
                    break
                case 'withBreakfast':
                    price = 130
                    if (vipCard === 'yes') {
                        price -= price * 0.12
                    }
                    break
                default:
                    console.log("Invalid input!");
                    return
            }
            break
        default:
            console.log("Invalid input!");
            return
    }
    if (stay > 7) {
        stay -= 1;
    }
    let ttlAmount = stay * price
    console.log(`The price is ${ttlAmount.toFixed(2)}lv! Have a nice time!`);
}

execute('Gabrovo', 'noBreakfast', 'no', 3)

04. Club
function execute(input) {
    let expectedProfit = input[0]
    let index = 1
    let command = input[index]
    let actualProfit = 0
    while (command !== 'Party!') {
        let drinkName = String(input[index++])
        let order = Number(input[index])
        let drinkPrice = drinkName.length;

        let currentProfit = drinkPrice * order
        if (currentProfit % 2 !== 0) {
            currentProfit *= 0.75
        }
        actualProfit += currentProfit
        if (actualProfit >= expectedProfit) {
            console.log('Target acquired.')
            break
        }

        index++
        command = input[index]
    }
    if (actualProfit < expectedProfit) {
        console.log(`We need ${(expectedProfit - actualProfit).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${actualProfit.toFixed(2)} leva.`);
}

execute(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"])



04. Renovation
function execute(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percent = Number(input[2]);

    let totalArea = 4 * height * width;
    let areaToPaint = Math.ceil(totalArea * (1 - percent / 100));

    let index = 3;
    let command = input[index];

    while (command !== "Tired!") {
        let paint = Number(command);
        areaToPaint -= paint;

        if (areaToPaint <= 0) {
            if (areaToPaint < 0) {
                console.log(`All walls are painted and you have ${Math.abs(areaToPaint)} l paint left!`);
            } else {
                console.log("All walls are painted! Great job, Pesho!");
            }
            return;
        }

        index++;
        command = input[index];
    }

    console.log(`${areaToPaint} quadratic m left.`);
}

execute(["2", "3", "25", "6", "7", "8"])



05. PC Game Shop
function execute(input) {
    let hearthstoneCount = 0
    let forniteCount = 0
    let overwatchCount = 0
    let othersCount = 0
    let allGamesCount = input[0]
    for (let i = 1; i < input.length; i++) {
        let game = input[i]
        switch (game) {
            case 'Hearthstone':
                hearthstoneCount++
                break;
            case 'Fornite':
                forniteCount++
                break;
            case 'Overwatch':
                overwatchCount++
                break;
            default:
                othersCount++
                break;
        }
    }
    console.log(`Hearthstone - ${(hearthstoneCount / allGamesCount * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCount / allGamesCount * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount / allGamesCount * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCount / allGamesCount * 100).toFixed(2)}%`);
}

execute(["3", "Hearthstone", "Diablo 2", "Star Craft 2"])

 */

/* 05. Football Tournament */
/* function execute(input) {
    let clubName = input[0]
    let gamesPlayed = Number(input[1])


    let winCount = 0
    let drawCount = 0
    let lossCount = 0

    for (let index = 2; index < input.length; index++) {
        switch (input[index]) {
            case "W":
                winCount++
                break
            case "D":
                drawCount++
                break
            case "L":
                lossCount++
                break
        }
    }
    let ttlPoints = winCount * 3 + drawCount
    let winRate = winCount / gamesPlayed * 100

    if (gamesPlayed === 0) {
        console.log(`${clubName} hasn't played any games during this season.`);
        return
    } else {
        console.log(`${clubName} has won ${ttlPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winCount}`);
        console.log(`## D: ${drawCount}`);
        console.log(`## L: ${lossCount}`);
        console.log(`Win rate: ${(winRate).toFixed(2)}%`);
    }

} */

/* execute(["Chelsea", "0"]) */

/* 06. Name Game */
/* function execute(input) {
    let index = 0;
    let winnerName = "";
    let winnerPoints = 0;

    while (input[index] !== "Stop") {
        let name = input[index++];
        let points = 0;

        for (let i = 0; i < name.length; i++) {
            let num = Number(input[index++]);
            let ascii = name.charCodeAt(i);

            if (num === ascii) {
                points += 10;
            } else {
                points += 2;
            }
        }

        if (points >= winnerPoints) {
            winnerName = name;
            winnerPoints = points;
        }
    }

    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}


execute(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]); */

/* 06. The Most Powerful Word */
function execute(input) {
    let index = 0;
    let mostPowerful = "";
    let maxPower = Number.MIN_SAFE_INTEGER;

    while (input[index] !== "End of words") {
        let word = input[index++];
        let sum = 0;

        for (let i = 0; i < word.length; i++) {
            sum += word.charCodeAt(i);
        }

        let firstLetter = word[0].toLowerCase();
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

        let power = 0;
        if (vowels.includes(firstLetter)) {
            power = sum * word.length;
        } else {
            power = Math.floor(sum / word.length);
        }

        if (power > maxPower) {
            maxPower = power;
            mostPowerful = word;
        }
    }

    console.log(`The most powerful word is ${mostPowerful} - ${maxPower}`);
}


execute([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
