var pyramid = function(n){
    let width = 2 * n  - 1;

    for(let i = 0; i < n; i++){
        console.log('-'.repeat((width - 1 - 2 * i) / 2) +
                    '*'.repeat(i) + 
                    '*'.repeat(1) + 
                    '*'.repeat(i) +
                    '-'.repeat((width - 1 - 2 * i) / 2));
    }
}

module.exports = pyramid;