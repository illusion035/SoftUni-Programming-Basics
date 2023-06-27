function operationsBetweenNumbers(input) {
    let numberone = Number(input[0]);
    let numbertwo = Number(input[1]);
    let operator = String(input[2]);

    let result = 0;
    let number = 0;
    let evenOrOdd;

    if (numbertwo === 0) {
        console.log(`Cannot divide ${numberone} by zero`);
        return;
    }

    if (operator === "+") {
        result = numberone + numbertwo
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
    console.log(`${numberone} ${operator} ${numbertwo} = ${result} - ${evenOrOdd}`);
    } else if (operator === "-") {
        result = numberone - numbertwo
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
    console.log(`${numberone} ${operator} ${numbertwo} = ${result} - ${evenOrOdd}`);
    } else if (operator === "*") {
        result = numberone * numbertwo
        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
    console.log(`${numberone} ${operator} ${numbertwo} = ${result} - ${evenOrOdd}`);
    } else if (operator === "/") {
        result = numberone / numbertwo
        console.log(`${numberone} ${operator} ${numbertwo} = ${result.toFixed(2)}`);
    } else if (operator === "%") {
        result = numberone % numbertwo
        console.log(`${numberone} ${operator} ${numbertwo} = ${result}`);
    }
}

operationsBetweenNumbers(["10",
"3",
"%"])






