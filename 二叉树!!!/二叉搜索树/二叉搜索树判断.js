function isValidBST(root, min, max){
    if(root == null) return null;
// 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val 
    if(min != null && root.val <= min.val) return false;
    if(max != null && root.val >= max.val) return false;

    return isValidBST(root.left, min, root) && 
           isValidBST(root.right, root, max);

}