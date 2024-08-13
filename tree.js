/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisitStack = [this.root];
    if (this.root === null) { 
      return 0;
    }
    let sum = 0;
    while (toVisitStack.length){
      const current = toVisitStack.pop();
      sum = sum+current.val;
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisitStack = [this.root];
    if (this.root === null) { 
      return 0;
    }
    let count = 0;
    while (toVisitStack.length){
      const current = toVisitStack.pop();
      if (current.val % 2 == 0){
        count++;
      }
      for (let child of current.children){
        toVisitStack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toVisitQueue = [this.root];
    if (this.root === null) { 
      return 0;
    }
    let count = 0;
    while (toVisitQueue.length){
      const current = toVisitQueue.shift();
      if(current.val > lowerBound){
        count++;
      }
       for (let child of current.children){
        toVisitQueue.push(child);
       }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
