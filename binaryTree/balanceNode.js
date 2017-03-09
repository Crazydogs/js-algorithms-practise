// 平衡树节点

module.exports = function Node (key, val, n, color) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = n || 0;
    this.color = color || 'black';
    return this;
}
