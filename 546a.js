/*
** 546a Aoldier and Bananas
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

// LIBRARY END

const calculate_deficit = (cost_of_first_banana, cash_at_hand, no_of_bananas) => {
    let deficit = 0

    let cash_required = cost_of_first_banana * no_of_bananas * ( no_of_bananas + 1) / 2  

    deficit = cash_required - cash_at_hand

    return ( deficit > 0 ) ? deficit : 0
}

//*
function main() {
    let inputs = readline().split(' ').map(Number)

    let cost_of_first_banana = inputs[0]
    let cash_at_hand = inputs[1]
    let no_of_bananas = inputs[2]
    
    console.log(calculate_deficit(cost_of_first_banana, cash_at_hand, no_of_bananas))
        
}
//*/
