var zigzagLevelOrder = function(root) {
    if(root == null) return [];
    let queue = [];
    let sum = [];
    queue.push(root);
    let index = 0;
    while(queue.length != 0){
        let length = queue.length;
        let res = [];
        while(length > 0){
            let node = queue.shift()
            res.push(node.val);
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
            length = length - 1;  
        }
        if(index % 2 == 0){
            sum.push(res);
        }else{
            sum.push(res.reverse());
        }
        index ++ ;
        
    }
    return sum;
};