var capitalize = function(str){
    const capitalized = [];

    for(let word of str.split(' ')){
        capitalized.push(word[0].toUpperCase() + word.slice(1));
    }

    return capitalized.join(' ');
}

module.exports = capitalize;