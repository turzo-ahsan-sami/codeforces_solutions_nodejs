/*
** 41a Translation
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

const reverseText = (s) => {
    return s.split('').reverse().join('');
}

const tempPrintFunc = (originalWord, translatedWord) => {
    return (translatedWord.toLowerCase() === reverseText(originalWord.toLowerCase())) ? 'YES' : 'NO'
}

function main() {
    let originalWord = readline()
    let translatedWord = readline()
    console.log(tempPrintFunc(originalWord, translatedWord))
}
//*/

