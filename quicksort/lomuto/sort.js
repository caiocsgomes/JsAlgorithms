var sort = function(arr){
    sortRecursive(arr, 0, arr.length - 1);
    return arr;
}

var sortRecursive = function(arr, l, r){
    if(l < r){
        const p = partition(arr, l, r);
        sortRecursive(arr, l, p - 1);
        sortRecursive(arr, p + 1, r);
    }
}

var partition = function(arr, l, r){
    const pivot = arr[r];
    var partitionIndex = l;
    for(let i = l; i <= (r - 1); i++){
        if(arr[i] < pivot){
            [[arr[i]], [arr[partitionIndex]]] = [[arr[partitionIndex]], [arr[i]]];
            partitionIndex++;
        }
    }
    [[arr[partitionIndex]], [arr[r]]] = [[arr[r]], [arr[partitionIndex]]];
    return partitionIndex;
}

module.exports = sort;
