function execute(age, washMachinePrice, toyPrice) {
    let toys = 0
    let money = 0
    let amount = 0
    for (let year = 1; year <= age; year++) {
        if (year % 2 !== 0) {
            toys++
        } else {
            money += 10.00
            amount += money - 1
        }
    }

    let toysMoney = toys * toyPrice
    amount += toysMoney

    if (amount >= washMachinePrice) {
        console.log(`Yes! ${(amount - washMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washMachinePrice - amount).toFixed(2)}`);
    }
}

execute(21, 1570.98, 3)