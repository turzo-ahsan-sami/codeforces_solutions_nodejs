/*
** 4a Watermelon
*/

/* Common Template Starts */
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
/* Common Template Ends */


/* LOGIC STARTS */

const isOdd = function (x) { return x & 1 }
const isEven = function (x) { return !(x & 1) }

function main() {
    const weight = +(readline())

    let isPossible = "NO"
    if (weight > 2 && isEven(weight)) isPossible = "YES"
    console.log(isPossible)
}

