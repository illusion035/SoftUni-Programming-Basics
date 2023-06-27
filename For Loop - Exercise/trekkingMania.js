function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupk2 = 0;
    let groupEverest = 0;

    let allPeople = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let currentNumber = Number(input[i]);
        
        if (currentNumber <= 5) {
            groupMusala+=currentNumber;
        } else if (currentNumber >= 6 && currentNumber <= 12) {
            groupMonblan+=currentNumber;
        } else if (currentNumber >= 13 && currentNumber <= 25) {
            groupKilimandjaro+=currentNumber;
        } else if (currentNumber >= 26 && currentNumber <= 40) {
            groupk2+=currentNumber;
        } else if (currentNumber >= 41) {
            groupEverest+=currentNumber;
        }
        allPeople+=currentNumber;
    }

    let musalaPercent = groupMusala/allPeople*100;
    let monblanPercent = groupMonblan/allPeople*100;
    let kilimandjaroPercent = groupKilimandjaro/allPeople*100;
    let k2Percent = groupk2/allPeople*100;
    let everestPercent = groupEverest/allPeople*100;

    console.log(`${musalaPercent.toFixed(2)}%`)
    console.log(`${monblanPercent.toFixed(2)}%`)
    console.log(`${kilimandjaroPercent.toFixed(2)}%`)
    console.log(`${k2Percent.toFixed(2)}%`)
    console.log(`${everestPercent.toFixed(2)}%`)
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
