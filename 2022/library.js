const subIncludesAll = (str, str2) => {
    for (let i = 0; i < str.length; i++) {
        if (str2.indexOf(str[i]) !== -1) {
            str2 = str2.replace(str[i], '');
        };
    };
    return (str2.length === 0);
};

const minWindow = (str1 = '', str2 = '') => {
    let shortestString = null;
    for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str1.length; j++) {
            let testString = str1.substr(i, j - i + 1);
            if (subIncludesAll(testString, str2)) {
                if (shortestString === null || testString.length < shortestString.length) {
                    shortestString = testString;
                }
            }
        }
    }
    return shortestString;
};


// ===================================================

const minimumWindow = function(s, t) {
    if (!s || !t || s.length < t.length) return "";

    let l = 0,
        r = 0;
    let count = 0,
        minI = s.length + 1,
        minL = s.length + 1;

    const freqMap = {};
    for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1;

    while (r < s.length) {
        if (freqMap[s[r]]-- >= 1) count += 1;
        r += 1;

        while (count == t.length) {
            if (r - l < minL) {
                minL = r - l;
                minI = l;
            }
            if (freqMap[s[l]]++ >= 0) count -= 1;
            l += 1;
        }
    }
    return s.slice(minI, minI + minL);
};


// ===================================================


function MinWindowSubstring(strArr) {

    let hayStack = strArr[0]
    let needle = strArr[1]

    let allSubstrings = []
    for (let i = 0; i < hayStack.length; i++) {
        for (let j = i; j < hayStack.length; j++) {
            allSubstrings.push(hayStack.slice(i, j + 1))
        }
    }
    allSubstrings.sort((a, b) => a.length - b.length)

    for (let i = 0; i < allSubstrings.length; i++) {

        let containsNeedle = false
        let substringArray = Array.from(allSubstrings[i])

        for (let i = 0; i < neddle.length; i++) {
            let index = substringArray.indexOf(neddle[i]);
            if (index !== -1) substringArray.splice(index, 1)
            else {
                containsNeedle = false
                break
            }
        }

        containsNeedle = true

        if (containsNeedle) return allSubstrings[i]
    }
}