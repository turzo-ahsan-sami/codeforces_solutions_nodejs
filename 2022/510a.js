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

function draw(n) {
    n = n.split(' ').map(Number)
    lines = n[0]
    chars = n[1]

    let leftChars = '#'
    let rightChars = '.'
    let allChars = '#';

    let i = 2
    while (i <= chars) {
        allChars += '#'
        if (i > 1) leftChars += '.'
        if (i < chars) rightChars += '.'
        if (i == chars) rightChars += '#'
        i++
    }

    let lineNo = 1
    while (lineNo <= lines) {

        if (isOdd(lineNo)) console.log(allChars)
        else {
            if (isOdd(lineNo / 2)) console.log(rightChars)
            else console.log(leftChars)
        }

        lineNo++
    }

}

function main() {
    let n = readline()
    draw(n)
}

// console.clear()
// let n = ''
// n = '3 3'
// draw(n)
// n = '3 4'
// draw(n)
// n = '5 3'
// draw(n)
// n = '9 9'
// draw(n)
// process.exit(1)