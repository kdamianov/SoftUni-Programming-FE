function execute(input) {
    let user = input[0]
    let pass = input[1]
    let data = input[2]
    let index = 2
    while (data !== pass) {
        data = input[index]
        index++
    }

    console.log(`Welcome ${user}!`);

}

execute(["Nakov",

    "1234",

    "Pass",

    "1324",

    "1234"])