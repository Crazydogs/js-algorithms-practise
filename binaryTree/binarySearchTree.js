// 二叉查找树

var TreeNode = require('./binaryTreeNode.js');

function BinarySearchTree() {
    this.size = 0;
    this.root = null;
}

BinarySearchTree.prototype.get = function(node, key) {
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
BinarySearchTree.prototype.put = function(node, key, val) {
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
BinarySearchTree.prototype.min = function(node) {
    if (!node) {
        return null;
    }
    return node.left ? this.min(node.left) : node.val;
}
BinarySearchTree.prototype.max = function(node) {
    if (!node) {
        return null;
    }
    return node.right ? this.max(node.right) : node.val;
}
BinarySearchTree.prototype.floor = function(node) {
    return this.max(node.left);
}
BinarySearchTree.prototype.ceil = function(node) {
    return this.min(node.right);
}
BinarySearchTree.prototype.rank = function(node, k) {
    if (!node) {
        return null;
    }
    let leftSize = size(node.left);
    if (k < leftSize + 1) {
        return this.rank(node.left, k);
    } else if (k > leftSize + 1) {
        return this.rank(node.right, k - leftSize - 1);
    } else {
        return node;
    }
}
BinarySearchTree.prototype.deleteMin = function(node) {
    if (!node.left) {
        return node.right;
    }
    node.left = deleteMin(node.left);
    node.size = size(node.left) + size(node.right) + 1;
    return node;
}
BinarySearchTree.prototype.delete = function(node, key) {
    if (!node) {
        return null;
    }
    if (key < node.key) {
        node.left = delete(node.left, key);
    } else if (key > node.key) {
        node.right = delete(node.right, key);
    } else {
        if (!node.left) {
            return node.right;
        }
        if (!node.right) {
            return node.left;
        }
        let t = this.min(node.right);
        this.deleteMin(node.right);
        t.left = node.left;
        t.right = node.right;
        t.size = size(t.left) + size(t.right) + 1;
        return t;
    }
    node.size = size(node.left) + size(node.right) + 1;
    return node;
}


module.exports = BinarySearchTree;

function size(node) {
    return node ? node.size : 0;
}
