function calclulate(length, width, height, percent) {
    let volume = length * width * height
    let volInLitres = volume / 1000
    let neededLitres = volInLitres * (1 - percent / 100)
    console.log(neededLitres);
}

calclulate(85, 75, 47, 17)