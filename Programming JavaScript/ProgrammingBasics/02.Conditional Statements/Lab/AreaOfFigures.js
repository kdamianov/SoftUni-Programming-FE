function calculateArea(type, first, second) {
    let result = 0
    if (type === 'square') {
        result = first * first
    } else if (type === 'rectangle') {
        result = first * second
    } else if (type === 'circle') {
        result = Math.PI * first * first
    } else if (type === 'triangle') {
        result = first * second /2
    }
    console.log(result.toFixed(3));
}

calculateArea("circle", 6)