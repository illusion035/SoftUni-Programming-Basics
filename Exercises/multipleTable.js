function multiplicationTable(input) {
    let number = Number(input[0]);
  
    let a = number % 10;
    let b = Math.floor((number / 10) % 10);
    let c = Math.floor(number / 100);
  
    for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= b; j++) {
        for (let k = 1; k <= c; k++) {
          let result = k * j * i;
          console.log(`${i} * ${j} * ${k} = ${result};`);
        }
      }
    }
  }
  
  multiplicationTable(["324"]);