/*
** 69a Young Physicist
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


// LIBRARY START //

const isOdd = (x) => { return x & 1 }
const isEven = (x) => { return !(x & 1) }

const reverseText = (s) => { return s.split('').reverse().join('') }
const hasDuplicates = (str) => (/([a-z])\1/i).test(str)

const hasDuplicateChar = (str, char) => str.indexOf(char) !== str.lastIndexOf(char)

const isSorted = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

const findAllIndicesOfChar = (str, char) => {
    str = str.split('')
    let indices = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) indices.push(i);
    }
    return indices
}

const splitAt = index => x => [x.slice(0, index), x.slice(index)]

const isUpper = str => !/[a-z]/.test(str) && /[A-Z]/.test(str)

const escapeRegExp = (string) => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')

const replaceAll = (str, find, replace) => str.replace(new RegExp(escapeRegExp(find), 'g'), replace)

const findUnique = (str) => {
    return [...str].reduce((acc, curr) => {
        return acc.includes(curr) ? acc : acc + curr;
    }, "")
}

const removeDuplicates = str => str.replace(/(.)\1*/g, '$1');

const add = (accumulator, a) => accumulator + a;

// LIBRARY END


//*
function main() {
    let cases = readline()
    let totalForce_x = 0
    let totalForce_y = 0
    let totalForce_z = 0

    while (cases--) {
        let inp = readline().split(' ').map(Number)
        totalForce_x += inp[0]
        totalForce_y += inp[1]
        totalForce_z += inp[2]
    }

    (totalForce_x == 0 && totalForce_y == 0 && totalForce_z == 0) ? console.log('YES') : console.log('NO')
}
//*/
