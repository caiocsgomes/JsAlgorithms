let Node = function(data){
    this.data = data;
    this.next = null;
    this.previous = null;
}
let Linkedlist = function(){
    this.head = null;
    this.tail = null;
} 
linkedlist.prototype.insertFirst = function(data){
    let newNode = new Node(data);
    if(this.head){
        this.head.previous = newNode;
        newNode.next = this.head;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
    
}
linkedlist.prototype.getIndex = function(index){
    if(index < 0 || (this.size() - 1) < index) return null;
    counter = 0;
    current = this.head;
    while(counter < index){
        current = current.next;
        counter++;
    }
    return current.data;
}
linkedlist.prototype.removeIndex = function(index){
    //TODO: add function and test
}
linkedlist.prototype.insert = function(data){
    let newNode = new Node(data);
    if(this.tail){
        this.tail.next = newNode;
        newNode.previous = this.tail;
    } else {
        this.first = newNode;
    }
    this.tail = newNode;
}
linkedlist.prototype.size = function(){
    let current = this.head;
    let size = 0;
    while(current.next){
        current = current.next;
        size = size + 1;
    }
    return size;
}
linkedlist.prototype.getFirst = function(){
    return this.head.data;
}
linkedlist.prototype.getLast = function(){
    return this.tail;
}
linkedlist.prototype.clear = function(){
    this.head = this.tail = null;
}
linkedlist.prototype.removeFirst = function(){
    this.head = this.head.next;
    this.head.previous = null;
}
linkedlist.prototype.removeLast = function(){
    this.tail = this.tail.previous;
    this.tail.next = null;
}