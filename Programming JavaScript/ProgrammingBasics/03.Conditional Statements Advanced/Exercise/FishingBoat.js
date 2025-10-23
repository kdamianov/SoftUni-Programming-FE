function calculate(budget, season, fishermenCount) {
    let boatPrice
    switch (season) {
        case "Spring":
            boatPrice = 3000
            break
        case "Summer":
        case "Autumn":
            boatPrice = 4200
            break
        case "Winter":
            boatPrice = 2600
            break
    }

    if (fishermenCount <= 6) {
        boatPrice = boatPrice * 0.90
    } else if (fishermenCount > 6 && fishermenCount <= 11) {
        boatPrice = boatPrice * 0.85
    } else if (fishermenCount > 11) {
        boatPrice = boatPrice * 0.75
    }

    if (season !== "Autumn" && fishermenCount % 2 === 0) {
        boatPrice = boatPrice * 0.95
    }

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }
}

calculate(3000, "Summer", 11)