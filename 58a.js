/*
** 58a Chat Room
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


// LOGIC STARTS //

const hasDuplicates = (str) => (/([a-z])\1/i).test(str)

const hasDuplicateChar = (str, char) => str.indexOf(char) !== str.lastIndexOf(char)

const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);

const findAllIndicesOfChar = (str, char) => {
    str = str.split('')
    let indices = [];
    for(let i=0; i<str.length;i++) {
        if (str[i] === char) indices.push(i);
    }
    return indices
}

const tempPrintFunc = (text) => {
    if( text.length < 5 ) return 'NO'

    if( !hasDuplicateChar(text, 'l') ) return 'NO'
    
    let h = findAllIndicesOfChar(text, 'h')
    let e = findAllIndicesOfChar(text, 'e')
    let l = findAllIndicesOfChar(text, 'l')
    let o = findAllIndicesOfChar(text, 'o')

    let isHello = false

    let h_min = Math.min.apply(Math, h)
    e_filtered = e.filter( x => x > h_min)

    let e_min = Math.min.apply(Math, e_filtered)
    l_filtered = l.filter( x => x > e_min)    

    let l_min = Math.min.apply(Math, l_filtered)    
    o_filtered = o.filter( x => x > l_min)

    isHello = ( h.length > 0 && e_filtered.length > 0 && l_filtered.length > 1 && o_filtered.length > 0)
   
    return isHello ? 'YES' : 'NO'
}

function main() {
    let text = readline()
    console.log(tempPrintFunc(text))
}
//*/


