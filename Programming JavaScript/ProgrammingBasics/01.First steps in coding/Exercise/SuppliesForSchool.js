function calculate(pens, markers, detegrent, discount) {
    let totalPensPrice = pens * 5.80
    let totalMarkersPrice = markers * 7.20
    let totalDetergentPrice = detegrent * 1.20
    let totalPrice = totalPensPrice + totalMarkersPrice + totalDetergentPrice
    let finalPrice = totalPrice - (totalPrice * (discount / 100))
    console.log(finalPrice);
}

calculate(2, 3, 4, 25)