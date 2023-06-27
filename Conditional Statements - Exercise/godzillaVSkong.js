function godzillaVsKong(input) {
    let filmBudget = Number(input[0])
    let statistCount = Number(input[1])
    let clothesPerStatist = Number(input[2])
    let discount = 0

    decorPrice = filmBudget * 0.1
    clothesPrice = statistCount * clothesPerStatist

    if (statistCount > 150)
    {
        discount = clothesPrice * 0.1
    }

    let totalPriceForClothes = clothesPrice - discount
    let totalPrice = decorPrice + totalPriceForClothes
    let totalPriceForAll = filmBudget - totalPrice

    if (totalPrice > filmBudget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${Math.abs(totalPriceForAll).toFixed(2)} leva more.`)
    }
    else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${totalPriceForAll.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["15437.62",
"186",
"57.99"])



