function sumSeconds(timeA, timeB, timeC) {
    let totalTime = timeA + timeB + timeC
    let min = Math.floor(totalTime / 60)
    let sec = totalTime % 60

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}

sumSeconds(50, 50, 49)