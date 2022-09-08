console.clear()

let str = "acc?7??sss?3rr1??????5"

let strArr = str.split(/([0-9]+)/)
strArr.shift()
strArr.pop()

for(let substr of strArr){
    let index = substr.indexOf('???')
    if( index != -1 ) return true
}

return false 