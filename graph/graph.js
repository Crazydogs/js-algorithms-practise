// 无向无权重图

function Graph(size) {
    this.v = [];        // 邻接链表
    for (let i = 0; i < size; i++) {
        this.v.push(new Set());
    }
    return this;
}

Graph.prototype.addEdge = function (i, j) {
    // 添加边
    this.v[i].add(j);
    this.v[j].add(i);
}
Graph.prototype.adj = function(index) {
    return this.v[index];
}

module.exports = Graph;
