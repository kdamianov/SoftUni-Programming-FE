function calculateBonusScore(input) {
    let bonusPoints = 0.0
    if (input <= 100) {
        bonusPoints = 5
    } else if (input > 100 && input <= 1000) {
        bonusPoints = input * 0.20
    } else {
        bonusPoints = input * 0.10
    }

    if (input % 2 == 0) {
        bonusPoints += 1
    } else if (input % 10 == 5) {
        bonusPoints += 2
    }

    let totalPoints = input + bonusPoints
    console.log(bonusPoints);
    console.log(totalPoints);
}

calculateBonusScore(2703)