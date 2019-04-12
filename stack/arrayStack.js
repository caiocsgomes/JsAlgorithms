var Stack = new function(){
    this.data = [];
}
Stack.prototype.pop = function(){
    return this.data.pop();
}
Stack.prototype.push = function(value){
    this.data.push(value);
}
Stack.prototype.isEmpty = function(){
    return this.data.length == 0;
}
Stack.prototype.peek = function(){
    return this.data[this.data.length - 1];
}

module.exports = Stack;