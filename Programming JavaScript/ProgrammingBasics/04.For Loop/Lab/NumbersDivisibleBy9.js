function execute(first, second) {
    let sum = 0
    let divisibleNums = ''
    for (let i = first; i <= second; i++) {
        if (i % 9 === 0) {
            sum += i
        }

    }
    console.log(`The sum: ${sum}`);

    for (let i = first; i <= second; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

execute(100, 200)