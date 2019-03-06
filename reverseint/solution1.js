function reverseint(number){
    var signal = 1;
    var srtNumber;

    if(number < 0) {
        signal = -1;
        number *= -1;
    }

    strNumber = number.toString().split('').reverse().join('');

    return parseInt(strNumber) * signal;
}

console.log(reverseint(987));