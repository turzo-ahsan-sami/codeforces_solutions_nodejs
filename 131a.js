/*
** 131a cAPS lOCK
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
//*/

// LOGIC STARTS //
const splitAt = index => x => [x.slice(0, index), x.slice(index)]

const isUpper = str => !/[a-z]/.test(str) && /[A-Z]/.test(str)

const tempPrintFunc = (inp) => {
    if (inp.length == 1 && isUpper(inp)) return inp.toLowerCase()
    if (inp.length == 1 && !isUpper(inp)) return inp.toUpperCase()

    if (isUpper(inp)) return inp.toLowerCase()

    inp = splitAt(1)(inp)

    if (isUpper(inp[1])) {
        inp[0] = inp[0].toUpperCase()
        inp[1] = inp[1].toLowerCase()
    }
    return inp[0] + inp[1]
}

function main() {
    let inp = readline()
    console.log(tempPrintFunc(inp))
}



// console.log( 'Caps' == tempPrintFunc('cAPS'))
// console.log( 'Lock' == tempPrintFunc('Lock'))
// console.log( 'cAPSlOCK' == tempPrintFunc('cAPSlOCK'))
// console.log( 'CAPs' == tempPrintFunc('CAPs'))
// console.log( 'LoCK' == tempPrintFunc('LoCK'))
// console.log( 'oops' == tempPrintFunc('OOPS'))
// console.log( 'a' == tempPrintFunc('A'))
// console.log( 'A' == tempPrintFunc('a'))
// // console.log(tempPrintFunc('cAPS'))
// // console.log(tempPrintFunc('Lock'))
// // console.log(tempPrintFunc('cAPSlOCK'))
// // console.log(tempPrintFunc('CAPs'))
// // console.log(tempPrintFunc('LoCK'))
// // console.log(tempPrintFunc('OOPS'))


