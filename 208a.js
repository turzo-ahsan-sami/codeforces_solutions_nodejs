/*
** 208a Dubstep
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


// LOGIC STARTS //

const escapeRegExp = (string) => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')

const replaceAll = (str, find, replace) => str.replace(new RegExp(escapeRegExp(find), 'g'), replace)

const tempPrintFunc = (inp) => {
    return replaceAll(inp, 'WUB', ' ').trim().replace( /\s\s+/g, ' ' )
}

function main() {
    let inp = readline()
    console.log(tempPrintFunc(inp))
}
//*/


