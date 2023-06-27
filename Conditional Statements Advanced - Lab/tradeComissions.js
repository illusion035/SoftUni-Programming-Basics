function tradeComissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.05
            console.log(sales.toFixed(2))
        }
        else if (sales > 500 && sales <= 1000) {
            sales = sales * 0.07
            console.log(sales.toFixed(2))
        }
        else if (sales > 1000 && sales <= 10000) {
            sales = sales * 0.08
            console.log(sales.toFixed(2))
        }
        else if (sales > 10000) {
            sales = sales * 0.12
            console.log(sales.toFixed(2))
        }
        else {
            console.log("error")
        }
    }
    else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.045
            console.log(sales.toFixed(2))
        }
        else if (sales > 500 && sales <= 1000) {
            sales = sales * 0.075
            console.log(sales.toFixed(2))
        }
        else if (sales > 1000 && sales <= 10000) {
            sales = sales * 0.10
            console.log(sales.toFixed(2))
        }
        else if (sales > 10000) {
            sales = sales * 0.13
            console.log(sales.toFixed(2))
        }
        else {
            console.log("error")
        }
    }
    else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.055
            console.log(sales.toFixed(2))
        }
        else if (sales > 500 && sales <= 1000) {
            sales = sales * 0.08
            console.log(sales.toFixed(2))
        }
        else if (sales > 1000 && sales <= 10000) {
            sales = sales * 0.12
            console.log(sales.toFixed(2))
        }
        else if (sales > 10000) {
            sales = sales * 0.145
            console.log(sales.toFixed(2))
        }
        else {
            console.log("error")
        }
    }
    else {
        console.log("error")
    }
}

tradeComissions(["Sofia",
"-1500"])
