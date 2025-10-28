function execute(input) {
    let studentTicketCount = 0
    let kidTicketCount = 0
    let standartTicketCount = 0
    let index = 0
    let command = input[index]
    while (command !== 'Finish') {
        let movieTitle = command
        index++
        let ttlSeats = Number(input[index])
        let occupiedSeats = 0
        index++

        let secondCommand = input[index]
        while (secondCommand !== "End") {
            let ticketType = secondCommand
            switch (ticketType) {
                case "standard":
                    standartTicketCount++
                    break
                case "student":
                    studentTicketCount++
                    break
                case "kid":
                    kidTicketCount++
                    break
            }
            occupiedSeats++
            if (occupiedSeats === ttlSeats) {
                break
            }

            index++
            secondCommand = input[index]
        }
        let seatsOccupancy = occupiedSeats / ttlSeats * 100
        console.log(`${movieTitle} - ${seatsOccupancy.toFixed(2)}% full.`);

        index++
        command = input[index]
    }
    let ttlTicketCount = studentTicketCount + standartTicketCount + kidTicketCount
    console.log(`Total tickets: ${ttlTicketCount}`);
    let studentTicketsPerc = studentTicketCount / ttlTicketCount * 100
    let standartTicketsPerc = standartTicketCount / ttlTicketCount * 100
    let kidsTicketsPerc = kidTicketCount / ttlTicketCount * 100
    console.log(`${studentTicketsPerc.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPerc.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPerc.toFixed(2)}% kids tickets.`);
}

execute(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])