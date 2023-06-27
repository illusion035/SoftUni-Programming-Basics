function exam(input) {
    let studentsCount = Number(input[0]);
    let topStudents = 0;
    let between4and499 = 0;
    let between3and399 = 0;
    let fail = 0;
    let averageGrade = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let grade = Number(input[i]);

        if (grade >= 5.00) {
            topStudents++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            between4and499++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            between3and399++;
        } else {
            fail++;
        }

        averageGrade += grade;
    }

    let topStudentsPercentage = (topStudents / studentsCount) * 100;
    let between4and499Percentage = (between4and499 / studentsCount) * 100;
    let between3and399Percentage = (between3and399 / studentsCount) * 100;
    let failPercentage = (fail / studentsCount) * 100;
    averageGrade = averageGrade / studentsCount;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between4and499Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between3and399Percentage.toFixed(2)}%`);
    console.log(`Fail: ${failPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

exam([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
]);
