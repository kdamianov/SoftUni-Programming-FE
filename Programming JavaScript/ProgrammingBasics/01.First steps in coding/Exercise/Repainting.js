function calculate(nylon, paint, thinner, hours) {
    let nylonAmount = (nylon + 2) * 1.5
    let paintAmount = (paint + (0.10 * paint)) * 14.5
    let thinnerAmmount = thinner * 5.0
    let totalMaterialsAmount = nylonAmount + paintAmount + thinnerAmmount + 0.40
    let paintersAmount = (totalMaterialsAmount * 0.3) * hours
    let totalAmmount = totalMaterialsAmount + paintersAmount
    console.log(totalAmmount);
}

calculate(10, 11, 4, 8)