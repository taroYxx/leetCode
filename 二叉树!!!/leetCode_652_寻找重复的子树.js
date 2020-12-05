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
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findDuplicateSubtrees = function(root) {
    let freq = new Map;
    let res = []

    function traverse(root){
        if(root == null){
            return "#";
        }
        let left = traverse(root.left);
        let right = traverse(root.right);
        let str = left + "," + right + "," + root.val;
        if(freq.has(str)){
            freq.set(str, freq.get(str) + 1)
        }else{
            freq.set(str, 1)
        }
        if(freq.get(str) == 2){
            res.push(root);
        }
        return str;
    }

    traverse(root);
    return res;
};


