function execute(input) {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i <= input[0]; i++) {
        if (input[i] < 200) p1++
        else if (input[i] < 400) p2++
        else if (input[i] < 600) p3++
        else if (input[i] < 800) p4++
        else p5++
    }

    p1 = (p1 / input[0] * 100).toFixed(2) + "%";
    p2 = (p2 / input[0] * 100).toFixed(2) + "%";
    p3 = (p3 / input[0] * 100).toFixed(2) + "%";
    p4 = (p4 / input[0] * 100).toFixed(2) + "%";
    p5 = (p5 / input[0] * 100).toFixed(2) + "%";

    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
    console.log(p5);
}

execute([7, 800, 801, 250, 199, 399, 599, 799])