/*
 ** 1a Theatre Square
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

function readLine() {
  return inputString[currentLine++];
}
// Common Template Ends //


//*
function main() {

  let testCases = readLine()
  testCases = parseInt(testCases)

  let infos = readLine().split(' ').map(Number)

  let posIndex = infos.map((e, i) => e > 0 ? i : undefined).filter(x => x !== undefined)
  let posVals = infos.map((e, i) => e > 0 ? e : undefined).filter(x => x !== undefined)

  for (let i = 0; i < posIndex.length; i++) {
    let currPosition = posIndex[i]
    let nextPositions = posVals[i]

    let j = currPosition + 1
    while (j < infos.length && nextPositions > 0) {
      if (infos[j] == -1) {
        infos[j] = 0
        nextPositions--
      }
      j++
    }
  }

  infos = infos.filter(x => x == -1)
  console.log(infos.length)

}
//*/
