function calculate(type, rows, cols) {
    let price
    let totalSeats = rows * cols
    switch (type) {
        case "Premiere":
            price = 12.00
            break
        case "Normal":
            price = 7.50
            break
        case "Discount":
            price = 5.00
            break
    }
    let income = totalSeats * price
    console.log(`${income.toFixed(2)} leva`);
    
}

calculate("Discount", 12, 30)