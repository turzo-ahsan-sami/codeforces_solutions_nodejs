'use strict';

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

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

//* 
function main() {
    let cases = readline().split(' ').map(Number)
    let words = new Map()

    while (cases[1]--) {
        let inputs = readline().split(' ')
        if (inputs[0].length <= inputs[1].length)
            words.set(inputs[0], inputs[0])
        else words.set(inputs[0], inputs[1])
    }

    let decoded = ''
    let lecture = readline().split(' ')

    lecture.forEach(lec => {
        decoded += words.get(lec) + ' '
    })

    console.log(decoded.trim())
}