function nodeDepths(root, fullDepth = 0) {
    // Write your code here.
    if (root === null) {
      return 0;
    }
    fullDepth += nodeDepths(root.left, fullDepth + 1) + nodeDepths(root.right, fullDepth + 1);
    return fullDepth;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }