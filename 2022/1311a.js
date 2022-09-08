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
    nums = nums.split(' ').map(Number)
    let diff = nums[1] - nums[0]

    if (diff == 0) {
        return 0
    } else if (diff > 0) {
        if (isOdd(diff)) return 1
        else if (isEven(diff)) return 2
    } else if (diff < 0) {
        if (isEven(diff)) return 1
        else if (isOdd(diff)) return 2
    }
}

function main() {
    let testcases = readline()
    testcases = parseInt(testcases)

    while (testcases--) {
        let nums = readline()
        console.log(calc(nums))
    }
}

// console.clear()
// let nums = '7 4'
// console.log(calc(nums))
// process.exit(1)