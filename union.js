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
    if (this.find(node1) !== this.find(node2)) {
        this.node[node1] = this.node[node2];
        this.count -= 1;
    }
}
// 返回节点所处的联通分量
unionCheck.prototype.find = function (index) {
    // 查找路径中经过的节点
    var path = [];
    path.push(index);

    // next 指针
    var pointer = this.node[index];
    while (pointer != this.node[pointer]) {
        // 如果节点 next 不是指向自身，则将节点加入查找路径中，继续查找
        path.push(pointer);
        pointer = this.node[pointer];
    }
    // 路径上的节点指针指向根节点
    for (var i = 0; i < path.length; i++) {
        this.node[path[i]] = pointer;
    }
    return pointer;
}
// 检查两个节点是否联通
unionCheck.prototype.connected = function (node1, node2) {
    return this.find(node1) === this.find(node2);
}

module.exports = unionCheck;
