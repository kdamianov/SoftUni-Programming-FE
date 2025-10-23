function execute(input) {
    let number = Number(input[0])
    let sum = 0
    let index = 1
    while (sum < number) {
        sum += Number(input[index])
        index++
    }
    console.log(sum);

}

execute(["20", "1", "2", "3", "4", "5", "6"])