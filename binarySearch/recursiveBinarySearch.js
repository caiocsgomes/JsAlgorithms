const search = function(arr, target){
    const searchRecursive = function(arr, target, left, right){
        if(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) return mid;

            if(arr[mid] < target) return searchRecursive(arr, target, mid + 1, right);
            else return searchRecursive(arr, target, left, mid - 1);
        }
    }

    return searchRecursive(arr, target, 0, arr.length - 1);
}

module.exports = search;