function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherscount = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        price = 3000
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200
    } else if (season === "Winter") {
        price = 2600
    }

    if (fisherscount <= 6) {
        price *= 0.90
    } else if (fisherscount >= 7 && fisherscount <= 11) {
        price *= 0.85
    } else if (fisherscount > 12) {
        price *= 0.75
    }

    if (season !== "Autumn" && fisherscount % 2 === 0) {
        price *= 0.95
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(price - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000",
"Winter",
"50"])


