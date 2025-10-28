function execute(input) {
    let index = 0
    let primesSum = 0
    let nonPrimesSum = 0
    while (input[index] !== "stop") {
        let currentNum = Number(input[index])
        if (currentNum < 0) {
            console.log('Number is negative.');
            index++
            continue
        }

        let isPrime = true
        for (let divider = 2; divider < currentNum; divider++) {
            if (currentNum % divider === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            primesSum += currentNum
        } else {
            nonPrimesSum += currentNum
        }

        index++
    }
    console.log(`Sum of all prime numbers is: ${primesSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimesSum}`);
}

execute(["30",

"83",

"33",

"-1",

"20",

"stop"])