function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let journey;
    let des;
    let price = 0;

    if (season === "summer") {
        journey = "Camp";
    } else if (season === "winter") {
        journey = "Hotel";
    }

    if (budget <= 100 && season === "summer") {
        des = "Bulgaria";
        price = budget * 0.3
    } else if (budget <= 100 && season === "winter") {
        des = "Bulgaria";
        price = budget * 0.7
    } else if (budget <= 1000 && season === "summer") {
        des = "Balkans";
        price = budget * 0.4
    } else if (budget <= 1000 && season === "winter") {
        des = "Balkans";
        price = budget * 0.8
    } else if (budget > 1000) {
        des = "Europe";
        journey = "Hotel";
        price = budget * 0.9
    }

    console.log(`Somewhere in ${des}`);
    console.log(`${journey} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"])