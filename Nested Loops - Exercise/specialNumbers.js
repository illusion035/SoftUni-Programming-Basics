function specialNumbers(input) {
    let number = Number(input[0]);
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let i2 = 1; i2 <= 9; i2++) {
            for (let i3 = 1; i3 <= 9; i3++) {
                for (let i4 = 1; i4 <= 9; i4++) {
                    let isSpecial = number % i === 0 && number % i2 === 0 && number % i3 === 0 && number % i4 === 0;
                    if (isSpecial) {
                        result += `${i}${i2}${i3}${i4} `;
                    }
                }
            }
        }
    }

    console.log(result);

}

specialNumbers(["3"])