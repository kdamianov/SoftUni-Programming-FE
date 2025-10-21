function calculate(budget, videoCards, processors, ramMemories) {
    let videoCardsAmount = videoCards * 250
    let processorPrice = (videoCardsAmount * 0.35).toFixed(2)
    let processorsAmount = processors * processorPrice
    let ramMemoryPrice = (videoCardsAmount * 0.10).toFixed(2)
    let ramMemoriesAmount = ramMemoryPrice * ramMemories

    let totalAmount = videoCardsAmount + processorsAmount + ramMemoriesAmount

    if (videoCards > processors) {
        totalAmount = totalAmount - totalAmount * 0.15
    }

    if (budget >= totalAmount) {
        console.log(`You have ${(budget - totalAmount).toFixed(2)} leva left!`);

    } else {
        console.log(`Not enough money! You need ${(totalAmount - budget).toFixed(2)} leva more!`);

    }
}

calculate(920.45, 3, 1, 1)