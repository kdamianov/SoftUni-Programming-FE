/* 01.Agency Profit */
function execute(companyName, adultTickets, childrenTickets, adultTicketNetPrice, serviceTax) {
    let childrenTicketNetPrice = adultTicketNetPrice * 0.3 + serviceTax
    adultTicketNetPrice += serviceTax

    let ttlTicketsPrice = (adultTickets * adultTicketNetPrice) + (childrenTickets * childrenTicketNetPrice)
    let profit = ttlTicketsPrice * 0.2

    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}

execute('Ryanair', 60, 23, 158.96, 39.12)

/* 02.Add Bags */
function execute(lugaggePrice, kilograms, daysToTrip, luggageCount) {
    if (kilograms < 10) {
        lugaggePrice = lugaggePrice * 0.2
    } else if (kilograms <= 20) {
        lugaggePrice = lugaggePrice * 0.5
    }

    if (daysToTrip > 30) {
        lugaggePrice += lugaggePrice * 0.1
    } else if (daysToTrip >= 7) {
        lugaggePrice += lugaggePrice * 0.15
    } else {
        lugaggePrice += lugaggePrice * 0.4
    }

    let ttlPriceBags = lugaggePrice * luggageCount

    console.log(`The total price of bags is: ${ttlPriceBags.toFixed(2)} lv.`);


}

execute(30, 18, 15, 2)

/* 03.Aluminum Joinery */
function execute(count, type, delivery) {
    let price = 0
    if (count < 10) {
        console.log('Invalid order');
        return
    }

    switch (type) {
        case '90X130':
            price = 110
            if (count > 60) {
                price -= price * 0.08
            } else if (count > 30) {
                price -= price * 0.05
            }
            break
        case '100X150':
            price = 140
            if (count > 80) {
                price -= price * 0.1
            } else if (count > 40) {
                price -= price * 0.06
            }
            break
        case '130X180':
            price = 190
            if (count > 50) {
                price -= price * 0.12
            } else if (count > 20) {
                price -= price * 0.07
            }
            break
        case '200X300':
            price = 250
            if (count > 50) {
                price -= price * 0.14
            } else if (count > 25) {
                price -= price * 0.09
            }
            break
    }

    let ttlPrice = price * count
    if (delivery === 'With delivery') {
        ttlPrice += 60
    }
    if (count > 99) {
        ttlPrice -= ttlPrice * 0.04
    }

    console.log(`${ttlPrice.toFixed(2)} BGN`);

}

execute(105, '100X150', 'With delivery')

/* 04.Balls */
function execute(input) {
    let ballsCount = input[0]
    let ttlPoints = 0
    let redBallsCount = 0
    let orangeBallsCount = 0
    let yellowBallsCount = 0
    let whiteBallsCount = 0
    let otherColorBallsCount = 0
    let blackBallsCount = 0
    for (let index = 1; index < input.length; index++) {
        let color = input[index]
        switch (color) {
            case 'red':
                ttlPoints += 5
                redBallsCount++
                break;
            case 'orange':
                ttlPoints += 10
                orangeBallsCount++
                break;
            case 'yellow':
                ttlPoints += 15
                yellowBallsCount++
                break;
            case 'white':
                ttlPoints += 20
                whiteBallsCount++
                break;
            case 'black':
                ttlPoints = Math.floor(ttlPoints / 2)
                blackBallsCount++
                break;
            default:
                otherColorBallsCount++
                break
        }
    }
    console.log(`Total points: ${ttlPoints}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls: ${orangeBallsCount}`);
    console.log(`Yellow balls: ${yellowBallsCount}`);
    console.log(`White balls: ${whiteBallsCount}`);
    console.log(`Other colors picked: ${otherColorBallsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);
}

execute(["5", "red", "red", "ddd", "ddd", "ddd"])



/* 05.Best Player */
function execute(input) {
    let index = 0
    let command = input[index]
    let bestPlayer = ''
    let bestPlayerGoals = 0
    while (command !== "END") {
        let player = input[index]
        let goals = Number(input[index + 1])

        if (goals > bestPlayerGoals) {
            bestPlayer = player
            bestPlayerGoals = goals
        }

        if (goals >= 10) {
            break
        }

        index += 2
        command = input[index]
    }
    console.log(`${bestPlayer} is the best player!`);

    if (bestPlayerGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerGoals} goals.`);
    }
}

execute(["Petrov", "2", "Drogba", "11"])


/* 06. Barcode generator */
function execute(start, end) {
    let startStr = start.toString();
    let endStr = end.toString();

    let result = '';

    for (let i = Number(startStr[0]); i <= Number(endStr[0]); i++) {
        if (i % 2 === 0) continue;
        for (let j = Number(startStr[1]); j <= Number(endStr[1]); j++) {
            if (j % 2 === 0) continue;
            for (let k = Number(startStr[2]); k <= Number(endStr[2]); k++) {
                if (k % 2 === 0) continue;
                for (let l = Number(startStr[3]); l <= Number(endStr[3]); l++) {
                    if (l % 2 === 0) continue;
                    result += `${i}${j}${k}${l} `;
                }
            }
        }
    }
    console.log(result.trim());
}

execute(2345, 6789)
