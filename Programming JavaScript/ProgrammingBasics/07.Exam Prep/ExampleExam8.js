// //1. Fruit Market
// function execute(
//   strawberryPrice,
//   bananasQty,
//   orangesQty,
//   raspberriesQty,
//   strawberriesQty
// ) {
//   let raspberryPrice = strawberryPrice / 2;
//   let orangePrice = raspberryPrice * 0.6;
//   let bananaPrice = raspberryPrice * 0.2;

//   let strawberries = strawberriesQty * strawberryPrice;
//   let raspberries = raspberriesQty * raspberryPrice;
//   let oranges = orangesQty * orangePrice;
//   let bananas = bananasQty * bananaPrice;

//   let totalAmount = strawberries + raspberries + oranges + bananas;

//   console.log(totalAmount.toFixed(2));
// }

// execute(48, 10, 3.3, 6.5, 1.7);

// //2. Safari
// function execute(budget, fuel, day) {
//   let fuelMoney = Number(fuel) * 2.1;
//   let totalMoney = fuelMoney + 100;

//   switch (day) {
//     case "Saturday":
//       totalMoney *= 0.9;
//       break;
//     case "Sunday":
//       totalMoney *= 0.8;
//       break;
//   }
//   let moneyDiff = 0;
//   if (totalMoney <= budget) {
//     moneyDiff = budget - totalMoney;
//     console.log(`Safari time! Money left: ${moneyDiff.toFixed(2)} lv. `);
//   } else {
//     moneyDiff = totalMoney - budget;
//     console.log(`Not enough money! Money needed: ${moneyDiff.toFixed(2)} lv.`);
//   }
// }

// execute(1000, 10, 'Sunday');

// //3. Mobile operator
// function execute(years, type, internet, months) {
//   let tax = 0;
//   switch (years) {
//     case "one":
//       if (type === "Small") {
//         tax = 9.98;
//       } else if (type === "Middle") {
//         tax = 18.99;
//       } else if (type === "Large") {
//         tax = 25.98;
//       } else {
//         tax = 35.99;
//       }
//       break;
//     case "two":
//       if (type === "Small") {
//         tax = 8.58;
//       } else if (type === "Middle") {
//         tax = 17.09;
//       } else if (type === "Large") {
//         tax = 23.59;
//       } else {
//         tax = 31.79;
//       }
//       break;
//   }

//   if (internet === "yes") {
//     if (tax <= 10) {
//       tax += 5.5;
//     } else if (tax <= 30) {
//       tax += 4.35;
//     } else {
//       tax += 3.85;
//     }
//   }

//   let ttlAmount = tax * months;
//   if (years === "two") {
//     ttlAmount -= ttlAmount * 0.0375;
//   }

//   console.log(`${ttlAmount.toFixed(2)} lv.`);
// }

// execute("two", "Large", "no", 10);

// //5. Tourist Shop
// function execute(input) {
//   let budget = Number(input[0]);
//   let index = 1;
//   let command = input[index];
//   let productCounter = 0;
//   let sumProducts = 0;
//   while (command !== "Stop") {
//     let product = input[index++];

//     let productPrice = Number(input[index]);
//     productCounter++;
//     if (productCounter % 3 === 0) {
//       productPrice = productPrice / 2;
//     }
//     sumProducts += productPrice;
//     budget = budget - productPrice;
//     if (budget < 0) {
//       console.log("You don't have enough money!");
//       console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
//       break;
//     }

//     index++;
//     command = input[index];
//   }
//   if (command === "Stop") {
//     console.log(
//       `You bought ${productCounter} products for ${sumProducts.toFixed(
//         2
//       )} leva.`
//     );
//   }
// }

// execute([
//   "153.20",
//   "Backpack",
//   "25.20",
//   "Shoes",
//   "54",
//   "Sunglasses",
//   "30 ",
//   "Stop",
// ]);

//6. Vet Parking
function execute(days, hours) {
  let ttlPrice = 0;
  for (let day = 1; day <= days; day++) {
    let pricePerHr = 0;
    let dailyPrice = 0;
    for (let hour = 1; hour <= hours; hour++) {
      if (day % 2 === 0 && hour % 2 !== 0) {
        pricePerHr = 2.5;
      } else if (day % 2 !== 0 && hour % 2 === 0) {
        pricePerHr = 1.25;
      } else {
        pricePerHr = 1;
      }
      dailyPrice += pricePerHr;
    }
    ttlPrice += dailyPrice;
    console.log(`Day: ${day} - ${dailyPrice.toFixed(2)} leva`);
  }
  console.log(`Total: ${ttlPrice} leva`);
}

execute(2, 5);
