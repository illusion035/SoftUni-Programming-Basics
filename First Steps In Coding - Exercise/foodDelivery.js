function foodDelivery(input) {
    let chickenMenusCount = Number(input[0]);
    let fishMenusCount = Number(input[1]);
    let vegMenusCount = Number(input[2]);

    let chickenMenuTotal = chickenMenusCount * 10.35;
    let fishMenuTotal = fishMenusCount * 12.40;
    let vegMenuTotal = vegMenusCount * 8.15;

    let MenusTotal = chickenMenuTotal + fishMenuTotal + vegMenuTotal

    let desert = (20 / 100) * MenusTotal // 20%

    let Delivery = 2.50

    let total = MenusTotal + desert + Delivery

    console.log(total)
}

foodDelivery(["9", "2", "6"])