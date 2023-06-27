function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceForNylon = (nylon + 2) * 1.50;
    let priceForPaint = (paint * 1.1) * 14.50;
    let pricePaintThinner = paintThinner * 5.00;

    let totalPriceForStuff = priceForNylon + priceForPaint + pricePaintThinner + 0.40;

    let priceForWorkForOneHour = totalPriceForStuff * 0.30;

    let totalPriceForWork = priceForWorkForOneHour * hours;

    let total = totalPriceForStuff + totalPriceForWork;

    console.log(total);
}

repainting(["5", "10", "10", "1"])