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

function calc(n) {

    n = n.split(' ').map(Number)
    k = n[0]
    r = n[1]

    let i = 1
    while (1) {
        let totalPrice = k * i

        if (totalPrice % 10 == 0 || totalPrice % 10 == r) break

        i++
    }
    return i
}

function main() {
    let n = readline()
    console.log(calc(n))
}

// console.clear()
// let n = ''
// n = '117 3'
// console.log(calc(n))
// n = '237 7'
// console.log(calc(n))
// n = '15 2'
// console.log(calc(n))
// process.exit(1)