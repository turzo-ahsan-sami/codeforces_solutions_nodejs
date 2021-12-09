/*
** 96a Football
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

const isDangerous = (players) => {
    if (players.length < 7) return 'NO'

    if (players.indexOf("0000000") != -1) return 'YES'
    if (players.indexOf("1111111") != -1) return 'YES'

    return 'NO'
}

function main() {
    let players = readline()

    console.log(isDangerous(players.toString()))
}

