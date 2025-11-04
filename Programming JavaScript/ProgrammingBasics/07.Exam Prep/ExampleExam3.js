/* 01. Easter Lunch */
function execute(countCozunaks, countEggs, countCookies) {
    let priceCozunak = 3.20;
    let priceEggs = 4.35;
    let priceCookies = 5.40;
    let dyePerEgg = 0.15;

    let totalCozunaks = countCozunaks * priceCozunak;
    let totalEggs = countEggs * priceEggs;
    let totalCookies = countCookies * priceCookies;
    let totalDye = countEggs * 12 * dyePerEgg;

    let total = totalCozunaks + totalEggs + totalCookies + totalDye;

    console.log(total.toFixed(2));
}

execute(3, 2, 3);

/* 01. Easter Bakery */
function execute(flourPricePerKg, flourKg, sugarKg, eggCartons, yeastPacks) {
    let sugarPricePerKg = flourPricePerKg * 0.75;
    let eggsPricePerCarton = flourPricePerKg * 1.10;
    let yeastPricePerPack = sugarPricePerKg * 0.20;

    let totalFlour = flourPricePerKg * flourKg;
    let totalSugar = sugarPricePerKg * sugarKg;
    let totalEggs = eggsPricePerCarton * eggCartons;
    let totalYeast = yeastPricePerPack * yeastPacks;

    let total = totalFlour + totalSugar + totalEggs + totalYeast;

    console.log(total.toFixed(2));
}

execute(["50", "10", "3.5", "6", "1"]);

/* 02. Easter Party */
function easterParty(guests, pricePerGuest, budget) {
    if (guests >= 10 && guests <= 15) {
        pricePerGuest *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        pricePerGuest *= 0.80;
    } else if (guests > 20) {
        pricePerGuest *= 0.75;
    }

    let cakePrice = budget * 0.10;
    let totalCost = guests * pricePerGuest + cakePrice;

    if (budget >= totalCost) {
        let moneyLeft = budget - totalCost;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalCost - budget;
        console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

easterParty(18, 30, 450);

/* 02. Easter Guests */
function execute(guests, budget) {
    let breadPrice = 4.00;
    let eggPrice = 0.45;

    let neededBread = Math.ceil(guests / 3);
    let neededEggs = guests * 2;

    let totalCost = neededBread * breadPrice + neededEggs * eggPrice;

    if (budget >= totalCost) {
        let moneyLeft = budget - totalCost;
        console.log(`Lyubo bought ${neededBread} Easter bread and ${neededEggs} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        let moneyNeeded = totalCost - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }
}

execute(9, 100);

/* 03. Easter Trip */
function execute(destination, dates, nights) {
    let pricePerNight = 0;

    if (destination === "France") {
        if (dates === "21-23") pricePerNight = 30;
        else if (dates === "24-27") pricePerNight = 35;
        else if (dates === "28-31") pricePerNight = 40;
    } else if (destination === "Italy") {
        if (dates === "21-23") pricePerNight = 28;
        else if (dates === "24-27") pricePerNight = 32;
        else if (dates === "28-31") pricePerNight = 39;
    } else if (destination === "Germany") {
        if (dates === "21-23") pricePerNight = 32;
        else if (dates === "24-27") pricePerNight = 37;
        else if (dates === "28-31") pricePerNight = 43;
    }

    let totalCost = nights * pricePerNight;

    console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);
}

execute("Germany", "24-27", 5);

/* 03. Painting Eggs */
function execute(size, color, batches) {
    let pricePerBatch = 0;

    if (size === "Large") {
        if (color === "Red") pricePerBatch = 16;
        else if (color === "Green") pricePerBatch = 12;
        else if (color === "Yellow") pricePerBatch = 9;
    } else if (size === "Medium") {
        if (color === "Red") pricePerBatch = 13;
        else if (color === "Green") pricePerBatch = 9;
        else if (color === "Yellow") pricePerBatch = 7;
    } else if (size === "Small") {
        if (color === "Red") pricePerBatch = 9;
        else if (color === "Green") pricePerBatch = 8;
        else if (color === "Yellow") pricePerBatch = 5;
    }

    let totalIncome = pricePerBatch * batches;

    let netProfit = totalIncome * 0.65;

    console.log(`${netProfit.toFixed(2)} leva.`);
}

execute(["Large", "Red", "7"]);

/* 04. Easter Eggs Battle */
function execute(input) {
    let eggsPlayerOne = Number(input[0]);
    let eggsPlayerTwo = Number(input[1]);
    let index = 2;
    let command = input[index];

    while (command !== "End") {
        if (command === "one") {
            eggsPlayerTwo--;
        } else if (command === "two") {
            eggsPlayerOne--;
        }
        
        if (eggsPlayerOne === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`);
            return;
        } else if (eggsPlayerTwo === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`);
            return;
        }

        index++;
        command = input[index];
    }
    
    console.log(`Player one has ${eggsPlayerOne} eggs left.`);
    console.log(`Player two has ${eggsPlayerTwo} eggs left.`);
}

execute(["5", "4", "one", "two", "one", "two", "two", "End "])

/* 04. Easter Shop */
function execute(input) {
    let eggsInStore = Number(input[0]);
    let index = 1;
    let soldEggs = 0;

    while (input[index] !== "Close") {
        let command = input[index];
        let eggsCount = Number(input[index + 1]);

        if (command === "Buy") {
            if (eggsCount > eggsInStore) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${eggsInStore}.`);
                return;
            } else {
                eggsInStore -= eggsCount;
                soldEggs += eggsCount;
            }
        } else if (command === "Fill") {
            eggsInStore += eggsCount;
        }

        index += 2;
    }

    console.log("Store is closed!");
    console.log(`${soldEggs} eggs sold.`);
}

