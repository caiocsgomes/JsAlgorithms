var steps = function(n){
    
    for(let i = 1; i <= n; i++){
        console.log("'" + '#'.repeat(i) + ' '.repeat(n - i) + "'");
    }
};

module.exports = steps;