function execute(start, end, magicNum) {
    let count = 0
    let isValid = false

    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            count++
            let sum = Number(first) + Number(second)
            if (sum === magicNum) {
                isValid = true
                console.log(`Combination N:${count} (${first} + ${second} = ${magicNum})`);
                return
            }

        }
    }
    if (!isValid) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }

}

execute(88, 888, 2000)