// 二叉树节点

module.exports = function Node(key, val, n) {
    this.key = key
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = n || 0;
    return this;
}
