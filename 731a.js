/*
** 731a Night at the Museum
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

function searchStringInArray(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
}

// LIBRARY END

const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charToAscii = (char) => char.charCodeAt(0)
const AsciiToChar = (ascii) => String.fromCharCode(ascii)

const decipher = (inp) => {
    
    let dis = 0
    let currChar = 'a'

    while( inp.length > 0 ) {
        nextChar = inp.shift()
        
        curr_pos = alphabets.indexOf(currChar)
        next_pos = alphabets.indexOf(nextChar)

        dis += ( Math.abs(curr_pos - next_pos) < 13 ) ? Math.abs(curr_pos - next_pos) : ( 26 - Math.abs(curr_pos - next_pos) )

        currChar = nextChar
    }
    
    return dis
}

//*
function main() {
    let inp = readline()
    console.log( decipher( inp.split('') ) )
}
//*/

// let inp = ''
// let output = ''

// inp = 'zeus'
// op = 18
// console.log( decipher(inp.split('')) == op )

// inp = 'map'
// op = 35
// console.log( decipher(inp.split('')) == op )

// inp = 'ares'
// op = 34
// console.log( decipher(inp.split('')) == op )




