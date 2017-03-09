// 二叉查找树

var TreeNode = require('./binaryTreeNode.js');

function BinarySearchTree(compare) {
    this.size = 0;
    this.root = null;
}

BinarySearchTree.prototype.get(node, key) {
    if (node == null) {
        return null;
    }

    if (key < node.key) {
        return this.get(node.left, key);
    } else if (key > node.key) {
        return this.get(node.right, key);
    } else {
        return node.val;
    }

}
BinarySearchTree.prototype.put(node, key, val) {
    if (node == null) {
        return new TreeNode(key, val, 1);
    }
    
    if (key < node.key) {
        node.left = this.put(node.left, key, val);
    } else if (key > node.key) {
        node.right = this.put(node.right, key, val);
    } else {
        node.val = val;
    }
    node.size = size(node.left) + size(node.right) + 1;
    return node;
}
BinarySearchTree.prototype.min(node) {
    if (!node) {
        return null;
    }
    return node.left ? this.min(node.left) : node.val;
}
BinarySearchTree.prototype.max(node) {
    if (!node) {
        return null;
    }
    return node.right ? this.max(node.right) : node.val;
}
BinarySearchTree.prototype.floor(node) {
    return this.max(node.left);
}
BinarySearchTree.prototype.ceil(node) {
    return this min(node.right);
}
BinarySearchTree.prototype.rank(node, k) {
    if (!node) {
        return null;
    }
    let leftSize = this.size(node.left);
    if (k < leftSize + 1) {
        return this.rank(node.left, k);
    } else if (k > leftSize + 1) {
        return this.rank(node.right, k - leftSize - 1);
    } else {
        return node;
    }
}


module.exports = BinarySearchTree;

function size(node) {
    return node ? node.size : 0;
}
