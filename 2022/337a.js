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

const minSlidingWindow = (num, nums) => {
    arr = nums.split(' ').map(Number)
    let sum = []   

    let i = 0
    let j = num - 1
    while(j < arr.length) {
        
        let window = arr.slice(i, num)
        console.log( window )
        i++
        j++
    }
    return sum
}

// function main() {
//     let n = readline().split('').map(Number)[0]    
//     n = n.split('').map(Number)[0]    
//     let nums = readline()
//     console.log( calc(n, nums) )
// }

console.clear()
let n = '4 6'
n = n.split('').map(Number)[0]
let nums = ''
nums = '10 12 10 7 5 22'
console.log(minSlidingWindow(n, nums))
process.exit(1)