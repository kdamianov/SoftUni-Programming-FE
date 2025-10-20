function calculate(ammount, term, percent) {
    let accumulatedInterest = ammount * (percent / 100)
    let monthlyInterest = accumulatedInterest / 12
    let totalAmmount = ammount + (term * monthlyInterest)
    console.log(totalAmmount);
}

calculate(200, 3, 5.7)