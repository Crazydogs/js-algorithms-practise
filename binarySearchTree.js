// 二叉查找树

var TreeNode = require('./binaryTree.js');

var BinarySearchTree = function (compare) {
    this.size = 0;
    this.root = null;

    // 比较方法
    this.compare = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 0;
        if (a < b)  return -1;
    }
}

BinarySearchTree.prototype.put = function (content, currentNode) {
    if (!this.root) {
        this.root = new TreeNode(content);
        this.size += 1;
        return;
    }

    var currentNode = currentNode || this.root;
    var compareResult = this.compare(content.key, currentNode.content.key);
    if (compareResult === 0) {
        return currentNode;
    } else if (compareResult === -1) {
        if (currentNode.left) {
            this.put(content, currentNode.left);
            return;
        } else {
            var newNode = new TreeNode(content);
            currentNode.left = newNode;
            this.size += 1;
            return newNode;
        }
    } else if (compareResult === 1) {
        if (currentNode.right) {
            this.put(content, currentNode.right);
            return;
        } else {
            var newNode = new TreeNode(content);
            currentNode.right = newNode;
            this.size += 1;
            return newNode;
        }
    }
}
BinarySearchTree.prototype.get = function (key, currentNode) {
    var currentNode = currentNode || this.root;
    if (!currentNode) {
        return null;
    }

    var compareResult = this.compare(key, currentNode.content.key);
    if (compareResult === 0) {
        return currentNode.content;
    } else if (compareResult === -1) {
        if (currentNode.left) {
            return this.get(key, currentNode.left);
        } else {
            return null;
        }
    } else if (compareResult === 1) {
        if (currentNode.right) {
            return this.get(key, currentNode.right);
        } else {
            return null;
        }
    }
}
BinarySearchTree.prototype.delete = function (key, currentNode, parentNode) {
    var current = currentNode || this.root;
    if (!current) {
        return null;
    }

    var compareResult = this.compare(key, currentNode.content.key);
    if (compareResult === 0) {
        
    } else if (compareResult === -1) {
    }
}
BinarySearchTree.prototype.getMin = function (currentNode) {
    var current = currentNode || this.root;
    if (!current) {
        return null;
    }

    if (current.left) {
        return this.getMin(current.left);
    } else {
        return current.content;
    }
}
BinarySearchTree.prototype.getMax = function (currentNode) {
    var current = currentNode || this.root;
    if (!current) {
        return null;
    }

    if (current.right) {
        return this.getMax(current.right);
    } else {
        return current.content;
    }
}
BinarySearchTree.prototype.contains = function () {
}
BinarySearchTree.prototype.isEmpty = function () {
}

module.exports = BinarySearchTree;
