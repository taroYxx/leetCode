function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var invertTree = function(root) {
    if(root == null) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root
};

console.log(invertTree())