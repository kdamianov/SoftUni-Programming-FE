function checkIfOpen(hour, day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break
        default:
            console.log("closed");
            break

    }
}

checkIfOpen(11, "Sunday")