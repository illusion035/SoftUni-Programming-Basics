function footballKit(input) {
    let tshirtPrice = Number(input[0]);
    let neededPriceForBall = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let budsPrice = (tshirtPrice + shortsPrice) * 2

    let totalPrice = tshirtPrice + shortsPrice + socksPrice + budsPrice
    let totalPriceWithPercent = totalPrice - (totalPrice * 0.15)

    if (totalPriceWithPercent > neededPriceForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`)
        console.log(`His sum is ${totalPriceWithPercent.toFixed(2)} lv.`)
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`)
        console.log(`He needs ${(neededPriceForBall - totalPriceWithPercent).toFixed(2)} lv. more.`)
    }
}

footballKit(["55", "310"])