execute(["13", "Buy", "8", "Fill", "3", "Buy", "10", "Close"]);

/* 05. Easter Eggs */
function execute(input) {
    let eggsCount = Number(input[0]);
    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    for (let i = 1; i <= eggsCount; i++) {
        let color = input[i];

        if (color === "red") {
            redCount++;
        } else if (color === "orange") {
            orangeCount++;
        } else if (color === "blue") {
            blueCount++;
        } else if (color === "green") {
            greenCount++;
        }
    }
    
    let maxEggs = redCount;
    let maxColor = "red";

    if (orangeCount > maxEggs) {
        maxEggs = orangeCount;
        maxColor = "orange";
    }
    if (blueCount > maxEggs) {
        maxEggs = blueCount;
        maxColor = "blue";
    }
    if (greenCount > maxEggs) {
        maxEggs = greenCount;
        maxColor = "green";
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}

execute(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);

/* 05. Easter Bake */
function execute(input) {
    let countCozonacs = Number(input[0]);

    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    let index = 1;

    for (let i = 0; i < countCozonacs; i++) {
        let sugar = Number(input[index]);
        let flour = Number(input[index + 1]);
        index += 2;

        totalSugar += sugar;
        totalFlour += flour;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        if (flour > maxFlour) {
            maxFlour = flour;
        }
    }
    
    let sugarPacks = Math.ceil(totalSugar / 950);
    let flourPacks = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

execute(["3", "400", "350", "250", "300", "450", "380"]);

/* 06. Easter Competition */
function execute(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let bestBaker = "";
    let bestPoints = 0;

    for (let i = 0; i < n; i++) {
        let bakerName = input[index];
        index++;

        let currentPoints = 0;

        while (input[index] !== "Stop") {
            let points = Number(input[index]);
            currentPoints += points;
            index++;
        }

        console.log(`${bakerName} has ${currentPoints} points.`);
        index++;

        if (currentPoints > bestPoints) {
            bestPoints = currentPoints;
            bestBaker = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
    }

    console.log(`${bestBaker} won competition with ${bestPoints} points!`);
}

execute(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"])

/* 06. Easter Decoration */
function execute(input) {
    let index = 0;
    let clientsCount = Number(input[index]);
    index++;

    let totalSum = 0;

    for (let i = 0; i < clientsCount; i++) {
        let command = input[index];
        index++;

        let currentBill = 0;
        let itemsCount = 0;

        while (command !== "Finish") {
            if (command === "basket") {
                currentBill += 1.50;
            } else if (command === "wreath") {
                currentBill += 3.80;
            } else if (command === "chocolate bunny") {
                currentBill += 7.00;
            }
            itemsCount++;

            command = input[index];
            index++;
        }
        
        if (itemsCount % 2 === 0) {
            currentBill *= 0.80;
        }

        console.log(`You purchased ${itemsCount} items for ${currentBill.toFixed(2)} leva.`);
        totalSum += currentBill;
    }
    
    let averageBill = totalSum / clientsCount;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}

execute(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])

