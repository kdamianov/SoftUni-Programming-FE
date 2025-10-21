function calculateTicketPrice(input) {
    switch (input) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log("12");
            break
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break
        default:
            console.log("16");
            break
    }
}

calculateTicketPrice("Sunday")