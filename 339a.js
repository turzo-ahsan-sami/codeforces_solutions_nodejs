/*
** 339a Helpful Maths
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

const tempPrintFunc = (inp) => {
    inp = inp.split('+').sort().map(x => '+' + x).join('').replace(/^\+/,"")  
    return inp
}

function main() {
    let inp = readline()
    console.log(tempPrintFunc(inp))
}
//*/



