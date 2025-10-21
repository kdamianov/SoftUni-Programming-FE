function calculate(movieName, episodeLength, lunchBreak) {
    let lunchTime = lunchBreak * 1 / 8
    let breakTime = lunchBreak * 1 / 4
    let leftTime = lunchBreak - lunchTime - breakTime

    if (leftTime >= episodeLength) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeLength - leftTime)} more minutes.`);
    }
}

calculate("Teen Wolf", 48, 60)