function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0])
    let distanceInMeters = Number(input[1])
    let timeInScondsForOneMeter = Number(input[2])

    let meteresToSeconds = distanceInMeters * timeInScondsForOneMeter
    let neshtoSi = Math.floor(distanceInMeters / 15) * 12.5
    let totalTime = meteresToSeconds + neshtoSi
    let totalSum = totalTime - recordInSeconds

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${Math.abs(recordInSeconds - totalTime).toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
