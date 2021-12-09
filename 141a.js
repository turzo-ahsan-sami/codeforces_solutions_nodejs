/*
** 141a Amusing Joke
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

const tempPrintFunc = (guestName, hostName, shuffledLetters) => {
    if (guestName.length + hostName.length != shuffledLetters.length) return 'NO'

    guestName = guestName.split('').sort()
    hostName = hostName.split('').sort()
    shuffledLetters = shuffledLetters.split('').sort()

    for (let i = 0; i < guestName.length; i++) {
        for (let j = 0; j < shuffledLetters.length; j++) {
            if (guestName[i] == shuffledLetters[j]) {
                shuffledLetters.splice(j, 1);
                break;
            }
        }
    }
    
    return (hostName.join('') == shuffledLetters.join('')) ? 'YES' : 'NO'
}

function main() {
    let guestName = readline()
    let hostName = readline()
    let shuffledLetters = readline()

    console.log(tempPrintFunc(guestName, hostName, shuffledLetters))
}
//*/



// let guestName = '';
// let hostName = '';
// let shuffledLetters = '';

// guestName       = 'SANTACLAUS'
// hostName        = 'DEDMOROZ'
// shuffledLetters = 'SANTAMOROZDEDCLAUS'
// console.log(tempPrintFunc(guestName, hostName, shuffledLetters))

// guestName       = 'PAPAINOEL'
// hostName        = 'JOULUPUKKI'
// shuffledLetters = 'JOULNAPAOILELUPUKKI'
// console.log(tempPrintFunc(guestName, hostName, shuffledLetters))

// guestName       = 'BABBONATALE'
// hostName        = 'FATHERCHRISTMAS'
// shuffledLetters = 'BABCHRISTMASBONATALLEFATHER'
// console.log(tempPrintFunc(guestName, hostName, shuffledLetters))

// guestName       = 'ONDOL'
// hostName        = 'JNPB'
// shuffledLetters = 'ONLNJBODP'
// console.log(tempPrintFunc(guestName, hostName, shuffledLetters))

// guestName = 'VFQRWWWACX'
// hostName = 'GHZJPOQUSXRAQDGOGMR'
// shuffledLetters = 'OPAWDOUSGWWCGQXXQAZJRQRGHRMVF'
// console.log(tempPrintFunc(guestName, hostName, shuffledLetters))