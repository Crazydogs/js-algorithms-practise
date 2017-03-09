// 二叉平衡树

var TreeNode = require('./balanceNode.js');

function BalanceBinaryTree() {
    this.size = 0;
    this.root = null;
    return this;
}
module.exports = BalanceBinaryTree;

BalanceBinaryTree.prototype.rotateLeft = function rotateLeft(node) {
    // 将右边的红链接转到左边
    let middle = node.right;
    node.right = middle.left;
    middle.left = node;
    middle.color = node.color;
    node.color = 'red';
    middle.size = node.size;
    node.size = 1 + size(node.left) + size(node.right);
    return middle;
}
BalanceBinaryTree.prototype.rotateRight = function rotateRight(node) {
    // 将左边的红链接转到右边
    let middle = node.left;
    node.left = middle.right;
    middle.right = node;
    midnle.color = node.color;
    node.color = 'red';
    middle.size = node.size;
    node.size = size(node.left) + size(node.right) + 1;
    return middle;
}
