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

    let k = readLine()
    let l = readLine()
    let m = readLine()
    let n = readLine()
    let d = readLine()

    k = parseInt(k)
    l = parseInt(l)
    m = parseInt(m)
    n = parseInt(n)
    d = parseInt(d)

    let inputs = [k, l, m, n]
    let dragons = new Array(d).fill(0)

    for (let it = 0; it < inputs.length; it++) {
        let action = inputs[it]

        for (let i = 0; i < dragons.length; i++) {
            let realIndex = i + 1
            if (realIndex % action == 0) dragons[i] = 1
        }
    }

    dragons = dragons.filter(v => v == 0)
    console.log(d - dragons.length)
}
//*/
