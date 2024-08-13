/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const toVisitStack = [this.root];
    if (this.root === null){
      return 0;
    }
    let minDepth = 999;
    let count = 1;
    while (toVisitStack.length){
      const current = toVisitStack.pop();
      count ++;
      if (current.left){toVisitStack.push(current.left)};
      if (current.right){toVisitStack.push(current.right)};
      if (current.right === null && current.left === null){
        if(count < minDepth){
          minDepth = count;
        }
        count = 1;
      }
    }
    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const toVisitStack = [this.root];
    if (this.root === null){
      return 0;
    }
    let maxDepth = 1;

    while (toVisitStack.length){
      const current = toVisitStack.pop();
      
      if (current.left){toVisitStack.push(current.left)};
      if (current.right){toVisitStack.push(current.right)};
      if (current.right !== null || current.left !== null){
        maxDepth++;
      }
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    function getMaxSum(node){
      if (node ===null) return 0;
      const leftSum = getMaxSum(node.left);
      const rightSum = getMaxSum(node.right);
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    getMaxSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;

    let toVisitQueue = [this.root];
    let closest = null

    while (toVisitQueue.length){
      let current = toVisitQueue.shift();
      if (current.val > lowerBound && (current.val < closest || closest === null)){
        closest = current.val;
      }
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
