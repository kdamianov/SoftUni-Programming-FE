function generateHolliday(budget, season) {
    let expenses
    let destination
    let accomodation
    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            expenses = budget * 0.30
            accomodation = "Camp"
        } else {
            expenses = budget * 0.70
            accomodation = "Hotel"
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            expenses = budget * 0.40
            accomodation = "Camp"
        } else {
            expenses = budget * 0.80
            accomodation = "Hotel"
        }
    } else {
        destination = "Europe"
        expenses = budget * 0.90
        accomodation = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${expenses.toFixed(2)}`);
}

generateHolliday(1500, "summer")