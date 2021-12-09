/*
** 59a Word
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

const convertText = (text) => {
    let numLower = text.replace(/[^a-z]/g, '').length
    let numUpper = text.replace(/[^A-Z]/g, '').length

    return (numLower >= numUpper) ? text.toLowerCase() : text.toUpperCase()
}

function main() {
    let word = readline()

    console.log(convertText(word))
}

