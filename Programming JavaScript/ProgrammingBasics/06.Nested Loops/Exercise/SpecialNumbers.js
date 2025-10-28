function execute(n) {
    let output = ''
    for (let number = 1111; number <= 9999; number++) {
        let isSpecial = true
        let numberStr = String(number)
        for (let index = 0; index < numberStr.length; index++) {
            let currentDigit = Number(numberStr[index])
            if (n % currentDigit !== 0) {
                isSpecial = false
                break
            }
        }
        if (isSpecial) {
            output += number + ' '
        }
    }
    console.log(output);
}

execute(11)