/*
** 734a Anton and Danik
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

const tempPrintFunc = (outcomes) => {
    let antonWon = (outcomes.match(/A/g)||[]).length
    let danikWon = (outcomes.match(/D/g)||[]).length
    
    if(antonWon == danikWon) return 'Friendship'
    if(antonWon > danikWon) return 'Anton'
    if(antonWon < danikWon) return 'Danik'
}

function main() {
    let noOfGames = readline()
    let outcomes = readline()
    console.log(tempPrintFunc(outcomes))
}
//*/

