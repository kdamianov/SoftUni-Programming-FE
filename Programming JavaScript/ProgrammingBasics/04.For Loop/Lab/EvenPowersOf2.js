function execute(num) {
    let result = 1
    for (let i = 0; i <= num; i += 2) {
        console.log(result);
        result = result * 2 * 2
    }
}

execute(3)