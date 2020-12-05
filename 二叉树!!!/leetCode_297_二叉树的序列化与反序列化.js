var serialize = function(root) {
    if (root == null) {                  // 遍历到 null 节点
        return 'X';
      }
      const left = serialize(root.left);   // 左子树的序列化结果
      const right = serialize(root.right); // 右子树的序列化结果
      return root.val + ',' + left + ','+ right; // 按  根,左,右  拼接字符串
};

var deserialize = function(data) {
    let  list = data.split(',');

    function buildTree(list){
        let rootVal = list.shift();
        if(rootVal == "X"){
            return null;
        }
        let root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    }

    return buildTree(list);

};