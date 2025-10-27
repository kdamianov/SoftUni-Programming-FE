function execute(input) {
    let counter = 0
    for (let x1 = 0; x1 <= input; x1++) {
        for (let x2 = 0; x2 <= input; x2++) {
            for (let x3 = 0; x3 <= input; x3++) {
                if (Number(x1) + Number(x2) + Number(x3) === Number(input)) {
                    counter++
                }
            }
        }
    }
    console.log(counter);
}


execute(5)