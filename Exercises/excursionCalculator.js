function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case "spring":
            if (peopleCount <= 5) {
                price = peopleCount * 50.00;
            } else if (peopleCount > 5) {
                price = peopleCount * 48.00;
            } break;
        case "summer":
            if (peopleCount <= 5) {
                price = peopleCount * 48.50;
            } else if (peopleCount > 5) {
                price = peopleCount * 45.00;
            }
            price *= 0.85; 
            break;
        case "autumn":
            if (peopleCount <= 5) {
                price = peopleCount * 60.00;
            } else if (peopleCount > 5) {
                price = peopleCount * 49.50;
            } break;
        case "winter":
            if (peopleCount <= 5) {
                price = peopleCount * 86.00;
            } else if (peopleCount > 5) {
                price = peopleCount * 85.00;
            }
            price = price + (price * 0.08)
            break;
    }

    console.log(`${price.toFixed(2)} leva.`);

}

excursionCalculator(["20", "winter"])