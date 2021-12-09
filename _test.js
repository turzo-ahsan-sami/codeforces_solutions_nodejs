const isOdd = (x) => x & 1
const isEven = (x) => !(x & 1)

const removeCharFromString = (string, char) => {
    while(text.includes('A')){
        text = text.replace('A','')
    }
}

const decode = (text) => {
    text = text.split('')
    count_a = text.filter( c => c.includes('A') ).length
    count_b = text.filter( c => c.includes('B') ).length
    count_c = text.filter( c => c.includes('C') ).length
    
    // if(count_b == 0) return false

    // if(count_c == 0) {
    //     if( isEven(count_a) && isEven(count_b) ) return true
    //     else return false
    // } 
    
    // if(count_a == 0){
    //     if( isEven(count_c) && isEven(count_b) ) return true
    //     return false
    // } 

    if( count_a + count_c == count_b ) return true

    return false
}

let txt = ''

txt = 'ABACAB'
decode(txt) ? console.log('YES') : console.log('NO')
// NO

txt = 'ABBA'
decode(txt) ? console.log('YES') : console.log('NO')
// YES

txt = 'AC'
decode(txt) ? console.log('YES') : console.log('NO')
// NO

txt = 'ABC'
decode(txt) ? console.log('YES') : console.log('NO')
// NO

txt = 'CABCBB'
decode(txt) ? console.log('YES') : console.log('NO')
// YES

txt = 'BCBCBCBCBCBCBCBC'
decode(txt) ? console.log('YES') : console.log('NO')
// YES
