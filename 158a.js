/*
** 158a Next Round
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

function main() {
    const inputArr = readline().split(' ').map(Number)
    const scores = readline().split(' ').map(Number)

    let k_th_place = inputArr[1]

    let passMark = scores[k_th_place - 1]
    let passed = scores.filter(x => (x > 0 && x >= passMark) ).length

    console.log(passed)
}
//*/



