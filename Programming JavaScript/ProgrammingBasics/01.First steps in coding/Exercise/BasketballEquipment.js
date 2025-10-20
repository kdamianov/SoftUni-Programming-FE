function calculate(yearlyTax) {
    let shoesPrice = yearlyTax - (yearlyTax * 0.4)
    let suitPrice = shoesPrice - (shoesPrice * 0.2)
    let ballPrice = suitPrice / 4
    let accesoriesPrice = ballPrice / 5
    let totalAmmount = yearlyTax+ shoesPrice + suitPrice + ballPrice + accesoriesPrice
    console.log(totalAmmount);
}

calculate(365)