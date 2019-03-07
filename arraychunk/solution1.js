function chunk(arr, size){
    var returnArr = [];
    
    for(let i = 0; i < arr.length; i += size){
        returnArr.push(arr.slice(i,  i + size));
    }

    return returnArr;
}

module.exports = chunk;