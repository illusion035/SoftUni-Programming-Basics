function projectCreation(input) {
    let projectName = input[0];
    let projectsCount = Number(input[1]);
    let hoursResult = projectsCount * 3;
    let res = `The architect ${projectName} will need ${hoursResult} hours to complete ${projectsCount} project/s.`;
    console.log(res);
}

projectCreation(["George", "4"]);