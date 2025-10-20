function yardGreeningCalculations(sqMeters) {
    let totalPrice = sqMeters * 7.61
    let discount = sqMeters * 7.61 * 0.18
    let finalPrice = totalPrice - discount
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreeningCalculations(550)