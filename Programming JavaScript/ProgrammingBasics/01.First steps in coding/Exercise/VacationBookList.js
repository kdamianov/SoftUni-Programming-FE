function calculate(pagesInBook, pagesPerHour, days) {
    let totalTime = pagesInBook / pagesPerHour
    let neededHours = totalTime / days
    console.log(neededHours);

}

calculate(212, 20, 2)