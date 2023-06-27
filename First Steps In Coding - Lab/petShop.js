function zooShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let calculateDogFood = dogFood * 2.50;
    let calculateCatFood = catFood * 4;
    let calculateFood = calculateDogFood + calculateCatFood;
    let res = `${calculateFood} lv.`;
    console.log(res)
}

zooShop(["13", "9"])

