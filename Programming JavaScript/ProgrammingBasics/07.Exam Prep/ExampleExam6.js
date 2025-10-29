/* 01. Change Bureau */
function execute(bitcoins, yuans, commision) {
    let bitcoinInLeva = bitcoins * 1168
    let yuanInLeva = (yuans * 0.15) * 1.76
    let euros = (bitcoinInLeva + yuanInLeva) / 1.95

    let finalAmount = euros - euros * commision / 100
    console.log(finalAmount.toFixed(2));

}

execute(20, 5678, 2.4)

/* 01. Birthday Party */
function execute(rent) {
    let cakePrice = rent * 0.20
    let drinksPrice = cakePrice - cakePrice * 0.45
    let animatorPrice = rent / 3

    console.log(cakePrice + drinksPrice + animatorPrice + rent);

}

execute(3720)

/* 02. Mountain Run */
function execute(recordInSec, distance, meterPerSec) {
    let timeInSec = distance * meterPerSec
    let addTime = Math.floor(distance / 50) * 30
    let ttlTime = timeInSec + addTime

    if (recordInSec <= ttlTime) {
        console.log(`No! He was ${(ttlTime - recordInSec).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${(ttlTime).toFixed(2)} seconds.`);
    }

}

execute(1377, 389, 3)

/* 02. Cat Walking */
function execute(minPerWalk, walksCount, dailyCalories) {
    let ttlWalkMin = walksCount * minPerWalk
    let ttlCalories = ttlWalkMin * 5

    if (ttlCalories >= dailyCalories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${ttlCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${ttlCalories}.`);
    }
}

execute(15, 2, 500)

/* 03. Energy Booster */
function execute(fruit, package, count) {
    let price = 0
    switch (fruit) {
        case 'Watermelon':
            if (package === 'small') {
                price = 56
            } else {
                price = 28.70
            }
            break;
        case 'Mango':
            if (package === 'small') {
                price = 36.66
            } else {
                price = 19.60
            }
            break;
        case 'Pineapple':
            if (package === 'small') {
                price = 42.10
            } else {
                price = 24.80
            }
            break;
        case 'Raspberry':
            if (package === 'small') {
                price = 20
            } else {
                price = 15.20
            }
            break;
    }
    let packagePrice = 0
    if (package === 'small') {
        packagePrice = 2 * price
    } else {
        packagePrice = 5 * price
    }

    let ttlPrice = count * packagePrice
    if (ttlPrice > 1000) {
        ttlPrice *= 0.5
    } else if (ttlPrice >= 400) {
        ttlPrice *= 0.85
    }
    console.log(`${ttlPrice.toFixed(2)} lv.`);
}

execute('Pineapple', 'small', 1)

/* 03. Fitness Card */
function execute(money, gender, age, type) {
    let price = 0
    switch (type) {
        case 'Gym':
            if (gender === 'm') {
                price = 42
            } else {
                price = 35
            }
            break;
        case 'Boxing':
            if (gender === 'm') {
                price = 41
            } else {
                price = 37
            }
            break;
        case 'Yoga':
            if (gender === 'm') {
                price = 45
            } else {
                price = 42
            }
            break;
        case 'Zumba':
            if (gender === 'm') {
                price = 34
            } else {
                price = 31
            }
            break;
        case 'Dances':
            if (gender === 'm') {
                price = 51
            } else {
                price = 53
            }
            break;
        case 'Pilates':
            if (gender === 'm') {
                price = 39
            } else {
                price = 37
            }
            break;
    }

    if (age <= 19) {
        price -= price * 0.2
    }
    if (money >= price) {
        console.log(`You purchased a 1 month pass for ${type}.`)
    } else {
        console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
    }
}

execute(20, 'f', 15, 'Yoga')

/* 04. Trekking Mania */
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

execute(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])

/* 04. Food for Pets */
function execute(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);

    let totalDog = 0;
    let totalCat = 0;
    let totalBiscuits = 0;

    let index = 2;

    for (let day = 1; day <= days; day++) {
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);

        totalDog += dogFood;
        totalCat += catFood;

        if (day % 3 === 0) {
            let biscuits = 0.10 * (dogFood + catFood);
            totalBiscuits += biscuits;
        }
    }

    let totalEaten = totalDog + totalCat;
    let percentEaten = (totalEaten / totalFood) * 100;
    let percentDog = (totalDog / totalEaten) * 100;
    let percentCat = (totalCat / totalEaten) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${percentEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}

execute(["3", "500", "100", "30", "110", "25", "120", "35"])

/* 05. Care of Puppy */
function execute(input) {
    let foodKg = Number(input[0]); 
    let foodGrams = foodKg * 1000; 

    let index = 1;
    let command = input[index];
    let totalEaten = 0;

    while (command !== "Adopted") {
        let eaten = Number(command);
        totalEaten += eaten;

        index++;
        command = input[index];
    }

    if (totalEaten <= foodGrams) {
        let leftovers = foodGrams - totalEaten;
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
    } else {
        let needed = totalEaten - foodGrams;
        console.log(`Food is not enough. You need ${needed} grams more.`);
    }
}

execute(["4", "130", "345", "400", "180", "230", "120", "Adopted"])

/* 05. Suitcases Load */
function execute(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let counter = 0;

    while (index < input.length) {
        let command = input[index];
        if (command === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            console.log(`Statistic: ${counter} suitcases loaded.`);
            return;
        }

        let suitcaseVolume = Number(command);
        counter++;

        if (counter % 3 === 0) {
            suitcaseVolume *= 1.1;
        }

        if (capacity < suitcaseVolume) {
            counter--;
            console.log("No more space!");
            console.log(`Statistic: ${counter} suitcases loaded.`);
            return;
        }

        capacity -= suitcaseVolume;
        index++;
    }
}

execute(["550", "100", "252", "72", "End"])

/* 06. Tournament of Christmas */
function christmasTournament(input) {
    let days = Number(input[0]);
    let index = 1;
    let totalMoney = 0;
    let totalWins = 0;
    let totalLosses = 0;

    for (let day = 1; day <= days; day++) {
        let dailyMoney = 0;
        let dailyWins = 0;
        let dailyLosses = 0;

        while (input[index] !== "Finish") {
            let sport = input[index];
            index++;
            let result = input[index];
            index++;

            if (result === "win") {
                dailyMoney += 20;
                dailyWins++;
            } else if (result === "lose") {
                dailyLosses++;
            }
        }

        index++; 

        if (dailyWins > dailyLosses) {
            dailyMoney *= 1.10;
            totalWins++;
        } else {
            totalLosses++;
        }

        totalMoney += dailyMoney;
    }

    if (totalWins > totalLosses) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

execute(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
