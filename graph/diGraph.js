// 有向无权重图

function DiGraph(size) {
    this.v = [];
    for (let i = 0; i < size; i++) {
        this.v.push(new Set());
    }
    return this;
}

DiGraph.prototype.addEdge = function (i, j) {
    // 添加边
    this.v[i].add(j);
}
DiGraph.prototype.adj = function(index) {
    return this.v[index];
}

module.exports = DiGraph;
