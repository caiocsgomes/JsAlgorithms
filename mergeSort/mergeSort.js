const sort = function(arr){
    if(arr.length < 2) return;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    sort(left); sort(right);
    merge(arr, left, right);
}

const merge = function(arr, left, right){
    let leftIndex = 0;
    let rightIndex = 0;
    let mainIndex = 0;

    while((leftIndex < left.length) && (rightIndex < right.length)){
        if(left[leftIndex] <= right[rightIndex]){
            arr[mainIndex] = left[leftIndex];
            leftIndex++;
            mainIndex++;
        } else {
            arr[mainIndex] = right[rightIndex];
            rightIndex++;
            mainIndex++;
        }
    }

    while(leftIndex < left.length){
        arr[mainIndex] = left[leftIndex];
        leftIndex++;
        mainIndex++
    }

    while(rightIndex < right.length){
        arr[mainIndex] = right[rightIndex];
        rightIndex++;
        mainIndex++;
    }
}

module.exports = sort;