/*
** 236a Boy or Girl
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

const findUnique = (str) => {
    return [...str].reduce((acc, curr) => {
        return acc.includes(curr) ? acc : acc + curr;
    }, "")
}

const isOdd = (x) => { return x & 1 }
const isEven = (x) => { return !(x & 1) }

function main() {
    let name = readline()

    name = findUnique(name.toLowerCase())

    let printStatement = ( isOdd(name.length) ) ? "IGNORE HIM!" : "CHAT WITH HER!"  
    console.log(printStatement)
}

