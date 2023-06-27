function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioSum = 0;
    let apartamentSum = 0;

    let studioPerNight = 0;
    let apartamentPerNight = 0;

    if (month === "May" || month === "October") {
        studioPerNight = 50
        apartamentPerNight = 65

        studioSum = studioPerNight * nightsCount
        apartamentSum = apartamentPerNight * nightsCount

        if(nightsCount > 7 && nightsCount <= 14) {
            studioSum *= 0.95
        } else if (nightsCount > 14) {
            studioSum *= 0.70
        }
    }

    if (month === "June" || month === "September") {
        studioPerNight = 75.20
        apartamentPerNight = 68.70

        studioSum = studioPerNight * nightsCount
        apartamentSum = apartamentPerNight * nightsCount

        if(nightsCount > 14) {
            studioSum *= 0.80
        }
    }

    if(month === "July" || month === "August") {
        studioPerNight = 76
        apartamentPerNight = 77

        studioSum = studioPerNight * nightsCount
        apartamentSum = apartamentPerNight * nightsCount 
    }

    if(nightsCount > 14) {
        apartamentSum *= 0.9;
    }

    console.log(`Apartment: ${apartamentSum.toFixed(2)} lv.`)
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`)
}

hotelRoom(["June",
"14"])

