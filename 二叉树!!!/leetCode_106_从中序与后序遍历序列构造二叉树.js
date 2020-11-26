function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
    if(inorder.length == 0 || postorder.length == 0) return null;


    let rootVal = postorder[postorder.length-1];
    let index = inorder.indexOf(rootVal);



    let root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index+1,inorder.length), postorder.slice(index, postorder.length-1))
    return root;

};

console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]))