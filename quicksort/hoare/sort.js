var sort = function(arr){
    sortRecursive(arr, 0, arr.length - 1);
    return arr;
}


var sortRecursive = function(arr, l, r){
    if(l < r){
        const p = partition(arr, l, r);
        sortRecursive(arr, p, r);
        sortRecursive(arr, l, p - 1);
    }
}

var partition = function(arr, l, r){
    const pivot = arr[Math.floor((r + l) / 2)];
    
    while(l <= r){
        while(arr[l] < pivot) l++;
        while(arr[r] > pivot) r--;
    
        if(l <= r){
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }

    return l;
}

module.exports = sort;