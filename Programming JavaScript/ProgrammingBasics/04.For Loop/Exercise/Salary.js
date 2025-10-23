function execute(input) {
    let openedTabs = input[0]
    let salary = input[1]

    for (let i = 2; i < input.length; i++) {
        let fine = 0
        switch (input[i]) {
            case "Facebook":
                fine = 150
                break
            case "Instagram":
                fine = 100
                break
            case "Reddit":
                fine = 50
                break
        }
        salary -= fine
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break
        }
    }
    if (salary > 0) console.log(salary);
}

execute([3,
500,
"Facebook",
"Stackoverflow.com",
"softuni.bg"])