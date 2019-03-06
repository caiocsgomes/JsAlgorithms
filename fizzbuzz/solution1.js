var fizzbuzz = function(n){
    aux = 1;
    while (aux <= n){
        if(aux % 3 === 0 && aux % 5 === 0){
            console.log('fizzbuzz');
        } else if(aux % 3 === 0){
            console.log("fizz");
        } else if(aux % 5 === 0){
            console.log("buzz");
        } else{
            console.log(aux);
        }
        aux++;
    }
}
module.exports = fizzbuzz;