function calculate(examHour,examMinute, arrivalHour, arrivalMinute){
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    const diff = arrivalTime - examTime;

    if (diff > 0) {
        console.log("Late");
    } else if (diff >= -30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    
    if (diff !== 0) {
        const absDiff = Math.abs(diff);
        const hours = Math.floor(absDiff / 60);
        const minutes = absDiff % 60;

        if (diff < 0) { 
            if (hours === 0) {
                console.log(`${minutes} minutes before the start`);
            } else {
                console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours before the start`);
            }
        } else { 
            if (hours === 0) {
                console.log(`${minutes} minutes after the start`);
            } else {
                console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours after the start`);
            }
        }
    }
}

calculate(9, 30, 9, 50)
