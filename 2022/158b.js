/*
** Template
*/

// Common Template Starts //
//*
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readline() {
    return inputString[currentLine++];
}
// Common Template Ends //

const isOdd = (x) => { return x & 1 }
const isEven = (x) => { return !(x & 1) }

const calc = (nums) => {
    nums = nums.split(' ').map(Number).sort()

    let carCount = 0
    let groupCount = {}
    for (const num of nums) {
        groupCount[num] = groupCount[num] ? groupCount[num] + 1 : 1;
    }
    
    // each group consisting of 4 members occupies a single car  
    carCount += ~~groupCount[4]

    // each group consisting of 3 members occupies a single car  
    carCount += ~~groupCount[3]
    // but they take single members along with them 
    groupCount[1] = ~~groupCount[1] - ~~groupCount[3]

    // 2 groups consisting of 2 members occupy a single car 
    totalmembers_2 = ~~groupCount[2] * 2
    reqCars_2 = Math.floor(totalmembers_2 / 4)
    carCount += reqCars_2
        
    // remaining members of group 2
    totalmembers_2_left = totalmembers_2 - (reqCars_2 * 4)
    // remaining single members
    totalmembers_1_left = (groupCount[1] > 0) ? groupCount[1] : 0
    
    // remaining members of group 2 will take single members in a car
    reqCars_2 = Math.floor(totalmembers_2_left / 2)
    carCount += reqCars_2
    
    // remaining single members
    totalmembers_1_left = totalmembers_1_left - (reqCars_2 * 2)
    
    totalmembers_1_left = totalmembers_1_left < 0 ? 0 : totalmembers_1_left
    reqCars_1 = Math.ceil( totalmembers_1_left / 4 )
    
    carCount += reqCars_1

    return carCount
}

function main() {
    let testcases = readline()
    testcases = parseInt(testcases)
    let nums = readline()
    console.log(calc(nums))
}

// console.clear()
// let nums = ''
// nums = '2 3 4 4 2 1 3 1'
// console.log(calc(nums))
// nums = '1 2 4 3 3'
// console.log(calc(nums))
// nums = '4 4 4 4 4'
// console.log(calc(nums))
// nums = '1 1 1 1 1 1 1 1 1 1 1 1'
// console.log(calc(nums))
// nums = '1 1 2'
// console.log(calc(nums))
// process.exit(1)