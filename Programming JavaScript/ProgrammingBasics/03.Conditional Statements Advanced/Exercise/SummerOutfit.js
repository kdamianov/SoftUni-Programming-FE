function reccomendOutfit(degrees, dayTime) {
    let outfit
    let shoes

    if (degrees >= 10 && degrees <= 18) {
        switch (dayTime) {
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                break
            case "Afternoon":
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (dayTime) {
            case "Morning":
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break
            case "Afternoon":
                outfit = "T-Shirt"
                shoes = "Sandals"
                break
        }
    } else {
        switch (dayTime) {
            case "Morning":
                outfit = "T-Shirt"
                shoes = "Sandals"
                break
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                break
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

reccomendOutfit(22,

"Afternoon")