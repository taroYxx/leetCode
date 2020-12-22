var pathSum = function(root, sum) {
    if(root == null) return null;

    traverse(root);

    let res = [];
    let subRes = [];

    function traverse(root){
        if(root.left == null && root.right == null){
            res.push(subRes);
            subRes = [];
        }
        
        if(root == null) return 0;

        subRes.push(root.val);

        if(root.left){
            root.left.val = root.val + root.left.val;
            traverse(root.left);
        }
        if(root.right){
            root.right.val = root.val + root.right.val;
            traverse(root.right);
        }
    }

};