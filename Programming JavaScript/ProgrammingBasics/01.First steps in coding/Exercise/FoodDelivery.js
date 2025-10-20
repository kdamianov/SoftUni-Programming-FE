function calculate(chickenMenus, fishMenus, vegMenus){
    let chickenMenusPrice = chickenMenus * 10.35
    let fishMenusPrice = fishMenus * 12.40
    let vegMenusPrice = vegMenus * 8.15
    let totalMenusPrice = chickenMenusPrice + fishMenusPrice + vegMenusPrice
    let dessertPrice = totalMenusPrice * 0.20
    let totalPrice = totalMenusPrice + dessertPrice + 2.50
    console.log(totalPrice);
}

calculate(2,4,3)