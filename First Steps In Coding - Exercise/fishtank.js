function fishtank(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let pr = Number(input[3]);

    let cubicCm = l * w * h;
    let cubicM = cubicCm / 1000;
    let total = cubicM * (1 - (pr / 100));

    console.log(total);
}

fishtank(["85", "75", "47", "17"]);