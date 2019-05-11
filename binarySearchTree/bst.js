class Node {
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        let newNode = new Node(data);
        let currentNode = this.root;

        if(!this.root){
            this.root = newNode;
            return;
        } else {
            const searchTree = function(currentNode){
                if(data < currentNode.data){
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return;
                    } else {
                        searchTree(currentNode.left);
                    }
                } else if(data > currentNode.data){
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return;
                    } else {
                        searchTree(currentNode.right)
                    }
                } else {
                    return null;
                }
            }    
            
            searchTree(currentNode);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while(current){
            if(data < current.data){
                current = current.left;
            } else if(data > current.data){
                current = current.right
            } else {
                return current;
            }
        }
        return null;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(data < current.data){
                current = current.left;
            } else if(data > current.data){
                current = current.right
            } else {
                return true;
            }
        }
        return false;
    }

    remove(data){
        const removeData = function(node, data){
            if(node === null) return null;
            
            if(data === node.data){
                if(!node.left && !node.right){
                    return null;
                } else if(!node.right){
                    return node.left;
                } else if(!node.left){
                    return node.right;
                }

                var tempData = node.right;
                while(tempData.left){
                    tempData = tempData.left;
                }
                node.data = tempData.data;
                node.right = removeData(node.right, tempData.data);
            } else if(data < node.data){
                node.left = removeData(node.left, data);
                return node;
            } else {
                node.right = removeData(node.right, data);
                return node;
            }
        }
        this.root = removeData(this.root, data);
    }
}

