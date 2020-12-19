var levelOrder = function(root) {
    
    if(root == null) return [];
    let res = [];
    let queue = [];
    queue.push(root);

    while(queue.length > 0){
        let node = queue.shift()
        res.push(node);
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
    }

    return res;

};


