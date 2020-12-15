var diameterOfBinaryTree = function(root) {
    if(root == null) return 0;

    let max = 0;

    function dfs(root){
        if(root.left == null && root.right == null){
            return 0;
        }
        let leftSize = root.left == null ? 0 : dfs(root.left) + 1;
        let rightSize = root.right == null ? 0 : dfs(root.right) + 1;
        max = Math.max(max, leftSize + rightSize);
        return Math.max(leftSize, rightSize);
    }

};
