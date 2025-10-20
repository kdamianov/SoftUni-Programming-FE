function calculateMoney(tourPrice, puzzleCount, dollCount, teddyCount, minionCount, truckCount) {
    let totalCount = puzzleCount + dollCount + teddyCount + minionCount + truckCount
    let totalAmount = (puzzleCount * 2.60) + (dollCount * 3) + (teddyCount * 4.10) + (minionCount * 8.20) + (truckCount * 2)

    if (totalCount >= 50) {
        totalAmount = totalAmount - (totalAmount * 0.25)
    }

    let finalAmount = totalAmount - (totalAmount * 0.10)

    let moneyDiff = 0.0
    if (finalAmount >= tourPrice) {
        moneyDiff = finalAmount - tourPrice
        console.log(`Yes! ${moneyDiff.toFixed(2)} lv left.`);
    } else {
        moneyDiff = tourPrice - finalAmount
        console.log(`Not enough money! ${moneyDiff.toFixed(2)} lv needed.`);
    }
}

calculateMoney(320, 8, 2, 5, 5, 1)