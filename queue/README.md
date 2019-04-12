# Queue

A queue is data set of contiguous memory structured as First-In-First-Out (FIFO) - this structure limits data in the way that it can only be added at the rear and removed from the front.

You can think in a Queue as a line in a Starbucks, the person who arrived first is the one who goes out first and the one who arrived last is the one who goes out last. The first element in the queue, or the element at the front  of the queue, is always the first to be processed and removed from the queue. 

## Common Operations

* enqueue or add - Adds an element at the rear of the queue.
* dequeue or remove - Returns the element at the front of the queue.
* peek - Retrieves, but DOES NOT remove the element at the front.
* isEmpty - Returns a boolean indicating if the queue is empty or not.

## Common Application

* Job Scheduler - A job scheduler is a computer application for controlling unattended background program execution of jobs. It follows a FIFO manner, the first job added to the queue is run, until it reaches the last job added and the queue is empty.

* Interruptions in real-time systems - The interrutions are handled in the order they arrived, the first that arrived is the first processed.