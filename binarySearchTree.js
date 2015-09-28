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
    var self = this;

    if (!self.root) {
        self.root = new TreeNode(content);
        self.size += 1;
        return;
    }

    function addNode(parentNode, pointer, content) {
        var newNode = new TreeNode(content);
        parentNode[pointer] = newNode;
        self.size += 1;
        return newNode;
    }

    var currentNode = currentNode || self.root;
    var compareResult = self.compare(content.key, currentNode.content.key);
    if (compareResult === 0) {
        return currentNode;     // 已存在值不做处理
    } else if (compareResult === -1) {
        if (currentNode.left) {
            self.put(content, currentNode.left);
            return;
        } else {
            addNode(currentNode, 'left', content);
        }
    } else if (compareResult === 1) {
        if (currentNode.right) {
            self.put(content, currentNode.right);
            return;
        } else {
            addNode(currentNode, 'right', content);
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
BinarySearchTree.prototype.floor = function (currentNode) {
    var current = currentNode || this.root;
    if (!current) {
        return null;
    }
    if (current.left) {
        return this.getMax(current.left);
    } else {
        return null;
    }
}
BinarySearchTree.prototype.ceil = function (currentNode) {
    var current = currentNode || this.root;
    if (!current) {
        return null;
    }
    if (current.right) {
        return this.getMin(current.right);
    } else {
        return null;
    }
}
BinarySearchTree.prototype.contains = function () {
}
BinarySearchTree.prototype.isEmpty = function () {
}

module.exports = BinarySearchTree;
