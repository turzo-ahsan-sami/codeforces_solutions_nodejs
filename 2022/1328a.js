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

const calculateSteps = (a, b) => {
    if (a >= b) {
        if (a % b == 0) return 0
        nearest_multiple = Math.ceil(a / b) * b
        return nearest_multiple - a
    }

    return b - a
}

//*
function main() {
    let testCases = readLine()
    testCases = parseInt(testCases)
    while (testCases--) {
        let inputLine = readLine()
        inputLine = inputLine.split(" ")
        let a = parseInt(inputLine[0])
        let b = parseInt(inputLine[1])

        console.log(calculateSteps(a, b))

        /* // tle on case 4
        if (a >= b) {
            if (a % b == 0) {
                console.log(0)
            } else {
                let i = 1
                while (a % b != 0) {
                    let remaining = (b * ++i) - a
                    if (remaining > 0) {
                        console.log(remaining)
                        break
                    }
                }
            }
        } else {
            console.log(b - a)
        }
        //*/
    }
}
//*/
