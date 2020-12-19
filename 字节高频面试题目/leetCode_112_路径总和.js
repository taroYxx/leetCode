var hasPathSum = function(root, sum) {

    if(root == null) return 0;
   
    let res = [];
    traverse(root);
    function traverse(root){
        if(root.left == null && root.right == null){
            res.push(root.val);
        }
        if(root.left){
            root.left.val = root.val + root.left.val;
            traverse(root.left);
        }
        if(root.right){
            root.right.val = root.val + root.right.val;
            traverse(root.right);
        } 
    }
    return res.indexOf(sum) >= 0;
};