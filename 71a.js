/*
** 71a Way Too Long Words
*/

/* Common Template Starts */
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
/* Common Template Ends */


/* LOGIC STARTS */

function main() {
    let testCases = readline()

    while(testCases--){
        let text = readline()

        if( text.length <= 10 ) console.log(text)
        else console.log( text.charAt(0) + (text.length - 2) + text.charAt(text.length - 1) )
    }    
}

