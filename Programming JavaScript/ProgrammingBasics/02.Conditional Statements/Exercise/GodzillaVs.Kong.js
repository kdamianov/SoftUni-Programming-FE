function calculate(budget, statistCount, clothingPrice) {
    let decorAmount = budget * 0.10
    let clothingAmount = statistCount * clothingPrice
    if (statistCount > 150) {
        clothingAmount = clothingAmount - (clothingAmount * 0.10)
    }
    let movieAmount = decorAmount + clothingAmount
    if (budget >= movieAmount) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - movieAmount).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(movieAmount - budget).toFixed(2)} leva more.`);
    }
}

calculate(9587.88, 222, 55.68)