function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    let roses = 5.0;
    let dahlias = 3.8;
    let tulips = 2.8;
    let narcissus = 3.0;
    let gladiolus = 2.5;

    switch (flowersType) {
        case "Roses":
            if (flowersCount > 80) {
                totalPrice = roses * flowersCount;
                totalPrice *= 0.9;
            } else {
                totalPrice = roses * flowersCount;
            }
            break;
        case "Dahlias":
            if (flowersCount > 90) {
                totalPrice = dahlias * flowersCount;
                totalPrice *= 0.85;
            } else {
                totalPrice = dahlias * flowersCount;
            }
            break;
        case "Tulips":
            if (flowersCount > 80) {
                totalPrice = tulips * flowersCount;
                totalPrice *= 0.85;
            } else {
                totalPrice = tulips * flowersCount;
            }
            break;
        case "Narcissus":
            if (flowersCount < 120) {
                totalPrice = narcissus * flowersCount;
                totalPrice *= 1.15;
            } else {
                totalPrice = narcissus * flowersCount;
            }
            break;
        case "Gladiolus":
            if (flowersCount < 80) {
                totalPrice = gladiolus * flowersCount;
                totalPrice *= 1.20;
            } else {
                totalPrice = gladiolus * flowersCount;
            }
            break;
    }

    if (totalPrice > budget) {
        console.log(`Not enough money, you need ${Math.abs(budget - totalPrice).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${Math.abs(totalPrice - budget).toFixed(2)} leva left.`);
    }
}

newHouse(["Tulips",
"88",
"260"])
