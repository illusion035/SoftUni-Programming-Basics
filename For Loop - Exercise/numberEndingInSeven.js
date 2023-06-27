function numberEndingInSeven(input) {
    let num = Number(input[0]);

    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

numberEndingInSeven(["5"])