function execute() {
    for (let hr = 0; hr <= 23; hr++) {
        for (let min = 0; min <= 59; min++) {
            console.log(`${hr}:${min}`);
        }
    }
}

execute()