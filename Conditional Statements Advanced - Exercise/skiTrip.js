function skyTrip(input) {
    let daysStay = Number(input[0]);
    let type = input[1];
    let feedback = input[2];

    let nights = daysStay - 1

    let roomPerPersonPrice = 18
    let apartamentPrice = 25
    let presidentApartamentPrice = 35

    let sum = 0;

    if (type === "room for one person") {
        sum = nights * roomPerPersonPrice
    } else if (type === "apartment") {
        sum = nights * apartamentPrice

        if (daysStay < 10) {
            sum *= 0.7
        } else if (daysStay >= 10 && daysStay <= 15) {
            sum *= 0.65
        } else if (daysStay > 15) {
            sum *= 0.5
        }
    } else if (type === "president apartment") {
        sum = nights * presidentApartamentPrice

        if (daysStay < 10) {
            sum *= 0.9
        } else if (daysStay >= 10 && daysStay <= 15) {
            sum *= 0.85
        } else if (daysStay > 15) {
            sum *= 0.8
        }
    }

    if (feedback === "positive") {
        sum *= 1.25
    } else if (feedback === "negative") {
        sum *= 0.9
    }

    console.log(`${sum.toFixed(2)}`);

}

skyTrip(["30",
"president apartment",
"negative"])