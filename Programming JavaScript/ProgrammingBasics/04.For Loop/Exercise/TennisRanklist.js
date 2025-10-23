function execute(input) {
    let tournamentsCount = Number(input[0])
    let initialPoints = Number(input[1])
    let pointWon = 0
    let tournamentsWon = 0
    for (let i = 2; i < input.length; i++) {
        let stage = input[i]
        switch (stage) {
            case "SF":
                pointWon += 720
                break
            case "F":
                pointWon += 1200
                break
            case "W":
                pointWon += 2000
                tournamentsWon++
                break
        }
    }
    console.log(`Final points: ${initialPoints + pointWon}`);
    console.log(`Average points: ${Math.floor(pointWon / tournamentsCount)}`);
    console.log(`${((tournamentsWon/tournamentsCount)*100).toFixed(2)}%`);
}

execute(["4",

    "750",

    "SF",

    "W",

    "SF",

    "W"])