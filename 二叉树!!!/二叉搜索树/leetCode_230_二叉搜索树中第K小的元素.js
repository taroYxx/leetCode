var kthSmallest = function(root, k) {
    let i = 0;
    let res = 0;
    function traverse(root){
        if (root == null) return;
        traverse(root.left);
        i++;
        if(i == k){
            res = root.val;
            return
        }
        traverse(root.right);
    }
    traverse(root);
    return res;
    
};


var kthSmallest = function(root, k) {
    let i = 0;
    let res = 0;
    function traverse(root){
        if (root == null) return;
        traverse(root.left);
        i++;
        if(i == k){
            res = root.val;
            return
        }
        traverse(root.right);
    }
    traverse(root);
    return res;
    
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */