// 有权有向图
let Edge = require('./diEdge.js');
function DiWeightGraph(size) {
    this.v = [];
    for (let i = 0; i < size; i++) {
        this.v.push(new Set());
    }
    this.edge = [];
    return this;
}

DiWeightGraph.prototype.addEdge = function(i, j, w) {
    let edge = new Edge(i, j, w);
    this.v[i].add(edge);
    this.edge.push(edge);
}
DiWeightGraph.prototype.adj = function (i) {
    return this.v[i];
}


DiWeightGraph.prototype.toString = function() {
    console.log('顶点数 ' + this.v.length);
    console.log('边数 ' + this.edge.length);
    this.v.map((val, index) => {
        let str = index + ': ';
        val.forEach(val => {
            str += val + ' ';
        });
        console.log(str);
    });
}
