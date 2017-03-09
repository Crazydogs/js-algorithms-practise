// 二叉树节点

var Node = function (key, val, n) {
    this.key = key
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = n || 0;
}

module.exports = Node;
