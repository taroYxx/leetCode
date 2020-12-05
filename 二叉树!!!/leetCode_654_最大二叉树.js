
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0) return null;
    let maxVal = - Infinity;
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > maxVal){
            maxVal = nums[i];
            index = i;
        }
    }
    var root = new TreeNode(maxVal);
    root.left = constructMaximumBinaryTree(nums.slice(0,index));
    root.right = constructMaximumBinaryTree(nums.slice(index+1,nums.length));
    return root;

};


console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))