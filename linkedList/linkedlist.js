let Node = function(data, next = null){
    this.data = data;
    this.next = next;
}
let Linkedlist = function(){
    this.head = null;
} 
linkedlist.prototype.insertFirst = function(data){
    let node = new Node(data, this.head);
    this.head = node;
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
    current = this.head;
    if(!current) return null;
    while(current.next) current = current.next;
    return current.data;
}
linkedlist.prototype.clear = function(){
    this.head = null;
}
linkedlist.prototype.removeFirst = function(){
    this.head = this.head.next;
}
linkedlist.prototype.removeLast = function(){
    current = this.head;
    if(!current) return;
    while(current.next.next) current = current.next;
    current.next = null;
}