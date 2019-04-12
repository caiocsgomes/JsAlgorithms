const Queue = require('../queue/arrayQueue');

function weave(sourceOne, sourceTwo){
    let queue = new Queue();

    while(!sourceOne.isEmpty() || !sourceTwo.isEmpty()){
        if(!sourceOne.isEmpty()) queue.enqueue(sourceOne.dequeue());
        if(!sourceTwo.isEmpty()) queue.enqueue(sourceTwo.dequeue());
    }

    return queue;
}

let first = new Queue();

first.enqueue(1);
first.enqueue(2);
first.enqueue(3);


let second = new Queue();

second.enqueue(6);
second.enqueue(7);
second.enqueue(8);

console.log(weave(first, second));