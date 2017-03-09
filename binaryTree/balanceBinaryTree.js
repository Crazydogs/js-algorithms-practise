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
BalanceBinaryTree.prototype.flipColor = function flipColor(node) {
    node.left.color = 'black';
    node.right.color = 'black';
    node.color = 'red';
}
BalanceBinaryTree.prototype.put = function(key, val) {
    this.root = this.putOnNode(root, key, val);
    this.root.color = 'black';
}
BalanceBinaryTree.prototype.putOnNode = function (node, key, val) {
    if (node = null) {
        return new TreeNode(key, val, 1, 'red');
    }
    if (key < node.key) {
        node.left = this.putOnNode(node.left, key, val);
    } else if (key > node.key) {
        node.right = this.putOnNode(node.right, key, val);
    } else {
        node.val = val;
    }
    if (!this.isRed(node.left) && this.isRed(node.right)) {
        this.rotateLeft(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
        this.rotateRight(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
        this.flipColor(node);
    }
    nodde.size = size(node.left) + size(node.right) + 1;
    return node;
}
BalanceBinaryTree.prototype.isRed = function(node) {
    return node ? (node.color == 'red' ) : false;
}
function size(node) {
    return node ? node.size : 0;
}
