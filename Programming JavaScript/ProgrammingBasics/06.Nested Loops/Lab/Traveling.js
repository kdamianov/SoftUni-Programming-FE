function execute(input) {
    let index = 0
    while (input[index] !== "End") {
        let destination = input[index]
        index++
        let budget = Number(input[index])
        index++
        let sum = 0
        while (sum < budget) {
            let currenSaving = Number(input[index])
            sum += currenSaving
            index++

        }
        console.log(`Going to ${destination}!`);
    }
}

execute(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])