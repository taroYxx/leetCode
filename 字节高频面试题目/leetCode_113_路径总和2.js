var pathSum = function(root, sum) {
    if(root == null) return [];
    let res = [];
    let subRes = [];
    let subCount = 0;

    
    traverse(root);
    function traverse(root){
        if(root == null) return;

        subRes.push(root.val);
        subCount += root.val;
        if(root.left == null && root.right == null){
            if(subCount == sum){
                res.push(subRes.concat());
            }
        }
        if(root.left){
            traverse(root.left);
            subRes.pop();
            subCount -= root.left.val;
        }
        
        if(root.right){
            traverse(root.right);
            subRes.pop();
            subCount -= root.right.val;
        }
    }
    return res;

};