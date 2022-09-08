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

const calc = (nums) => {
    nums = nums.split(' ').map(Number).sort((a, b) => a - b).join(' ')
    
    return nums
}

function main() {
    let testcases = readline()
    testcases = parseInt(testcases)
    let nums = readline()
    console.log( calc(nums) )
}

// console.clear()
// let nums = ''
// nums = '3 2 1 2'
// console.log( calc(nums) )
// nums = '100 40 60 20 1 80'
// console.log( calc(nums) )
// process.exit(1)