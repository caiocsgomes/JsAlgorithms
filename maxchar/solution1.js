function maxchars(str){
    var max = 0;
    var maxchar = '';

    const charMap = {};
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    };

    for(let char in charMap){
        if(charMap[char] > max) {
            max = charMap[char];
            maxchar = char;
        }
    };

    return maxchar;
}

module.exports = maxchars;