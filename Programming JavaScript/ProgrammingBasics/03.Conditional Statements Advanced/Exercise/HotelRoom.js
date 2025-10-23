function calculate(month, nights) {
    let studioPrice
    let appPrice
    switch (month) {
        case "May":
        case "October":
            studioPrice = 50
            if (nights > 14) {
                studioPrice = studioPrice * 0.70
            } else if (nights > 7) {
                studioPrice = studioPrice * 0.95
            }
            appPrice = 65
            break
        case "June":
        case "September":
            studioPrice = 75.20
            if (nights > 14) {
                studioPrice = studioPrice * 0.8
            }
            appPrice = 68.70
            break
        case "July":
        case "August":
            studioPrice = 76
            appPrice = 77
            break
    }

    if (nights > 14) {
        appPrice = appPrice * 0.90
    }

    let finalPriceStudio = nights * studioPrice
    let finalPriceApp = nights * appPrice

    console.log(`Apartment: ${finalPriceApp.toFixed(2)} lv.`);
    console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
}

calculate("June", 14)