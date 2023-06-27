function basketballEquip(input) {
    let trenForYear = Number(input[0]);

    let basketSneakers = trenForYear - (40 / 100) * trenForYear
    let basketTeam = basketSneakers - (20 / 100) * basketSneakers
    let basketBall = basketTeam / 4
    let basketAccs = basketBall / 5

    let totalPrice = trenForYear + basketSneakers + basketTeam + basketBall + basketAccs
    console.log(totalPrice);
}

basketballEquip(["365"]);