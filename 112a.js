/*
** 112a Petya and Strings
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
    const string_1 = readline()
    const string_2 = readline()

    console.log(string_1.toLowerCase().localeCompare(string_2.toLowerCase()))
}

