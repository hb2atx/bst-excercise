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

    .findNode(node, val) {
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
}

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

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

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
