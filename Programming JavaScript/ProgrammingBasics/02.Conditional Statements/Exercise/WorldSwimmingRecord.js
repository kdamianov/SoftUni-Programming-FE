function calculate(recordInSec, distanceInMeters, timeForMeter) {
    let neededSeconds = distanceInMeters * timeForMeter
    let delayTime = Math.floor(distanceInMeters / 15) * 12.5
    let totalSeconds = neededSeconds + delayTime

    if (totalSeconds < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSeconds - recordInSec).toFixed(2)} seconds slower.`);
    }
}

calculate(55555.67, 3017, 5.03)