var minDepth = function(root) {

    if(root == null) return 0;

    let count = 0;
    let subCount = 1;
    function traverse(root){
        if(root.left == null && root.right == null){
            count = Math.min(count, subCount);
        }
        if(root.left){
            subCount++;
            traverse(root.left);
            subCount--;
        }
        if(root.right){
            subCount++;
            traverse(root.right);
            subCount--;
        }
    }
    return count;


};
