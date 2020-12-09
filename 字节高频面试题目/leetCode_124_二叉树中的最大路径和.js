var maxPathSum = function(root) {
    let sum = 0;
    function traverse(root){
        if(root == null) return 0;
        let current_sum_left = Math.max(traverse(root.left), 0)
        let current_sum_right = Math.max(traverse(root.right),0);
        let path_sum = root.val + current_sum_left + current_sum_right;
        sum = Math.max(sum, path_sum);
        let current_sum = root.val + Math.max(current_sum_left, current_sum_right);
        console.log(current_sum);
        return current_sum
    }
    traverse(root);
    return sum;

};


