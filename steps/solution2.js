var steps = function(n){
    let stair;
    for(let column = 1; column <= n; column++){
        stair = '';
        for(let row = 1; row <= n; row++){
            if(row <= column){
                stair += '#';
            }else{
                stair += ' ';
            }
        }
        console.log(stair);
    }
};

module.exports = steps;