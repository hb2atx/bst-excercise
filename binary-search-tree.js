class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

    /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

    _dfsInOrder(){
    
    }
  

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    if(this.root === null)
      this.root = newNode;
    else

      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if(newNode.val < node.val){
      if(node.left === null)
      node.left = newNode;
    else
      this.insertNode(node.left, newNode);
    } else {
      if(node.right === null)
      node.right = newNode;
     else
      this.insertNode(node.right,newNode)
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this._insertNode(this.root, val);
  }

  _insertNode(node, val) {
    if (node === null) {
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this._insertNode(node.left, val);
    } else if (val > node.val) {
      node.right = this._insertNode(node.right, val);
    }

    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    letCurrentNode = this.root 

    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }



  
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
      return this._findNode(this.root, val);
    }

    _findNode(node, val) {
      if (node === null) {
        return undefined;
      }

      if(val === node.val) {
        return node;
      } else if (val < node.val) {
        return this._findNode(node.left, val);
      } else {
        return this._findNode(node.right, val);
      }
    }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    this._dfsPreOrderHelper(this.root, visited);
    return visited;
  }

  _dfsPreOrderHelper(node, visited){
    if (node !== null) {
      visited.push(node.val); // Visit current node
      this._dfsPreOrderHelper(node.left, visited); // Traverse left subtree
      this._dfsPreOrderHelper(node.right, visited); // Traverse right subtree
    }
  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

 _dfsInOrder(node = this.root, visited = []) {
  if (node !== null) {
    this._dfsInOrder(node.left, visited);
    visited.push(node.val);
    this._dfsInOrder(node.right, visited);
  }
  return visited;
}
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (node !== null) {
      this._dfsPreOrderHelper(node.left, visited);
      this._dfsPreOrderHelper(node.right, visited);
      visited .push(node.val);
    }
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];

    if(this.root !== null){
      queue.push(this.root);

      while (queue.length > 0){
        const currentNode = queue.shift();
        result.push(currentNode.val);

        if(currentNode.left !== null){
          queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if(node === null)
    return null;

    else if(key < node.val) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node
      }
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }
  
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
  
    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }
  
  getHeight(node) {
    if (node === null) {
      return 0;
    }
  
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
  
    return Math.max(leftHeight, rightHeight) + 1;
  }
  

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    let secondHighest = undefined;

    // Start from the root of the tree
    let current = this.root;

    while (current !== null) {
      // If the current node has a right child but doesn't have a right child's right child
      if (current.right !== null && current.right.right === null) {
        secondHighest = current.val; // The current node is the second-highest
        break;
      }

      // Move to the right child
      current = current.right;
    }

    return secondHighest;
  }
}

module.exports = BinarySearchTree;
