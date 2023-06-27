function hairSalon(input) {
    let target = Number(input.shift());

    let command = input.shift();
    let earnedMoney = 0;

    while (command !== "closed") {
        let service = command;

        if (service === "haircut") {
            let haircutType = input.shift();
            let price = 0;

            switch (haircutType) {
                case "mens":
                    price = 15;
                    break;
                case "ladies":
                    price = 20;
                    break;
                case "kids":
                    price = 10;
                    break;
            }

            earnedMoney += price;
        } else if (service === "color") {
            let colorType = input.shift();
            let price = 0;

            switch (colorType) {
                case "touch up":
                    price = 20;
                    break;
                case "full color":
                    price = 30;
                    break;
            }

            earnedMoney += price;
        }

        if (earnedMoney >= target) {
            break;
        }

        command = input.shift();
    }

    if (earnedMoney >= target) {
        console.log("You have reached your target for the day!");
    } else {
        let moneyNeeded = target - earnedMoney;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
    }

    console.log(`Earned money: ${earnedMoney}lv.`);
}

hairSalon([
    "300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"
]);