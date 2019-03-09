function anagrams(str1, str2){
    str1 = str1.replace(/[^a-z]/gmi,'').toLowerCase();
    str2 = str2.replace(/[^a-z]/gmi,'').toLowerCase();
    obj1 = {};
    obj2 = {};

    for(let letter of str1){
        obj1[letter] = obj1[letter] + 1 || 1;
    }

    for(let letter of str2){
        obj2[letter] = obj2[letter] + 1 || 1;
    }

    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;

};

console.log(anagrams('RAIL! Safety!', 'fairy tles'));

module.exports = anagrams;