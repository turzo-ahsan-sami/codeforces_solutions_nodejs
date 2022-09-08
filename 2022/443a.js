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


function main() {
    let input = readline()

    if (input == '{}') console.log(0)
    else {
        input = input.replace(/^{+/, '').replace(/}+$/, '').split(', ')
        input = new Set(input)
        console.log(input.size)
    }
}
//*/




