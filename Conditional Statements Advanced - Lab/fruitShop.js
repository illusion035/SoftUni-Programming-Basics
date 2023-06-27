function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        banana = 2.50
        apple = 1.20
        orange = 0.85
        grapefruit = 1.45
        kiwi = 2.70
        pineapple = 5.50
        grapes = 3.85
        
        switch(fruit) {
            case "banana": console.log((banana * quantity).toFixed(2)); break;
            case "apple": console.log((apple * quantity).toFixed(2)); break;
            case "orange": console.log((orange * quantity).toFixed(2)); break;
            case "grapefruit": console.log((grapefruit * quantity).toFixed(2)); break;
            case "kiwi": console.log((kiwi * quantity).toFixed(2)); break;
            case "pineapple": console.log((pineapple * quantity).toFixed(2)); break;
            case "grapes": console.log((grapes * quantity).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else if (day === "Sunday" || day === "Saturday") {
        banana = 2.70
        apple = 1.25
        orange = 0.90
        grapefruit = 1.60
        kiwi = 3.00
        pineapple = 5.60
        grapes = 4.20

        switch(fruit) {
            case "banana": console.log((banana * quantity).toFixed(2)); break;
            case "apple": console.log((apple * quantity).toFixed(2)); break;
            case "orange": console.log((orange * quantity).toFixed(2)); break;
            case "grapefruit": console.log((grapefruit * quantity).toFixed(2)); break;
            case "kiwi": console.log((kiwi * quantity).toFixed(2)); break;
            case "pineapple": console.log((pineapple * quantity).toFixed(2)); break;
            case "grapes": console.log((grapes * quantity).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else {
        console.log("error")
    }
}

fruitShop(["apple",
"Sunday",
"2"])
