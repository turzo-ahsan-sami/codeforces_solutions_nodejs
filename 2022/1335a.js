/*
** 1a Theatre Square
*/

// Common Template Starts //
//*
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// Common Template Ends //


//*
function main() {
    let testCases = readLine()
    testCases = parseInt(testCases)
    while (testCases--) {
        let n = readLine()
        n = parseInt(n)

        if (n <= 1) console.log(0)
        else {
            let max_a = n - 1
            let min_a = Math.floor(n / 2) + 1

            console.log((max_a - min_a) + 1)
        }
    }
}
//*/
