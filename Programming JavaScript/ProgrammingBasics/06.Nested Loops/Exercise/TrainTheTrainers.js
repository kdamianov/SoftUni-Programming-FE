function execute(input) {
    let juryCount = Number(input[0])
    let index = 1
    let presentationsCount = 0
    let allAvgGrades = 0
    while (input[index] !== "Finish") {
        let presentation = input[index]
        presentationsCount++
        index++
        let sumGrades = 0
        for (let i = index; i < index + juryCount; i++) {
            sumGrades += Number(input[i])
        }
        let avgGrade = sumGrades / juryCount
        allAvgGrades += avgGrade
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);
        index += juryCount
    }
    let finalAvgGrade = allAvgGrades / presentationsCount
    console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);
}

execute(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])