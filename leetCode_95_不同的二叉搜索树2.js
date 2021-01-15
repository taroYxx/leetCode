var generateTrees = function(n) {
    


    function build(low, high){
        let res = [];
        if(low > high){
            res.push(null);
            return res
        }
        
        for (let i = low; i <= high; i++) {
            let leftTree = build(low, i-1);
            let rightTree = build(i+1, high);
            for (let p = 0; p < leftTree.length; p++) {
                for (let q = 0; q < rightTree.length; q++) {
                    let root = new TreeNode(i);
                    root.left = leftTree[p];
                    root.right = rightTree[q];
                    res.push(root);
                }
                
            }
            
        }
        return res;


    }

    return build(1, n)

};

console.log(generateTrees(3))