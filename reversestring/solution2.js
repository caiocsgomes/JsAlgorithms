function reverse(str){
    var size = str.length - 1;
    var reversed = "";

    while(size >= 0){
        reversed += str[size];
        size--;
    }

    return reversed;
}
reverse("Caio");
module.exports = reverse;