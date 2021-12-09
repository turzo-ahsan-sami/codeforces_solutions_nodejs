/*
** 118a String Task
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

function main() {
    let text = readline()
    text = text.toLowerCase().replace( /[aeiouy]/ig, '' ).split('').map(x => '.' + x).join('')  
    console.log(text);
}

