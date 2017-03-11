// 有向无权重图

function DiGraph(size) {
    this.v = [];
    this.edge = 0;
    for (let i = 0; i < size; i++) {
        this.v.push(new Set());
    }
    return this;
}

DiGraph.prototype.addEdge = function (i, j) {
    // 添加边
    this.v[i].add(j);
    this.edge += 1;
}
DiGraph.prototype.adj = function(index) {
    return this.v[index];
}
DiGraph.prototype.reverse = function() {
    const R = new DiGraph(this.v.length);
    for (let i = 0; i < this.v.length; i++) {
        v[i].forEach(val => {
            R.addEdge(val, i);
        });
    }
    return R;
}
DiGraph.prototype.toString = function() {
    console.log('顶点数 ' + this.v.length);
    console.log('边数 ' + this.edge);
    this.v.map((val, index) => {
        let str = index + ': ';
        val.forEach(val => {
            str += val + ' ';
        });
        console.log(str);
    });
}

module.exports = DiGraph;
