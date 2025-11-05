/* 01. Oscars Ceremony */
function execute(hallRent) {
    let statuettes = hallRent * 0.70;
    let catering = statuettes * 0.85;
    let sound = catering / 2;

    let total = hallRent + statuettes + catering + sound;

    console.log(total.toFixed(2));
}

execute(3500); 

/* 02. Godzilla vs. Kong */
function execute(budget, extrasCount, clothesPrice) {
    let decorPrice = budget * 0.10;
    
    if (extrasCount > 150) {
        clothesPrice *= 0.90;
    }

    let totalClothesPrice = extrasCount * clothesPrice;
    let totalExpenses = decorPrice + totalClothesPrice;

    if (totalExpenses > budget) {
        let needed = totalExpenses - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else {
        let left = budget - totalExpenses;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }
}

execute(20000, 120, 55.5);

/* 03. Oscars week in cinema */
function execute(movie, hallType, ticketsCount) {
    let price = 0;

    switch (movie) {
        case "A Star Is Born":
            if (hallType === "normal") price = 7.50;
            else if (hallType === "luxury") price = 10.50;
            else if (hallType === "ultra luxury") price = 13.50;
            break;

        case "Bohemian Rhapsody":
            if (hallType === "normal") price = 7.35;
            else if (hallType === "luxury") price = 9.45;
            else if (hallType === "ultra luxury") price = 12.75;
            break;

        case "Green Book":
            if (hallType === "normal") price = 8.15;
            else if (hallType === "luxury") price = 10.25;
            else if (hallType === "ultra luxury") price = 13.25;
            break;

        case "The Favourite":
            if (hallType === "normal") price = 8.75;
            else if (hallType === "luxury") price = 11.55;
            else if (hallType === "ultra luxury") price = 13.95;
            break;
    }

    let income = price * ticketsCount;

    console.log(`${movie} -> ${income.toFixed(2)} lv.`);
}

execute("A Star Is Born", "luxury", 42);

/* 04. Cinema Voucher */
function execute(input) {
    let voucherValue = Number(input[0]);
    let index = 1;
    let command = input[index];

    let ticketsCount = 0;
    let otherPurchasesCount = 0;

    while (command !== "End") {
        let purchase = command;
        let price = 0;

        if (purchase.length > 8) {
            price = purchase.charCodeAt(0) + purchase.charCodeAt(1);
        } else {
            price = purchase.charCodeAt(0);
        }
        
        if (price > voucherValue) {
            break;
        }

        voucherValue -= price;

        if (purchase.length > 8) {
            ticketsCount++;
        } else {
            otherPurchasesCount++;
        }

        index++;
        command = input[index];
    }

    console.log(ticketsCount);
    console.log(otherPurchasesCount);
}

execute(["300", "Captain Marvel", "popcorn", "Pepsi", "End"]);

/* 05. Movie Ratings */
function execute(input) {
    let movieCount = Number(input[0]);
    let index = 1;

    let highestRating = Number.MIN_VALUE;
    let lowestRating = Number.MAX_VALUE;
    let highestMovie = "";
    let lowestMovie = "";
    let totalRating = 0;

    for (let i = 0; i < movieCount; i++) {
        let movieName = input[index++];
        let rating = Number(input[index++]);

        totalRating += rating;

        if (rating > highestRating) {
            highestRating = rating;
            highestMovie = movieName;
        }

        if (rating < lowestRating) {
            lowestRating = rating;
            lowestMovie = movieName;
        }
    }

    let averageRating = totalRating / movieCount;

    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

execute(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);

/* 06. Cinema Tickets */
function cinemaTickets(input) {
    let index = 0;
    let command = input[index];

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;

        let soldTickets = 0;
        let ticketType = input[index];
        
        while (ticketType !== "End" && soldTickets < freeSeats) {
            soldTickets++;

            if (ticketType === "student") studentTickets++;
            else if (ticketType === "standard") standardTickets++;
            else if (ticketType === "kid") kidTickets++;

            index++;
            ticketType = input[index];
        }
        
        let hallFullness = (soldTickets / freeSeats) * 100;
        console.log(`${movieName} - ${hallFullness.toFixed(2)}% full.`);

        totalTickets += soldTickets;
        
        if (ticketType === "End") {
            index++;
        }

        command = input[index];
    }

    console.log(`Total tickets: ${totalTickets}`);
    
    if (totalTickets === 0) {
        console.log(`0.00% student tickets.`);
        console.log(`0.00% standard tickets.`);
        console.log(`0.00% kids tickets.`);
    } else {
        console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
    }
}

execute([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
]);
