function cinema(input) {
    let projectType = input[0];
    let rowCount = Number(input[1]);
    let columnsCount = Number(input[2]);

    let income = 0;

    if (projectType === "Premiere") {
        income = rowCount * columnsCount * 12.0
    } else if (projectType === "Normal") {
        income = rowCount * columnsCount * 7.50
    } else if (projectType === "Discount") {
        income = rowCount * columnsCount * 5.00
    }

    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Normal",
"21",
"13"])


