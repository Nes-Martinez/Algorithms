function findClosestValueInBst(tree, target) {
    return helperBST (tree, target, tree.value);

  }

  function helperBST(tree, target, closestVal) {
      if (tree === null) {
          return closestVal;
      }

      if (Math.abs(target - closestVal) > Math.abs(target - tree.value)) {
          closestVal = tree.value
      }

      if (target < tree.value) {
          return helperBST(tree.left, target, closestVal);
      } else if (target > tree.value) {
          return helperBST(tree.right, target, closestVal);
      } else {
          return closestVal;
      }
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }