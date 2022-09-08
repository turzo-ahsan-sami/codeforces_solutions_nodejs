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
    let n = readline()

    let amount = parseInt(n)
    let bills = [1, 5, 10, 20, 100].reverse()
    let billCount = [0, 0, 0, 0, 0]

    for (let i = 0; i < bills.length; i++) {
        billCount[i] = Math.floor(amount / bills[i])
        amount = amount - (bills[i] * billCount[i])
        if (amount <= 0) break
    }

    billCount = billCount.reduce((v, a) => v + a, 0)

    console.log(billCount)
}
//*/




