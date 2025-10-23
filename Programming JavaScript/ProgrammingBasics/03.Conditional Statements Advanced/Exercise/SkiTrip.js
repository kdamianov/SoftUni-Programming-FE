function calculate(stay, room, rating) {
    let nights = stay - 1
    let finalPrice
    switch (room) {
        case "room for one person":
            finalPrice = nights * 18.00
            break
        case "apartment":
            finalPrice = nights * 25.00
            if (nights < 10) {
                finalPrice *= 0.7
            } else if (nights >= 10 && nights <= 15) {
                finalPrice *= 0.65
            } else {
                finalPrice *= 0.5
            }
            break
        case "president apartment":
            finalPrice = nights * 35.00
            if (nights < 10) {
                finalPrice *= 0.9
            } else if (nights >= 10 && nights <= 15) {
                finalPrice *= 0.85
            } else {
                finalPrice *= 0.8
            }
            break
    }

    if (rating === "positive") {
        finalPrice += finalPrice * 0.25
    } else {
        finalPrice -= finalPrice * 0.10

    }

    console.log(finalPrice.toFixed(2));
}

calculate(30, "president apartment", "negative")