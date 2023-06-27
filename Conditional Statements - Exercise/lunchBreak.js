function lunchBreak(input) {
    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let restTime = Number(input[2]);

    let dinnerTime = restTime * 1/8
    let relaxTime =  restTime * 1/4

    let timeLeft = restTime - dinnerTime - relaxTime

    let totalTime = Math.ceil(Math.abs(timeLeft - episodeTime))
    
    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${totalTime} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${totalTime} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

