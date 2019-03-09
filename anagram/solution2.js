function anagrams(str1, str2){
    return str1.replace(/[^a-z]/gmi,'').toLowerCase().split('').sort().join('') === str2.replace(/[^a-z]/gmi,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;