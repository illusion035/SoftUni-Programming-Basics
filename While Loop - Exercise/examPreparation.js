function examPreparation(params) {
    let badGrades = Number(params.shift());

    let badGradesCount = 0;
    let goodGradesCount = 0;
    let totalGrades = 0;
    let lastEvent = "";

    while (true) {
        let event = String(params.shift());
        if (event === "Enough") {
            break;
        }
        let gradesCount = Number(params.shift());
        if (gradesCount <= 4) {
            badGradesCount++;
            totalGrades += gradesCount;
        } else {
            goodGradesCount++;
            totalGrades += gradesCount;
        }
        if (badGradesCount === badGrades) {
            console.log(`You need a break, ${badGradesCount} poor grades.`);
            return;
        }
        lastEvent = event;
    }
    let totalGradesSum = badGradesCount + goodGradesCount;
    let avgGradesSum = totalGrades / totalGradesSum;

    console.log(`Average score: ${avgGradesSum.toFixed(2)}`);
    console.log(`Number of problems: ${totalGradesSum}`);
    console.log(`Last problem: ${lastEvent}`);
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
