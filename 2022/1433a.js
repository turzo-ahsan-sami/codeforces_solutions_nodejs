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

const generateBoringNumbers = (limit) => {
    let boringNumbers = []

    let i = 1
    while (i <= 9) {

        let boringNum = i.toString()

        while (parseInt(boringNum) <= limit) {
            boringNumbers.push(boringNum)
            boringNum = boringNum.toString() + i.toString()
        }

        i++
    }

    return boringNumbers
}

function main() {
    let testcases = readline()
    testcases = parseInt(testcases)

    let boringNumbers = generateBoringNumbers(10000)

    while (testcases--) {
        let find = readline()
        let index = boringNumbers.findIndex(n => n === find)

        let count = i = 0
        while (i <= index) {
            count += boringNumbers[i].length
            i++
        }

        console.log(count)
    }
}
