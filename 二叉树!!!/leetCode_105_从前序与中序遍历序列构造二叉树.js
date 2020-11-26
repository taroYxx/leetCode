function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var buildTree = function(preorder, inorder) {
    
    if(preorder.length == 0 || inorder.length == 0) return null;

    let rootVal = preorder[0];
    let index = inorder.indexOf(rootVal);
    let root = new TreeNode(rootVal);
    let leftSize = index 
    root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index+1, preorder.length), inorder.slice(index+1, inorder.length)) 
    return root;
};
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));