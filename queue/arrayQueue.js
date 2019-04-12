var Queue = function(){
    this.data = [];
}
Queue.prototype.enqueue = function(value){
    this.data.push(value);
}
Queue.prototype.dequeue = function(){
    return this.data.shift();
}
Queue.prototype.isEmpty = function(){
    return this.data.length == 0;
}
Queue.prototype.size = function(){
    return this.data.length;
}
Queue.prototype.peek = function(){
    return this.data[this.data.length -1];
}

module.exports = Queue;
//note: the dequeue implementation is obviously slow, as the entire array
//will have to be moved to be rearranged