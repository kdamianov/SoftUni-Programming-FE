function execute(input) {
    let groupsCount = Number(input[0]);

    let totalPeople = 0;
    let groupMusala = 0;
    let groupMontblanc = 0;
    let groupKilimanjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let groupCount = Number(input[i]);
        totalPeople += groupCount;

        if (groupCount <= 5) {
            groupMusala += groupCount;
        } else if (groupCount <= 12) {
            groupMontblanc += groupCount;
        } else if (groupCount <= 25) {
            groupKilimanjaro += groupCount;
        } else if (groupCount <= 40) {
            groupK2 += groupCount;
        } else {
            groupEverest += groupCount;
        }
    }

    console.log(((groupMusala / totalPeople) * 100).toFixed(2) + "%");
    console.log(((groupMontblanc / totalPeople) * 100).toFixed(2) + "%");
    console.log(((groupKilimanjaro / totalPeople) * 100).toFixed(2) + "%");
    console.log(((groupK2 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((groupEverest / totalPeople) * 100).toFixed(2) + "%");
}

execute(["5",

"25",

"41",

"31",

"250",

"6"])