/*
** 785a Anton and Polyhedrons
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

const Tetrahedron   = 4
const Cube          = 6
const Octahedron    = 8 
const Dodecahedron  = 12
const Icosahedron   = 20 

const getPolyhedronFaces = (polyhedron) => {
    if(polyhedron == 'Tetrahedron')  return Tetrahedron
    if(polyhedron == 'Cube')         return Cube
    if(polyhedron == 'Octahedron')   return Octahedron
    if(polyhedron == 'Dodecahedron') return Dodecahedron
    if(polyhedron == 'Icosahedron')  return Icosahedron
}

function main() {
    let inp = readline()
    let polyhedronFaces = 0
    while(inp--){
        let polyhedron = readline()
        polyhedronFaces += getPolyhedronFaces(polyhedron)
    }
    console.log(polyhedronFaces)
}
//*/

