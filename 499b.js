/*
** 499b Lecture
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

const decode = (words, lecture) => {

    let decoded = ''
    lecture.forEach(lec => {
        words.forEach(w => {
            let l = w.findIndex((str) => str === lec)
            if (l == 0) {
                decoded += (w[0].length <= w[1].length) ? w[0] : w[1]
                decoded += ' '
            }
        })
    })

    return decoded.trim()
}

//*
function main() {
    let inp = readline().split(' ').map(Number)
    let words = []

    while (inp[1]--) {
        words.push(readline())
    }

    let lecture = readline().split(' ')

    console.log(decode(words, lecture))
}
//*/

// let inp = ''
// let words = []
// let lecture = ''
// let output = ''

// inp = '4 3'.split(' ').map(Number)
// words.push('codeforces codesecrof'.split(' '))
// words.push('contest round'.split(' '))
// words.push('letter message'.split(' '))
// lecture = 'codeforces contest letter contest'.split(' ')
// output = 'codeforces round letter round'

// console.log( decode(words, lecture) == output )


// inp = '5 3'.split(' ').map(Number)
// words.push('joll wuqrd'.split(' '))
// words.push('euzf un'.split(' '))
// words.push('hbnyiyc rsoqqveh'.split(' '))
// lecture = 'hbnyiyc joll joll euzf joll'.split(' ')
// output = 'hbnyiyc joll joll un joll'

// console.log( decode(words, lecture) == output )





