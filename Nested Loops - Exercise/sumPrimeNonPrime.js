function sumPrimeNonPrime(input) {
    let sumSimpleNums = 0;
    let complexNums = 0;
    let index = 0;
    let currentInput = input[index];
    let isComplex = false;

    while (currentInput !== "stop") {
        let number = Number(currentInput);

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            currentInput = input[index];
            continue;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isComplex = true;
                    break;
                }
            }
        }

        if (isComplex) {
            complexNums += number;
            isComplex = false;
        } else {
            sumSimpleNums += number;
        }

        index++;
        currentInput = input[index];

    }

    console.log(`Sum of all prime numbers is: ${sumSimpleNums}`);
    console.log(`Sum of all non prime numbers is: ${complexNums}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])