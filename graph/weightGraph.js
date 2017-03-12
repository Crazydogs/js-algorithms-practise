// 无向有权限图
const Edge = require('./edge.js');

function WeightGraph(size) {
    this.v = [];
    this.edge = [];
    for (let i = 0; i < size; i++) {
        this.v[i] = new Set();
    }
}

WeightGraph.prototype.addEdge = function (i, j, weight) {
    let edge = new Edge(i, j, weight);
    this.v[i].add(edge);
    this.v[j].add(edge);
    this.edge.push(edge);
}
WeightGraph.prototype.adj = function adj(index) {
    return this.v[index]
}

WeightGraph.prototype.toString = function() {
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

module.exports = WeightGraph;
