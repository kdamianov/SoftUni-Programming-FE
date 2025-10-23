function calculate(flowerType, flowerCount, budget) {
    let price
    switch (flowerType) {
        case "Roses":
            price = 5
            break
        case "Dahlias":
            price = 3.80
            break
        case "Tulips":
            price = 2.80
            break
        case "Narcissus":
            price = 3
            break
        case "Gladiolus":
            price = 2.50
            break
    }

    let finalPrice = flowerCount * price
    if (flowerType === "Roses" && flowerCount > 80) {
        finalPrice = finalPrice - finalPrice * 0.10
    } else if (flowerType === "Dahlias" && flowerCount > 90) {
        finalPrice = finalPrice - finalPrice * 0.15
    } else if (flowerType === "Tulips" && flowerCount > 80) {
        finalPrice = finalPrice - finalPrice * 0.15
    } else if (flowerType === "Narcissus" && flowerCount < 120) {
        finalPrice = finalPrice + finalPrice * 0.15
    } else if (flowerType === "Gladiolus" && flowerCount < 80) {
        finalPrice = finalPrice + finalPrice * 0.20
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

calculate("Narcissus", 119, 360)