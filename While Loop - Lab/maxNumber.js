function maxNumber(input) {
    let index = 0;
    let command = input[index];

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNum < num) {
            maxNum = num;
        }

        command = input[index];
        index++;
    }

    console.log(maxNum);

}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])