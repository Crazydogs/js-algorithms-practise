// 联通分量检查
var unionCheck = function (total) {

    // 初始化节点列表
    this.node = [];
    for (var i = 0; i < total; i++) {
        this.node[i] = i;
    }

    // 联通分量数量
    this.count = total;
}

// 联通两个节点
unionCheck.prototype.union = function (node1, node2) {
    let root1 = this.find(node1);
    let root2 = this.find(node2);

    if (root1 !== root2) {
        this.node[root] = root2;
        this.count -= 1;
    }
}
// 返回节点所处的联通分量
unionCheck.prototype.find = function (index) {
    let current = index;
    while (this.node[current] != current) {
        current = this.node[current];
    }
    return current;
}
// 检查两个节点是否联通
unionCheck.prototype.connected = function (node1, node2) {
    return this.find(node1) === this.find(node2);
}

module.exports = unionCheck;
