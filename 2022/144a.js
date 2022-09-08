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

const swap = (nums) => {
    nums = nums.split(' ').map(Number)
    let len = nums.length
    let swapCount = 0
    
    let max = Math.max(...nums)
    let maxIndex = nums.findIndex( r => r === max )
    
    nums.splice(maxIndex, 1)
    nums.unshift(max)
    swapCount += maxIndex
    
    let min = Math.min(...nums)
    let minIndex = nums.lastIndexOf( min )
    
    nums.splice(minIndex, 1)
    nums.unshift(min)
    swapCount += ( len - 1 ) - minIndex

    return swapCount
}

function main() {
    let testcases = readline()
    testcases = parseInt(testcases)
    let nums = readline()
    console.log( swap(nums) )
}

// console.clear()
// let nums = ''
// nums = '33 44 11 22'
// console.log( swap(nums) )
// nums = '10 10 58 31 63 40 76'
// console.log( swap(nums) )
// process.exit(1)