function execute(start, end) {
    let output = ''
    for (let current = start; current <= end; current++) {
        let evensSum = 0
        let oddsSum = 0
        let currentNumStr = String(current)
        for (let index = 0; index < currentNumStr.length; index++) {
            if (index % 2 === 0) {
                evensSum += Number(currentNumStr[index])
            } else {
                oddsSum += Number(currentNumStr[index])
            }
        }
        if (evensSum === oddsSum) {
            output += current + ' '
        }
    }
    console.log(output + ' ');
}

execute(123456,

    124000)