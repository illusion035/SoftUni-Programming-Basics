function vacation(input) {
    let countPages = Number(input[0]);
    let pages = Number(input[1]);
    let countDays = Number(input[2]);

    let hoursCount = countPages / pages
    let hoursPerDay = hoursCount / countDays

    console.log(hoursPerDay)
}

vacation(["212", "20", "2"])