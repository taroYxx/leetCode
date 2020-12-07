/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    
    // 层序遍历
    // while循环判断队列不空时，弹出一个结点，访问它，并把它的所有孩子结点入队列。
    if(root == null) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while(queue.length != 0){
        let length = queue.length;
        while(length > 0){
            let node = queue.shift();
            if(length == 1) res.push(node.val);
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
            length = length - 1;  
        }
    }
    return res;
};

